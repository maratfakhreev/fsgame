import React from 'react-native';
import Reflux from 'reflux';
import Styles from '../game/game_styles';
import GameActions from '../../actions/game';
import EntitiesStore from '../../stores/game';
import Socket from '../../libs/socket.io';
import Card from '../card/card';
import CardStyles from '../card/card_big_styles';
import Rounds from '../rounds/rounds';

const {
  Text,
  View,
  Image,
  ScrollView
} = React;

const Game = React.createClass({
  mixins: [Reflux.listenTo(EntitiesStore, 'setMessage')],

  getInitialState() {
    return {
      msg: 'Reflux is not ready to use'
    }
  },

  setMessage(msg) {
    this.setState({ msg });
  },

  render() {
    return (
      <View style={ Styles.container }>
        <View style={ Styles.header }>
          <View style={ Styles.player }>
            <Text style={ Styles.textCircle }>You</Text>
            <Text>5</Text>
          </View>
          <View style={ Styles.player }>
            <Text style={ Styles.textCircle }>He</Text>
            <Text>500</Text>
          </View>
        </View>

        <ScrollView
          automaticallyAdjustContentInsets={ false }
          showsVerticalScrollIndicator={ true }
          contentInset={{ bottom: 50 }}
        >
          <View style={ Styles.list }>
            <Rounds/>
          </View>
        </ScrollView>

        <View style={ Styles.cards }>
          <Card clickable={ true } styles={ CardStyles } type={ 1 }/>
          <Card clickable={ true } styles={ CardStyles } type={ 2 }/>
          <Card clickable={ true } styles={ CardStyles } type={ 3 }/>
        </View>
      </View>
    );
  }
});

module.exports = Game;
