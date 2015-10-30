import Reflux from 'reflux';

const GameActions = Reflux.createActions([
  'init',
  'start',
  'get',
  'choose'
]);
module.exports = GameActions;
