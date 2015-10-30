import React from 'react-native';
import GameActions from '../../actions/game';

const {
  Image,
  Text,
  View,
  TouchableWithoutFeedback
} = React;

const FS_CARDS = [
  {},
  {
    text: 'Designer',
    image: 'https://pp.vk.me/c628127/v628127864/1b4dc/zUShU403IRo.jpg'
  },
  {
    text: 'Developer',
    image: 'https://pp.vk.me/c628127/v628127864/1b4ee/7O8f5yTmYxw.jpg'
  },
  {
    text: 'Manager',
    image: 'https://pp.vk.me/c628127/v628127864/1b4e5/C1s4AqK-wms.jpg'
  }
];

const CLIENT_CARDS = [
  {},
  {
    text: 'Mockup',
    image: 'https://s3-eu-west-1.amazonaws.com/uploads-eu.hipchat.com/54067/414279/iSNK7uAjjVlc703/cs-mockup.jpg'
  },
  {
    text: 'Deploy',
    image: 'https://s3-eu-west-1.amazonaws.com/uploads-eu.hipchat.com/54067/414279/A3WA21zNGxYeh1z/cs-deploy.jpg'
  },
  {
    text: 'Deadline',
    image: 'https://s3-eu-west-1.amazonaws.com/uploads-eu.hipchat.com/54067/414279/P3qE6DegPT6tq0p/cs-deadline.jpg'
  }
];

const Card = React.createClass({
  getInitialState() {
    return {
      selected: {}
    }
  },

  chooseCard(type) {
    if (this.props.clickable) {
      GameActions.choose(type);
      this.setState({
        selected: {
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowOpacity: 1,
          shadowRadius: 3
        }
      });
    }
  },

  prepareCard(game, type) {
    if (game && game.role === 'fs') return FS_CARDS[type];

    return CLIENT_CARDS[type];
  },

  render() {
    let { styles, type, game } = this.props;
    this.cardObject = this.prepareCard(game, type);

    return (
      <View style={ [styles.card, this.state.selected] }>
        <TouchableWithoutFeedback onPress={() => { this.chooseCard(type); }}>
          <View style={ styles.image }>
            <Image
              style={ styles.image }
              resizeMode="cover"
              source={{ uri: this.cardObject.image }}
            />
            <Text style={ styles.text }>{ this.cardObject.text }</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
});

module.exports = Card;
