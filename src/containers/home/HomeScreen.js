

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';



export default class HomeScreen extends Component {
  render() {
    return (
      <View>
          <Text>This is Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
