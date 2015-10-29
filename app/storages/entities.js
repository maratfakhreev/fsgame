const React = require('react-native');
const Convert = require('../helpers/convert');

const { AsyncStorage } = React;

class AppStorage {
  static entityName() {
    return 'entites';
  }

  static get() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(this.entityName()).then((res) => resolve(Convert.toArray(res)));
    });
  }

  static set(value) {
    sValue = Convert.toString(value);

    if (Array.isArray(value)) {
      this.get().then((arr) => {
        let index = arr.indexOf(sValue);
        if (index === -1) arr.push(sValue);
        sValue = Convert.toString(arr);
      });
    }

    AsyncStorage.setItem(this.entityName(), sValue);
  }
}

module.exports = AppStorage;
