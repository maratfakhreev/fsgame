import React from 'react-native';

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  card: {
    flex: 0.3,
    height: 140,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#69C3B5',
    borderRadius: 10
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
    textAlign: 'center'
  }
});
