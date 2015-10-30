import React from 'react-native';
import Reflux from 'reflux';
import Config from '../config';
import GameActions from '../actions/game';
import UUIDGenerator from '../libs/uuid';

const GameStore = Reflux.createStore({
  listenables: [GameActions],

  onInit() {
    this.uuid = UUIDGenerator();
    const url = `${Config.apiPath}/games?uuid=${this.uuid}`;

    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((result) => result.json())
    .then((result) => {
      this.trigger(result.uuid);
    });
  },
});

module.exports = GameStore;
