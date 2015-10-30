import React from 'react-native';
import Reflux from 'reflux';
import Config from '../config';
import GameActions from '../actions/game';
import UUIDGenerator from '../libs/uuid';

const RoundStore = Reflux.createStore({
  listenables: [GameActions],

  onGet() {
    const data = [
      {
        "you": { "money": 5, "card": 3 },
        "opponent": { "money": 500, "card": 1 }
      },
      {
        "you": { "money": 4, "card": 2 },
        "opponent": { "money": 600, "card": 2 }
      },
      {
        "you": { "money": 4, "card": 2 },
        "opponent": { "money": 600, "card": 3 }
      },
      {
        "you": { "money": 5, "card": 3 },
        "opponent": { "money": 500, "card": 1 }
      },
      {
        "you": { "money": 6, "card": 2 },
        "opponent": { "money": 400, "card": 1 }
      },
      {
        "you": { "money": 5, "card": 1 },
        "opponent": { "money": 500, "card": 2 }
      }
    ];

    this.trigger(data);
  }
});

module.exports = RoundStore;
