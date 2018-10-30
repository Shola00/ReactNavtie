import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import firebase from 'firebase';
import Loader from './Loader';
import { StackNavigator } from "react-navigation";


export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({error: '', loading: true})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onAuthSuccess.bind(this))
          .catch((error) => {
            alert(error)
            this.setState({
              error: 'Authentication Failed',
              loading: false,
            });
          });
      });
  }

  onAuthSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  onAuthFailed() {
    this.setState({
      error: 'Authentication Failed',
      loading: false,
    });
    alert(error)
  }

  renderLoader() {
    if(this.state.loading) {
      return <Loader size="large" />
    } else {
      return (
        <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
          <Text>Login</Text>
        </TouchableOpacity>
      );
    }
  }
  render() {
    return (
      <View>
        <Text>Login or Create an Account</Text>
        <TextInput
         value={this.state.email}
         placeholder={'Email...'}
         onChangeText={email => this.setState({ email })}
        />
        <TextInput
         value={this.state.password}
         placeholder={'password...'}
         secureTextEntry
         onChangeText={password => this.setState({ password })}
        />
        <Text style={{ color: 'red' }}>{this.state.error}</Text>
          {this.renderLoader()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
