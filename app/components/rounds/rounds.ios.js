import React from 'react-native';
import Reflux from 'reflux';
import Round from '../round/round';
import GameStore from '../../stores/game';
import GameActions from '../../actions/game';

const {
  ListView,
  Text,
  View
} = React;

const RoundsList = React.createClass({
  mixins: [Reflux.listenTo(GameStore, 'getRounds')],

  getInitialState() {
    return {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  },

  componentDidMount() {
    GameActions.get();
  },

  getRounds(rounds) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(rounds)
    });
  },

  renderRow(round) {
    console.log(round);
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
