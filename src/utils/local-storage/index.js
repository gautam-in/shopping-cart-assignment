'use strict';
/**
 * Session Storage Module
 * @exports SessionStorage
 */
class SessionStorage {
    constructor() {
        try {
            if (
                typeof window !== 'undefined' &&
                typeof sessionStorage !== 'undefined'
            ) {
                this.hasStorage = true;
            } else {
                this.hasStorage = false;
            }
        } catch (e) {
            // console.log(e);
        }
    }

    /**
     * Set Item
     * @param {String} key - Key
     * @param {*} value - Value
     */
    setItem(key, value) {
        if (this.hasStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    /**
     * Get Item
     * @param {String} key - Key
     * @returns {*} associated value for the key
     */
    getItem(key) {
        if (this.hasStorage) {
            return JSON.parse(localStorage.getItem(key));
        }
    }

    /**
     * Remove Item
     * @param {String} key - Key
     */
    removeItem(key) {
        if (this.hasStorage) {
            localStorage.removeItem(key);
        }
    }

    /**
     * Length of Storage
     * @returns {Number} No of Items stored
     */
    length() {
        if (this.hasStorage) {
            return localStorage.length;
        }

        return 0;
    }
}

export default new SessionStorage();
