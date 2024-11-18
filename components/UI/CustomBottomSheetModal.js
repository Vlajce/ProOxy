import React, { useCallback, useState, useEffect } from "react";
import {
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
} from "react-native";
import {
	BottomSheetModal,
	BottomSheetView,
	BottomSheetModalProvider,
	BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { Colors } from "../../constants/Colors";

function CustomBottomSheetModal({ modalRef, modalBody }) {
	const [snapPoints, setSnapPoints] = useState(["70%", "95%"]);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			() => {
				setSnapPoints(["95%"]);
			}
		);
		const keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			() => {
				setSnapPoints(["70%"]);
			}
		);

		return () => {
			keyboardDidHideListener.remove();
			keyboardDidShowListener.remove();
		};
	}, []);

	const handleSheetChanges = useCallback((index) => {}, []);

	const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
				pressBehavior="close"
				style={{ ...props.style, backgroundColor: Colors.blueBackground }}
			/>
		),
		[]
	);

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				backdropComponent={renderBackdrop}
				ref={modalRef}
				onChange={handleSheetChanges}
				index={0}
				snapPoints={snapPoints}
				enablePanDownToClose={false}
				handleIndicatorStyle={{ backgroundColor: "#fff" }}
				keyboardBehavior="interactive"
				style={styles.container}>
				<BottomSheetView style={{ flex: 1 }}>{modalBody}</BottomSheetView>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
}

export default CustomBottomSheetModal;

const styles = StyleSheet.create({
	container: {
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		overflow: "hidden",
	},
});
