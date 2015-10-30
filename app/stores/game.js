import React from 'react-native';
import Reflux from 'reflux';
import Config from '../config';
import GameActions from '../actions/game';

const GameStores = Reflux.createStore({
  listenables: [GameActions],

  onChoose() {

  },

  onGet() {
    // const url = `${Config.apiPath}/game`;
    // const type = 'get';
    // const params = '';

    // fetch(url, {
    //   method: type,
    //   body: params,
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then((result) => result.json())
    // .then((result) => {
    //   this.trigger(result);
    // });
    const data = [
      {
        "you": { "money": 300, "card": 3 },
        "opponent": { "money": 500, "card": 1 }
      },
      {
        "you": { "money": 300, "card": 3 },
        "opponent": { "money": 500, "card": 1 }
      },
      {
        "you": { "money": 300, "card": 3 },
        "opponent": { "money": 500, "card": 1 }
      },
      {
        "you": { "money": 300, "card": 3 },
        "opponent": { "money": 500, "card": 1 }
      },
      {
        "you": { "money": 300, "card": 3 },
        "opponent": { "money": 500, "card": 1 }
      }
    ];

    this.trigger(data);
  }
});

module.exports = GameStores;
