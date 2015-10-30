import React from 'react-native';
import GameActions from '../../actions/game';

const {
  Image,
  Text,
  View,
  TouchableWithoutFeedback
} = React;

const CARDS = [
  {},
  {
    text: 'Developer',
    image: 'https://pp.vk.me/c628127/v628127864/1b4ee/7O8f5yTmYxw.jpg'
  },
  {
    text: 'Designer',
    image: 'https://pp.vk.me/c628127/v628127864/1b4dc/zUShU403IRo.jpg'
  },
  {
    text: 'Manager',
    image: 'https://pp.vk.me/c628127/v628127864/1b4e5/C1s4AqK-wms.jpg'
  }
]

const Card = React.createClass({
  chooseCard(type) {
    if (this.props.clickable) {
      GameActions.choose(type);
    }
  },

  render() {
    let { type, styles } = this.props;
    let cardObject = CARDS[type];

    return (
      <View style={ styles.card }>
        <TouchableWithoutFeedback onPress={() => { this.chooseCard(type); }}>
          <View style={ styles.image }>
            <Image
              style={ styles.image }
              resizeMode="cover"
              source={{ uri: cardObject.image }}
            />
            <Text style={ styles.text }>{ cardObject.text }</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
});

module.exports = Card;
