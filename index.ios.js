/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import Steakwando from './src/app/Steakwando.js'

export default class App extends Component {
  render() {
    return (
      <Steakwando />
    );
  }
}


AppRegistry.registerComponent('Steakwando', () => App);
