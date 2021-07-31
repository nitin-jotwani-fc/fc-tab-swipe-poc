import React, { useRef } from "react";
import { Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
import MiniSC from "./mini-sc";
import BottomSheetContent from "./bottom-sheet-content";
import { useNavigationPanel } from "./useNavigationPanel";
import PagerTitleView from "./pager-title-view";

export default function TabSwipePOC() {
  const modal = React.createRef();
  const { ...navigationPanel } = useNavigationPanel();
  return (
    <>
      <MiniSC />
      <Modalize
        ref={modal}
        alwaysOpen={655}
        withHandle={false}
        HeaderComponent={
          <View>
            <PagerTitleView activePageIndex={navigationPanel.activePage} />
          </View>
        }
      >
        <BottomSheetContent navigationPanel={navigationPanel} />
      </Modalize>
    </>
  );
}

/*
const onOpen = () => {
  this.modal.current?.open();
};
<TouchableOpacity onPress={onOpen}>
  <Text>Open the modal nik</Text>
</TouchableOpacity>
*/
