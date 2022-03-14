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
            await AsyncStorage.setItem('@'.concat(key), JSON.stringify(value)).then(console.log('Saved ' + value + ' using ' + key));
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
        console.log("Removing data from: " + key)
        try {
            await AsyncStorage.removeItem('@'.concat(key));
        } catch (e) {
            console.log(e)
        }
    }

    async nuke() {
        console.log("Nuke is on the way");
        try {
            console.log("Clearing all data");
            await AsyncStorage.clear();
        } catch (e) {
            console.log(e);
        }
        console.log("Now I am become death");
    }

    async getAllKeys() {
        return await AsyncStorage.getAllKeys();
    }
}