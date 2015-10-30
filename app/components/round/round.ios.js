import React from 'react-native';
import Reflux from 'reflux';
import CardStyles from '../card/card_small_styles';
import Card from '../card/card';
import UserStore from '../../stores/user';

const {
  View,
  Text,
  TouchableOpacity,
} = React;

const Round = React.createClass({
  mixins: [Reflux.listenTo(UserStore, 'setUserType')],

  getInitialState() {
    return {
      game: {},
    }
  },

  setUserType(game) {
    this.setState({ game });
    this.setOponent();
  },

  whoWins() {
    let { you, opponent } = this.props.data;

    if (you.card === 1 && opponent.card === 3) {
      return this.renderWin(you, opponent);
    }

    if (you.card === 3 && opponent.card === 1) {
      return this.renderLoose(you, opponent);
    }

    if (you.card > opponent.card) {
      return this.renderWin(you, opponent);
    }

    if (you.card < opponent.card) {
      return this.renderLoose(you, opponent);
    }

    return `draw`
  },

  setOponent() {
    let role = (this.state.game.role === 'fs') ? 'client' : 'fs';
    this.opponentType = { role };
  },

  renderWin(you, opponent) {
    return (
      <Text>
        <Text style={ CardStyles.win }>win({ you.money })</Text> | loose({ opponent.money })
      </Text>
    );
  },

  renderLoose(you, opponent) {
    return (
      <Text>
        loose({ you.money }) | <Text style={ CardStyles.win }>win({ opponent.money })</Text>
      </Text>
    );
  },

  render() {
    let { you, opponent } = this.props.data;

    return (
      <View style={ CardStyles.round }>
        <Card game={ this.state.game } clickable={ false } styles={ CardStyles } type={ you.card }/>
        <Text style={ CardStyles.winner }>{ this.whoWins() }</Text>
        <Card game={ this.opponentType } clickable={ false } styles={ CardStyles } type={ opponent.card }/>
      </View>
    );
  }
});

module.exports = Round;
