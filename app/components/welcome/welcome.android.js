import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Reflux from 'reflux';
import Styles from '../welcome/welcome_styles';
import EntitiesActions from '../../actions/entities';
import EntitiesStore from '../../stores/entities';

const {
  Text,
  View,
} = React;

const Welcome = React.createClass({
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
        <Text style={ Styles.welcome }>
          Welcome to React Native!
          {'\n'}{'\n'}

          Reflux state: { this.state.msg }
          {'\n'}
        </Text>
        <Icon name="github" size={ 60 } color="#666" />
        <Text>
          github.com/maratfakhreev/react-native-base
          {'\n'}{'\n'}
        </Text>
        <Text style={ Styles.instructions }>
          To get started, edit index.android.js
        </Text>
        <Text style={ Styles.instructions }>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
});

module.exports = Welcome;
