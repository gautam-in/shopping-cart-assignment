const config = require('config'),
    realmConfig = config.get('realmConfig');
const adapterService = require('./adapterService');
const common = require('../common'),
    CF = common.function;
// var async = require("async");
const redisGetInfo = require('../middleware/redisGetInfo');

module.exports = {
    customerAdapter: (adapterConfig, db) => {
        this.adapter = new Realm.Sync.Adapter(
            adapterConfig.local_path,
            adapterConfig.server_url,
            Realm.Sync.User.login(realmConfig.REALM_LOGIN_URL,
                Realm.Sync.Credentials.adminToken(adapterConfig.admin_token)),
            adapterConfig.realm_path_regex,

            // This callback is called any time a new transaction is available for
            // processing for the given path. The argument is the path to the Realm
            // for which changes are available. This will be called for all Realms
            // which match realm_path_regex.
            (realm_path) => {
                console.log("Realm Path>>", realm_path);
                var realmPathArray = realm_path.split("/");
                var current_instructions = this.adapter.current(realm_path);
                var device_digit_regex_16 = /^[0-9]{16,16}$/;
                if (device_digit_regex_16.test(realmPathArray[2])) {
                    let task = [];
                    // let redisGetInformation = redisGetInfo.redisGetFleetID(realmPathArray[2]);
                    // console.log('redisGetInformation>>>', redisGetInformation);
                    while (current_instructions) {
                        // if defined, process the current array of instructions
                        task = adapterService.processInstructions(realmPathArray[2], realmPathArray[3], current_instructions, realm_path, db);						// call advance to progress to the next transaction
                        this.adapter.advance(realm_path);
                        current_instructions = this.adapter.current(realm_path);
                        // async.series(task, function (err,result) {
                        // 	if (err){

                        // 	}
                        // 		// console.log("Error: ");
                        // 	else
                        // 	console.log("current_instructions Result: ", result);
                        // });
                    }
                    console.log('>>>>task', task);
                }
                else {
                    CF.nodeLogger(`Realm path ${realm_path} is not valid`, new Date().toJSON());
                }
            }
        );

    }
}