import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MiniSC() {
  return (
    <View style={styles.container}>
      <Text>Mini ScoreCard Component test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dbebff",
    paddingLeft: 15,
    paddingTop: 15,
    height: 200,
  },
});
