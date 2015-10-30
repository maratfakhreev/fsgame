import React from 'react-native';

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  card: {
    flex: 0.2,
    height: 90,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8
  },
  cardInner: {
    flex: 1,
  },
  image: {
    flex: 1,
    marginTop: 2,
    marginRight: 2,
    marginBottom: 2,
    marginLeft: 2,
  },
  text: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 10
  },
  round: {
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    flex: 1,
    flexDirection: 'row',
  },
  winner: {
    flex: 0.6,
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: 35
  },
});
