/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import Entype from 'react-native-vector-icons/Entypo';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/home';
import Router from './src/navigation/router';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>

  );
}



export default App;
