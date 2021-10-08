class StorageService {
  getStorage(key: string) {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    else return null;
  }

  setStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  clearStorage() {
    return localStorage.clear();
  }

  removeStorage(key: string) {
    return localStorage.removeItem(key);
  }
}
const storage = new StorageService();
export { storage as LocalStorage };
