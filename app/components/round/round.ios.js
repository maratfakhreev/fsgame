import React from 'react-native';
import CardStyles from '../card/card_small_styles';
import Card from '../card/card';

const {
  View,
  Text,
  TouchableOpacity,
} = React;

const Round = React.createClass({
  whoWins() {
    let { you, opponent } = this.props.data;

    if (you.card > opponent.card) {
      return `win(${you.money}) | loose(${opponent.money})`
    }

    if (you.card < opponent.card) {
      return `loose(${you.money}) | win(${opponent.money})`
    }

    if (you.card === opponent.card) {
      return `draft`
    }
  },

  render() {
    let { you, opponent } = this.props.data;

    return (
      <View style={ CardStyles.round }>
        <Card clickable={ false } styles={ CardStyles } type={ you.card }/>
        <Text style={ CardStyles.winner }>{ this.whoWins() }</Text>
        <Card clickable={ false } styles={ CardStyles } type={ opponent.card }/>
      </View>
    );
  }
});

module.exports = Round;
