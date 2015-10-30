import React from 'react-native';
import Reflux from 'reflux';
import Round from '../round/round';
import RoundStore from '../../stores/round';
import GameActions from '../../actions/game';

const {
  ListView,
  Text,
  View
} = React;

const RoundsList = React.createClass({
  mixins: [Reflux.listenTo(RoundStore, 'getRounds')],

  getInitialState() {
    return {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  },

  componentWillMount() {
    GameActions.get();
  },

  getRounds(rounds) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(rounds)
    });
  },

  renderRow(round) {
    return <Round data={ round }/>;
  },

  render() {
    return (
      <View>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderRow }
        />
      </View>
    );
  }
});

module.exports = RoundsList;
