import React from 'react-native';

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF7F6'
  },
  list: {
    flex: 1,
    paddingBottom: 100
  },
  cards: {
    flex: 1,
    backgroundColor: '#69C3B5',
    height: 150,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    opacity: 1
  },
  header: {
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    height: 70,
    backgroundColor: '#EEA4CE',
    opacity: 1,
    flexDirection: 'row'
  },
  player: {
    flex: 0.5
  },
  playerCircle: {
    flex: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#333'
  },
  textCircle: {
    flex: 0.5,
    color: '#fff'
  }
});
