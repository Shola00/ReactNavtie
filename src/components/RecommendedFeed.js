import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

class RecommendedFeed extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.feedImage}
          source={this.props.contentData.imageURL}
        />
        <Text style={[styles.centerAlignText, styles.titleTextStyle]}>
          {" "}
          {this.props.contentData.title}{" "}
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    width: 80,
    height: "100%",
    marginTop: 15,
    marginRight: 20,
    marginBottom: 10,
    alignItems: "center"
  },
  feedImage: {
    width: "100%",
    height: "52%",
    borderRadius: 6,
    marginBottom: 8
  },
  centerAlignText: {
    textAlign: "center"
  },
  titleTextStyle: {
    fontSize: 10.5
  }
};

export default RecommendedFeed;
