import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  SectionList,
  FlatList,
  Dimensions,
} from "react-native";
import PagerView from "react-native-pager-view";
import MiniSC from "./mini-sc";
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

export default function BottomSheetContent() {
  return (
    <SectionList
      style={{
        flex: 1,
      }}
      sections={[
        {
          data: [1],
        },
      ]}
      ListHeaderComponent={() => <MiniSC />}
      renderSectionHeader={() => <PagerTitleView activePageIndex={0} />}
      renderItem={() => {
        return (
          <AnimatedPagerView
            style={styles.pagerView}
            initialPage={1}
            showPageIndicator={true}
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
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  pagerView: {
    flex: 1,
    height: 1000,
    width: Dimensions.get("screen").width,
    backgroundColor: "green",
  },
  viewStyle: {
    height: 1300,
  },
});
