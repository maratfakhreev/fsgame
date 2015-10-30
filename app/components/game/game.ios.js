import React from 'react-native';
import Reflux from 'reflux';
import Styles from '../game/game_styles';
import GameActions from '../../actions/game';
import GameStore from '../../stores/game';
import UserStore from '../../stores/user';
import Socket from '../../libs/socket.io';
import Card from '../card/card';
import Header from '../header/header';
import CardStyles from '../card/card_big_styles';
import Rounds from '../rounds/rounds';

const {
  Text,
  View,
  Image,
  ScrollView
} = React;

const Game = React.createClass({
  mixins: [
    Reflux.listenTo(GameStore, 'setUUID'),
    Reflux.listenTo(UserStore, 'setUserType')
  ],

  getInitialState() {
    return {
      uuid: null,
      game: {
        you: { money: 0 },
        opponent: { money: 0 }
      }
    }
  },

  componentDidMount() {
    GameActions.init();
    GameActions.start();
  },

  setUUID(uuid) {
    this.setState({ uuid });
  },

  setUserType(game) {
    this.setState({ game });
  },

  render() {
    return (
      <View style={ Styles.container }>
        <Header game={ this.state.game } />

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
          <Card
            clickable={ true }
            styles={ CardStyles }
            type={ 1 }
            game={ this.state.game }
          />
          <Card
            clickable={ true }
            styles={ CardStyles }
            type={ 2 }
            game={ this.state.game }
          />
          <Card
            clickable={ true }
            styles={ CardStyles }
            type={ 3 }
            game={ this.state.game }
          />
        </View>
      </View>
    );
  }
});

module.exports = Game;
