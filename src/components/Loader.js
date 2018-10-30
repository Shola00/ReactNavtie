import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";


const Loader = ({ size }) => {
  return(
    <View style={styles.Loader}>
      <ActivityIndicator size={size || 'small'} />
    </View>
  );
}

const styles = {
   loader: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   }
}

export default Loader;
