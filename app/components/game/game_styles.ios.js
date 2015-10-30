import React from 'react-native';

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'RGBA(255, 221, 155, 0.3)'
  },
  list: {
    flex: 1,
    paddingBottom: 100
  },
  cards: {
    flex: 1,
    backgroundColor: 'rgba(235, 113, 107, 0.8)',
    height: 150,
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    opacity: 1
  }
});
