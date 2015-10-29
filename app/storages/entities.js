import React from 'react-native';
import AppStorage from '../storages/app';

const { AsyncStorage } = React;

class EntitiesStorage extends AppStorage {
  static storageKey() {
    return 'entities';
  }
}

module.exports = EntitiesStorage;
