import React from 'react-native';

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  card: {
    flex: 0.3,
    height: 142,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 2
  },
  cardInner: {
    flex: 1,
  },
  image: {
    flex: 1,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
  text: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    textAlign: 'center',
    color: 'rgba(51, 51, 50, 0.8)',
  }
});
