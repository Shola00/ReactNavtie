/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import * as firebase from 'firebase';
import Login from './Login';
import Loader from './Loader';
import PeopleList from './PeopleList'


export default class App extends Component {


      state = {
        loggedIn: null,
      }

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
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true })
        } else {
          this.setState({ loggedIn: false })
        }
      })
    }

    renderInitialView() {
      switch (this.state.loggedIn) {
        case true:
          return <PeopleList />;
        case false:
          return <Login />;
        default:
          return <Loader size="large" />;
      }
    }

    render() {
      return (
        <View style={styles.container}>
          {this.renderInitialView()}
        </View>
      );
    }
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
};
