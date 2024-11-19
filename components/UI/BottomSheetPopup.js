import React from "react";
import { StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

function BottomSheetPopup({
	bottomSheetRef,
	snapPoints,
	bottomSheetBody,
	style,
	...props
}) {
	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={snapPoints}
			index={0}
			handleIndicatorStyle={{ backgroundColor: "#fff" }}
			style={[styles.bottomSheetContainer, style]}
			{...props}>
			<BottomSheetView
				style={{
					paddingTop: 6,
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
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		overflow: "hidden",
	},
});
