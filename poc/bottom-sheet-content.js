import React from "react";
import { StyleSheet, Text, View, Animated, SectionList } from "react-native";
import PagerView from "react-native-pager-view";
import PagerTitleView, { pagerTitleData } from "./pager-title-view";
import { useNavigationPanel } from "./useNavigationPanel";

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export const sectionData = [
  {
    data: [
      {
        slug: null,
      },
    ],
    index: 1,
  },
];

export default function BottomSheetContent({ navigationPanel }) {
  // const { ref, ...navigationPanel } = useNavigationPanel();
  return (
    <AnimatedPagerView
      style={styles.pagerView}
      initialPage={1}
      showPageIndicator={true}
      onPageSelected={navigationPanel.onPageSelected}
    >
      {pagerTitleData.map((item, index) => (
        <SectionList
          sections={sectionData}
          renderItem={() => (
            <View
              key={item.id}
              style={[
                styles.viewStyle,
                {
                  backgroundColor: index % 2 === 0 ? "cyan" : "red",
                },
              ]}
            >
              <Text>{item.title}</Text>
            </View>
          )}
        />
      ))}
    </AnimatedPagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  pagerView: {
    flex: 1,
    backgroundColor: "green",
  },
  viewStyle: {
    height: 1300,
  },
});
