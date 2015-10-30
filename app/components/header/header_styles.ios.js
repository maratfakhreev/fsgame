import React from 'react-native';

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  header: {
    paddingTop: 25,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 5,
    height: 70,
    backgroundColor: 'rgba(235, 113, 107, 0.8)',
    opacity: 1,
    flexDirection: 'row'
  },
  player: {
    flex: 0.5,
    flexDirection: 'row'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    borderWidth: 2,
    borderColor: '#fff'
  },
  textCircle: {
    flex: 0.5,
    color: '#fff'
  },
  last: {
    flex: 0,
    alignSelf: 'flex-end'
  },
  money: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0.5,
    color: '#fff'
  },
});
