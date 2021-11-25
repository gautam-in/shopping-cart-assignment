export class SBLocalStorage {
    setItem(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }

    getItem(key) {
        let value = localStorage.getItem(key);
        value = value ? JSON.parse(value) : value;
        return value;
    }

    removeItem(key) {
        if(!key) return;
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}