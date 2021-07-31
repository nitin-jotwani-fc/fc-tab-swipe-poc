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
    <View style={styles.container}>
      <SectionList
        sections={sectionData}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item + index}
        renderItem={() => (
          <AnimatedPagerView
            style={styles.pagerView}
            initialPage={1}
            showPageIndicator={true}
            onPageSelected={navigationPanel.onPageSelected}
          >
            {pagerTitleData.map((item, index) => (
              <View key={item.id}>
                <Text>{item.title}</Text>
              </View>
            ))}
          </AnimatedPagerView>
        )}
        // renderSectionHeader={() => (
        //   <PagerTitleView activePageIndex={navigationPanel.activePage} />
        // )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  pagerView: {
    flex: 1,
    height: 1300,
    backgroundColor: "cyan",
  },
});
