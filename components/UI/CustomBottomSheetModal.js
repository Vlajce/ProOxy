import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
	BottomSheetModal,
	BottomSheetView,
	BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

function CustomBottomSheetModal({ modalRef }) {
	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={modalRef}
				index={0}
				snapPoints={["80%"]}>
				<View style={{ backgroundColor: "#000" }}>
					<Text>Hello</Text>
				</View>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
}

export default CustomBottomSheetModal;

const styles = StyleSheet.create({
	container: {},
});
