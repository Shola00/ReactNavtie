import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

const figureSize = 24;
const metricPaddingTop = 6;
const graphImagewidth = Dimensions.get("window").width * 0.09;
const leftpadding = 25;
const titleFontSize = 20;
const metricFontSize = titleFontSize * 0.6;
const subtitleFontSize = titleFontSize * 0.5;
const defaultBorderWidth = 1;

class HealthMetrics extends Component {
  state = {};

  metricDisplayLayout = () => {
    if (this.props.isImagePositionRight) {
      return (
        <View style={[styles.alternateLayoutContainer]}>
          <View style={styles.alternateSubContainer}>
            <View style={styles.rowOneContainer}>
              <Text style={styles.titleTextStyle}>{this.props.title}</Text>
              <Text style={styles.metricTextStyle}>{this.props.metric}</Text>
            </View>
            <Text style={styles.subtitleTextStyle}>{this.props.subtitle}</Text>
          </View>
          <Image
            source={this.props.graphImage}
            style={[styles.alternateGraphImageStyle]}
            resizeMode={"contain"}
          />
        </View>
      );
    } else {
      return (
        <View style={[styles.container]}>
          <View style={styles.subContainer}>
            <View style={styles.rowOneContainer}>
              <Text style={styles.titleTextStyle}>{this.props.title}</Text>
              <Text style={styles.metricTextStyle}>{this.props.metric}</Text>
            </View>
            <Text style={styles.subtitleTextStyle}>{this.props.subtitle}</Text>
            <Image
              source={this.props.graphImage}
              style={styles.graphImageStyle}
              resizeMode={"contain"}
            />
          </View>
        </View>
      );
    }
  };

  render() {
    return this.metricDisplayLayout();
  }
}

const styles = {
  container: {
    width: "50%",
    height: "50%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2.5%",
    paddingLeft: "6%",
    borderBottomWidth: defaultBorderWidth,
    borderColor: "#D8D8D8",
    borderRightWidth: defaultBorderWidth
  },
  alternateLayoutContainer: {
    flexDirection: "row",
    width: "50%",
    height: "50%",
    paddingLeft: "6%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: defaultBorderWidth,
    borderColor: "#D8D8D8",
    borderRightWidth: defaultBorderWidth
  },
  subContainer: {
    width: "80%",
    height: "80%",
    alignItems: "flex-start"
  },
  alternateSubContainer: {
    width: "50%",
    height: "50%",
    // alignItems: "center"
    alignItems: "flex-start"
  },
  titleTextStyle: {
    fontSize: titleFontSize,
    marginRight: 5
  },
  rowOneContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5
  },
  metricTextStyle: {
    fontSize: metricFontSize,
    marginTop: "6.2%",
    color: "grey"
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: "blue"
  },
  subtitleTextStyle: {
    fontSize: subtitleFontSize,
    color: "grey",
    marginBottom: 15
  },
  graphImageStyle: {
    width: "75%",
    height: "14%"
  },
  alternateGraphImageStyle: {
    width: "30%",
    height: "30%",
    marginBottom: 5
  },

  graphImage: {
    flex: 0.5,
    marginTop: 4,
    height: graphImagewidth,
    width: graphImagewidth,
    backgroundColor: "grey"
  }
};

export default HealthMetrics;
