import React from 'react-native';
import Reflux from 'reflux';
import Config from '../config';
import GameActions from '../actions/game';

const UserStore = Reflux.createStore({
  listenables: [GameActions],

  onStart() {
    let startData = {
      role: 'fs',
      you: { money: 5 },
      opponent: { money: 5000 }
    };

    this.trigger(startData);
  }
});

module.exports = UserStore;
