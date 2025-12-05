/** @format */

import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={"#fff"} size={"large"} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000088",
  },
});
