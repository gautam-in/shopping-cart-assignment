var db;

export const createDB = () => {
    let indexDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
    if (!indexDB) {
        console.log("Your browser does not support IndexedDB !");
    } else {
        // DB Creation
        // Define Object Store
        // Store Data
        // Retreive Data
        var connection = indexDB.open("SabkaBazar", 1);
        connection.onsuccess = function (e) {
            db = e.target.result; // access to database
            console.log("Connection opened successfully !");
        };

        connection.onerror = function () {
            console.log("Error opening the connection !");
        };

        connection.onupgradeneeded = function (e) {
            console.log("On Upgrade needed !");
            db = e.target.result; // access to database
            var cartOS = db.createObjectStore("cart"); // table / collection
            createIndex(cartOS)

        };
    }
}

function createIndex(cartOS) {
    cartOS.createIndex("c_id", "id", { unique: true });
    cartOS.createIndex("product_name", "product_name", { unique: false });
    cartOS.createIndex("product_img", "product_img", { unique: false });
    cartOS.createIndex("product_count", "product_count", { unique: false });
    cartOS.createIndex("product_price", "product_price", { unique: false });
    cartOS.createIndex("total_price", "total_price", { unique: false })
}

export function addProductCartIndex(cartObj) {
    // let id = Math.floor((Math.random() * 1000000) + 1);
    let txn = db.transaction(["cart"], "readwrite");
    let store = txn.objectStore("cart");
    let req = store.add(cartObj, cartObj.c_id); // inserting data in DB !
    req.onsuccess = function (e) {
        console.log(e.target.result);
    };
}

export function RetreiveCartIndex(id, callback) {
    // let id = Math.floor((Math.random() * 1000000) + 1);
    let txn = db.transaction(["cart"], "readwrite");
    let store = txn.objectStore("cart");
    let req = store.get(id); // inserting data in DB !
    req.onsuccess = function (e) {
        callback(e.target.result);
    };
}

export function RetriveCartList(callback) {
    let txn = db.transaction(["cart"], "readwrite");
    let store = txn.objectStore("cart");
    let req = store.getAll(); // inserting data in DB !
    req.onsuccess = function (e) {
        callback(e.target.result);
    };
}

export function addCountCartIndex(id) {
    let txn = db.transaction(["cart"], "readwrite");
    let store = txn.objectStore("cart");

    store.openCursor(id).onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
            let cartObj = { ...cursor.value }
            cartObj['product_count'] = cartObj.product_count + 1
            cartObj['total_price'] = (cartObj.product_count * cartObj.product_price)
            const req = cursor.update(cartObj);
            req.onsuccess = function (e) {
                console.log(e.target.result);
            };
        }
    }
}


export function removeCountCartIndex(id) {
    debugger

    let txn = db.transaction(["cart"], "readwrite");
    let store = txn.objectStore("cart");

    store.openCursor(id).onsuccess = (event) => {
        const cursor = event.target.result
        if (cursor) {
            let cartObj = { ...cursor.value }
            debugger
            if (cartObj.product_count === 1) {
                let req = store.delete(id); // inserting data in DB !
                txn.oncomplete = () => {
                    console.log('success');
                };
            } else {
                cartObj['product_count'] = cartObj.product_count - 1
                cartObj['total_price'] = (cartObj.product_count * cartObj.product_price)
                const req = cursor.update(cartObj);
                req.onsuccess = function (e) {
                    console.log(e.target.result);
                };
            }

        }
    }
}



export function deleteCartIndex(id) {
    let txn = db.transaction(["cart"], "readwrite");
    let store = txn.objectStore("cart");
    let req = store.delete(id); // inserting data in DB !
    req.onsuccess = function (e) {
        callback(e.target.result);
    };
}