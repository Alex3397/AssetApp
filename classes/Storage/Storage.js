import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
    constructor() {}

    async getArticle(key) {
        try {
            console.log('Getting value from ' + key)
            return await AsyncStorage.getItem('@'.concat(key));
        } catch (e) {
            console.log(e);
        }
    };
    
    async saveArticle(key, value) {
        try {
            console.log('Saving ' + value + ' using ' + key)
            await AsyncStorage.setItem('@'.concat(key), value).then(console.log('Saved ' + value + ' using ' + key));
        } catch (e) {
            console.log(e);
        }
    };

    async saveObject(key, value) {
        try {
            await AsyncStorage.setItem('@'.concat(key), JSON.stringify(value));
            console.log('Saving ' + value + ' using ' + key)
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
}