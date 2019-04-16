const alertService = require('./alertService');
const tripService = require('./tripService');
const tripDataService = require('./tripDataService');
const mergeTripObject = require('../middleware/mergeTripObject');
const Trip = require('../models/tripSchema');
const common = require('./../common'),
    CF = common.function;

let task = [];

let pushTripTask = (trip, realm_path, db) => {
    if (trip != {} && trip.hasOwnProperty('tripId')) {
        console.log("trip data>>", trip);
        db.collection('trip').updateOne({ _id: trip.tripId }, { $set: trip }, { upsert: true }, (err, res) => {
            if (err) {
                console.log("err>>>", err);
                return err;
            }
            return res;
        });
    }
}

let pushAlertsTask = (instructionType, info, values, realm_path, instructionIdentity) => {
    task.push((callback) => {
        let cb = (err) => {
            if (err) {
                callback(err);
                return;
            }
            // callback();
        }
        switch (instructionType) {
            case 'INSERT':
                alertService.insertAlerts(info, values, realm_path, cb);
                break;
            case 'SET':
                alertService.updateAlerts(instructionIdentity, info, values, realm_path, cb);
                break;
        }
    });
}

let pushTripDataTask = (instructionType, instructionsOrIdentity, info, values, realm_path) => {
    task.push((callback) => {
        let cb = (err) => {
            if (err) {
                callback(err);
                return;
            }
            // callback();
        }
        switch (instructionType) {
            case 'INSERT':
                tripDataService.insertTripData(instructionsOrIdentity, info, values, realm_path, cb);
                break;
            case 'SET':
                tripDataService.updateTripData(instructionsOrIdentity, info, values, realm_path, cb);
                break;
        }
    });
}


module.exports = {
    processInstructions: async (deviceNo, sharedPath, instructions, realm_path, db) => {
        task = [];
        let info = {
            deviceSerialNumber: deviceNo,
            sharedPathStr: sharedPath,
            sharedPathVersion: sharedPath ? sharedPath.split("_")[1] ? parseInt(sharedPath.split("_")[1]) : 0 : 0
        }

        let trip = {};
        CF.nodeLogger(`Data ${JSON.stringify(instructions)} `);
        instructions.map((instruction) => {
            let values = instruction.values;
            // perform an operation for each type of instruction
            switch (instruction.type) {
                case 'INSERT':
                    if (instruction.object_type == 'Alert' || instruction.object_type == 'Trip' || instruction.object_type == 'TripData') {
                        writeFile(instructions);
                        if (instruction.object_type == 'Alert') {
                            // pushAlertsTask(instruction.type, info, values, realm_path, null);
                            // alertService.insertAlerts(info, values, realm_path, db);
                            return new Promise((resolve) => {
                                alertService.insertAlerts(info, values, realm_path, db, resolve);
                            });
                        }
                        if (instruction.object_type == 'Trip') {
                            trip = { ...instruction.values, ...info, ...{ tripId: instruction.identity } }
                            // trip = mergeTripObject.mergeTrip(instruction.values, info, instruction.identity);
                            // pushTripTask(mergeTripObject.mergeTrip(instruction.values, info, instruction.identity), realm_path);
                        }
                        if (instruction.object_type == 'TripData') {
                            console.log("trip data>>", instruction.values);
                            // pushTripDataTask(instruction.type, instructions, info, instruction.values, realm_path);
                            // tripDataService.insertTripData(instructions, info, values, realm_path, db);
                            return new Promise((resolve) => {
                                tripDataService.insertTripData(instructions, info, instruction.values, realm_path, db, resolve);
                            });
                        }
                    }
                    break;
                case 'SET':
                    if (instruction.object_type == 'Trip') {
                        trip = { ...trip, ...instruction.values, ...info, ...{ tripId: instruction.identity } };
                        // trip = Object.assign({}, trip, mergeTripObject.mergeTrip(instruction.values, info, instruction.identity));
                        // pushTripTask(Object.assign({}, trip, mergeTripObject.mergeTrip(instruction.values, info, instruction.identity)), realm_path);
                    }
                    if (instruction.object_type == 'Alert') {
                        // pushAlertsTask(instruction.type, info, values, realm_path, instruction.identity);
                        // alertService.updateAlerts(info, values, realm_path, db);
                        return new Promise((resolve) => {
                            alertService.updateAlerts(values, info, instruction.identity, realm_path, db, resolve);
                        });
                    }
                    if (instruction.object_type == 'TripData') {
                        console.log("trip data SET>>", instruction.values);
                        // pushTripDataTask(instruction.type, instruction.identity, info, values, realm_path)
                        // tripDataService.updateTripData(instructions, info, values, realm_path, db);
                        return new Promise((resolve) => {
                            tripDataService.updateTripData(values, info, instruction.identity, realm_path, db, resolve);
                        });
                    }
                    break;
                case 'DELETE':
                    // delete_object(instruction.object_type, instruction.identity);
                    break;
                // ... add handlers for all other relevant instruction types
                default:
                    break;
            }
        });//end insturctions map 

        if (trip.tripId) {
            try {
                console.log(trip);
                let res = await db.collection('trip').updateOne({ _id: trip.tripId }, { $set: trip }, { upsert: true });
                console.log(trip, res);
                return res;
                // return task;
            } catch (error) {
                CF.nodeLogger(` Trip catch insert/update error === ${error} `, new Date().toJSON());
                console.log(error);
                if (error.toString().match(/E11000/g)) {
                    db.collection('trip').updateOne({ _id: trip.tripId }, { $set: trip }, { upsert: true })
                        .then(resolve => {
                            console.log("result>>", resolve);
                        })
                        .catch(err => {
                            console.log('error=>', err);
                        });
                }
                return error;
            }
        }
    }
}