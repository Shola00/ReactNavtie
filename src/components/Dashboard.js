import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList
} from "react-native";
import HealthMetrics from "./HealthMetrics";
import CalendarStrip from "react-native-calendar-strip";
import RecommendedFeed from "./RecommendedFeed";

const recContent1 = {
  imageURL: require("../assets/img/sampleImage1.jpg"),
  title: "Loving your child well"
};

const recContent2 = {
  imageURL: require("../assets/img/sampleImage2.jpeg"),
  title: "Owning your pregnancy"
};

const recContent3 = {
  imageURL: require("../assets/img/sampleImage3.jpeg"),
  title: "Finding Time For Him"
};

const recContent4 = {
  imageURL: require("../assets/img/sampleImage4.jpeg"),
  title: "Taking care of you"
};

const recContent5 = {
  imageURL: require("../assets/img/sampleImage5.jpg"),
  title: "Basking in that pregnancy glow"
};

const profileRecommendedContent = [
  recContent1,
  recContent2,
  recContent3,
  recContent4,
  recContent5
];

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.75, flexDirection: "row" }}>
          <View style={{ flex: 0.86 }}>
            <Text style={styles.headerStyle}>Welcome back Bisola,</Text>
            <Text style={[styles.headerStyle, styles.withMarginBottom]}>
              Keep up the good work!
            </Text>
          </View>
          <Image
            style={styles.titleImageIcon}
            source={require("../assets/img/sampleImage1.jpg")}
          />
        </View>

        <View style={styles.secondContainer}>
          <HealthMetrics
            title={"120.42"}
            metric={"kg"}
            subtitle={"Current Weight"}
            graphImage={require("../assets/img/graph1.png")}
          />
          <HealthMetrics
            title={"75%"}
            metric={"mphi"}
            subtitle={"Pregnancy Health Index"}
            graphImage={require("../assets/img/graph2.png")}
          />
          <HealthMetrics
            title={"19"}
            metric={"weeks"}
            subtitle={"Pregnancy Duration"}
            graphImage={require("../assets/img/graph3.png")}
          />
          <HealthMetrics
            title={"33"}
            metric={"baby steps"}
            subtitle={"Journal Entries"}
            graphImage={require("../assets/img/footprints.png")}
            isImagePositionRight={true}
          />
        </View>

        <View style={{ flex: 0.8 }}>
          <CalendarStrip
            style={styles.calendarContainer}
            showMonth={false}
            highlightDateNameStyle={[{ color: "#2E66E7", fontWeight: "400" }]}
            highlightDateNumberStyle={{
              fontWeight: "400",
              color: "#CBC9D5",
              backgroundColor: "#BF2740",
              borderWidth: 0.3,
              borderColor: "#ffffff00",
              borderRadius: 14,
              overflow: "hidden",
              width: "110%",
              height: "100%",
              paddingVertical: "12%",
              top: "15%"
            }}
            weekendDateNameStyle={[
              { color: "#D8D8D8", fontWeight: "200" },
              styles.weekDayNameGlobalStyle
            ]}
            weekendDateNumberStyle={{ color: "black", fontWeight: "200" }}
            dateNameStyle={[
              { color: "#D8D8D8", fontWeight: "200" },
              styles.weekDayNameGlobalStyle
            ]}
            dateNumberStyle={{ color: "black", fontWeight: "200" }}
            calendarHeaderStyle={{
              color: "white",
              fontSize: 15,
              fontWeight: "100"
            }}
            iconStyle={{ display: "none" }}
            innerStyle={{ marginTop: 20 }}
            responsiveSizingOffset={1}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            backgroundColor: "White",
            borderTopWidth: 0.5,
            borderTopColor: "#D8D8D8",
            paddingTop: "4%",
            paddingLeft: "6%"
          }}
        >
          <Text style={{ fontWeight: "100" }}>Recommended For you</Text>

          <FlatList
            data={profileRecommendedContent}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            renderItem={({ item }) => <RecommendedFeed contentData={item} />}
          />
        </View>
      </View>
    );
  }
}

const imageIconwidth = Dimensions.get("window").width * 0.13;

const styles = {
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: "300"
  },
  withMarginBottom: {
    marginBottom: 24
  },
  secondContainer: {
    borderTopColor: "#0b0b35",
    borderTopWidth: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1.8
  },
  titleImageIcon: {
    height: imageIconwidth,
    width: imageIconwidth,
    borderRadius: imageIconwidth / 2
  },
  secondContainerWithBottomBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#979797"
  },
  secondContainerWithRightBorder: {
    borderRightWidth: 0.5,
    borderRightColor: "#979797"
  },
  calendarContainer: {
    alignItems: "stretch",
    width: "98%",
    paddingLeft: 10,
    paddingRight: 5,
    marginBottom: "10%"
  },
  weekDayNameGlobalStyle: {
    marginBottom: 7
  }
};

export default Dashboard;
