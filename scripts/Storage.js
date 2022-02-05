
export class CustomStorage {
    constructor(key = 'defaultKey', {value = 'defaultValue', storage = localStorage} = {}) {
        this.key = key;
        this.value = value;
        this.storage = storage;
    }

    get() {
        return this.storage.getItem(this.key);
    }

    set(value = this.value) {
        this.storage.setItem(this.key, value);
    }

    clear() {
        this.storage.clear();
    }

    isEmpty() {
        return this.storage.getItem(this.key) === null || this.storage.getItem(this.key) === undefined;
    }
}