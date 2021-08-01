import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheetContent from "./poc/bottom-sheet-content2";
import TabSwipePOC from "./poc/tabSwipePOC";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TabSwipePOC /> */}
      <BottomSheetContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 55,
  },
});
