//Common class for interacting with web storage
export class SessionStorageService {
    
    setItem(key, value, stringifyFlag = false){
        if(stringifyFlag){
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(key, value)
    }

    getItem(key, parseFlag = false){
        let value = sessionStorage.getItem(key);
        if(parseFlag){
            value = JSON.parse(value);
        }
        return value;
    }

    removeItem(key){
        sessionStorage.removeItem(key);
    }

    hasItem(key){
        return sessionStorage.getItem(key) ? true : false;
    }
}