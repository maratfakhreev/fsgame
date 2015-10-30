import React from 'react-native';
import Reflux from 'reflux';
import Styles from '../header/header_styles';
import GameActions from '../../actions/game';
import CardStore from '../../stores/card';

const {
  Text,
  View,
  Image,
  ScrollView,
  StatusBarIOS
} = React;

const Header = React.createClass({
  mixins: [Reflux.listenTo(CardStore, 'setInactive')],

  getInitialState() {
    return {
      inactive: {}
    }
  },

  componentWillMount() {
    StatusBarIOS.setStyle(1);
  },

  setInactive() {
    this.setState({ inactive: { opacity: 0.5 } });
  },

  renderLeftFs(user, style) {
    return (
      <View style={ [Styles.player, style, this.state.inactive] }>
        <Image
          style={ Styles.avatar }
          resizeMode="cover"
          source={{ uri: 'https://avatars0.githubusercontent.com/u/15136?v=3&s=200' }}
        />
        <Text style={ Styles.money }>{ user.money } Stacks</Text>
      </View>
    );
  },

  renderRightFs(user, style) {
    return (
      <View style={ [Styles.player, style] }>
        <Text style={ Styles.money }>{ user.money } Stacks</Text>
        <Image
          style={ Styles.avatar }
          resizeMode="cover"
          source={{ uri: 'https://avatars0.githubusercontent.com/u/15136?v=3&s=200' }}
        />
      </View>
    );
  },

  renderLeftClient(user, style) {
    return (
      <View style={ [Styles.player, style, this.state.inactive] }>
        <Image
          style={ Styles.avatar }
          resizeMode="cover"
          source={{ uri: 'https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg' }}
        />
        <Text style={ Styles.money }>{ user.money }$</Text>
      </View>
    );
  },

  renderRightClient(user, style) {
    return (
      <View style={ [Styles.player, style] }>
        <Text style={ Styles.money }>{ user.money }$</Text>
        <Image
          style={ Styles.avatar }
          resizeMode="cover"
          source={{ uri: 'https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg' }}
        />
      </View>
    );
  },

  render() {
    let { role, you, opponent } = this.props.game;

    if (role === 'fs') {
      return (
        <View style={ Styles.header }>
          { this.renderLeftFs(you, {}) }
          { this.renderRightClient(opponent, Styles.last) }
        </View>
      );
    }
    else {
      return (
        <View style={ Styles.header }>
          { this.renderLeftClient(you, {}) }
          { this.renderRightFs(opponent, Styles.last) }
        </View>
      )
    }
  }
});

module.exports = Header;


