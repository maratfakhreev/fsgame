import React from 'react-native';
import Reflux from 'reflux';
import Styles from '../game/game_styles';
import EntitiesActions from '../../actions/entities';
import EntitiesStore from '../../stores/entities';

const {
  Text,
  View,
} = React;

const Game = React.createClass({
  mixins: [Reflux.listenTo(EntitiesStore, 'setMessage')],

  getInitialState() {
    return {
      msg: 'Reflux is not ready to use'
    }
  },

  componentDidMount() {
    EntitiesActions.call();
  },

  setMessage(msg) {
    this.setState({ msg });
  },

  render() {
    return (
      <View style={ Styles.container }>
        <Text>ogogo</Text>
      </View>
    );
  }
});

module.exports = Game;
