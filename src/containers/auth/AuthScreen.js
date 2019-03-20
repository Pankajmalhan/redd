

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import StorageManager from "../../utils/StorageManager"


export default class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    try {
      var userToken = await StorageManager.getItem('UserToken');
      if (userToken) {
        this.props.navigation.navigate('Home');
      } else {
        this.props.navigation.navigate('LogIn');
      }
    }
    catch (exp) {
      this.props.navigation.navigate('LogIn');
    }
  }
  render() {
    return null;
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
