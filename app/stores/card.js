import React from 'react-native';
import Reflux from 'reflux';
import GameActions from '../actions/game';

const CardStore = Reflux.createStore({
  listenables: [GameActions],

  onChoose() {
    this.trigger();
  }
});

module.exports = CardStore;
