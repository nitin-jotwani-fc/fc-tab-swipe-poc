import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export const pagerTitleData = [
  {
    id: 0,
    title: "Fantasy",
  },
  {
    id: 1,
    title: "Commentary",
  },
  {
    id: 2,
    title: "Overview",
  },
  {
    id: 3,
    title: "Scorecard",
  },
  {
    id: 4,
    title: "Squads",
  },
  {
    id: 5,
    title: "Key Moments",
  },
];

const Item = ({ title, index, activePageIndex }) => (
  <View style={styles.item}>
    <Text
      style={[
        styles.title,
        index === activePageIndex ? styles.activeTitle : null,
      ]}
    >
      {title}
    </Text>
  </View>
);

export default function PagerTitleView({ activePageIndex }) {
  const renderItem = ({ item, index }) => (
    <Item title={item.title} index={index} activePageIndex={activePageIndex} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={pagerTitleData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff500015",
    marginBottom: 8,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    color: "#ff5000",
    textTransform: "uppercase",
    fontSize: 14,
  },
  activeTitle: {
    fontWeight: "700",
  },
});
