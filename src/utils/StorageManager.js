import { AsyncStorage } from 'react-native';

export default class StorageManager {
    static setItem(key, value) {
        return AsyncStorage.setItem(key, value);
    }

    static getItem(key) {
        return AsyncStorage.getItem(key);
    }
}