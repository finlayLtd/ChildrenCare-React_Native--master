/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { PrimaryNav } from "./Router";

class App extends Component {

  render() {
    return (
      <PrimaryNav />
    );
  }
}
export default App;