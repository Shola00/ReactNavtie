/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, Image, Text, View } from "react-native";
import { SwitchNavigator } from 'react-navigation'
import Loading from './Loading'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Main from './Main'

import * as firebase from 'firebase';
import Login from './Login';
import Loader from './Loader';
import PeopleList from './PeopleList'

const AppScreen = SwitchNavigator(
  {
    Loading,
    SignUp,
    SignIn,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyD-2oj_qhAA3u8MylbE9nW53auCmbraCkQ",
      authDomain: "sample-project-b9d0a.firebaseapp.com",
      databaseURL: "https://sample-project-b9d0a.firebaseio.com",
      projectId: "sample-project-b9d0a",
      storageBucket: "sample-project-b9d0a.appspot.com",
      messagingSenderId: "760925564208"
    }
    firebase.initializeApp(firebaseConfig);
  }

    render() {
      return(
        <AppScreen />
      );
    }
}
