const React = require('react-native');
const Reflux = require('reflux');
const AppConfig = require('../config/app');
const EntitiesActions = require('../actions/entities');

const EntitiesStore = Reflux.createStore({
  listenables: [EntitiesActions],

  onGet() {
    this.collection = [];

    if (!this.collection.length) {
      const url = `${AppConfig.apiPath}/smoothies`;
      const params = ``;

      fetch(`${url}${params}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((result) => result.json())
      .then((result) => {
        this.collection = result;
        this.notify();
      });
    }
    else {
      this.notify();
    }
  },

  notify() {
    this.trigger(this.collection);
  }
});

module.exports = EntitiesStore;
