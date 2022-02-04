import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
    constructor() {}

    async getArticle(key) {
        try {
            return await AsyncStorage.getItem('@'.concat(key));
        } catch (e) {
            console.log(e);
        }
    };
    
    async saveArticle(key, value) {
        try {
            var storedValue = await this.getArticle(key);
            if (storedValue != value) {await AsyncStorage.setItem('@'.concat(key), value).then(console.log('Saved ' + value + ' using ' + key));}
        } catch (e) {
            console.log(e);
        }
    };

    async saveObject(key, value) {
        try {
            await AsyncStorage.setItem('@'.concat(key), JSON.stringify(value));
        } catch (e) {
            console.log(e);
        }
    };

    async getObject(key) {
        try {
            return JSON.parse( await AsyncStorage.getItem('@'.concat(key)));
        } catch (e) {
            console.log(e);
        }
    };

    async removeArticle(key) {
        try {
            await AsyncStorage.removeItem('@'.concat(key));
        } catch (e) {
            console.log(e)
        }
    }

    async nuke() {
        try {
            await AsyncStorage.clear();
        } catch (e) {
            console.log(e);
        }
    }
}