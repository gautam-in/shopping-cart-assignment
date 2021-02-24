//Common class for interacting with web storage
export class WebStorage{
    
    setItemSessionStore(key, value, stringifyFlag = false){
        if(stringifyFlag){
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(key, value)
    }

    getItemSessionStore(key, parseFlag = false){
        let value = sessionStorage.getItem(key);
        if(parseFlag){
            value = JSON.parse(value);
        }
        return value;
    }

    removeItemSessionStore(key){
        sessionStorage.removeItem(key);
    }

    hasItemSessionStore(key){
        return sessionStorage.getItem(key) ? true : false;
    }
}