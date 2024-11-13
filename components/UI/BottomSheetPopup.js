import React from "react";
import { StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

function BottomSheetPopup({
	bottomSheetRef,
	snapPoints,
	bottomSheetBody,
	style,
}) {
	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={snapPoints}
			index={0}
			handleIndicatorStyle={{ backgroundColor: "#fff" }}
			style={[styles.bottomSheetContainer, style]}>
			<BottomSheetView
				style={{
					paddingTop: 6,
					// paddingHorizontal: 30,
				}}>
				{bottomSheetBody && bottomSheetBody()}
			</BottomSheetView>
		</BottomSheet>
	);
}

export default BottomSheetPopup;

const styles = StyleSheet.create({
	bottomSheetContainer: {
		flex: 1,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		overflow: "hidden",
	},
});
