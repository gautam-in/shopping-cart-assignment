//Common class for interacting with web storage
export class SessionStorageService {
    
    setItem(key, value, canSerialize = false){
        if(canSerialize){
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(key, value)
    }

    getItem(key, canDeserialize = false){
        let value = sessionStorage.getItem(key);
        if(canDeserialize){
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