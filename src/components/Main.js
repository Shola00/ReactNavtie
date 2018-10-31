import React from 'react'
import { Platform, Image, Text, View } from 'react-native'
import firebase from 'firebase';

export default class Main extends React.Component {
  state = {
    currentUser: null
  }

  componentWillMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state
    return(
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
     </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
