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
		const keyboardWillShowListener = Keyboard.addListener(
			"keyboardWillShow",
			() => {
				setSnapPoints(["95%"]);
				modalRef.current?.snapToIndex(1);
			}
		);
		const keyboardWillHideListener = Keyboard.addListener(
			"keyboardWillHide",
			() => {
				setSnapPoints(["70%"]);
				modalRef.current?.snapToIndex(0);
			}
		);

		return () => {
			keyboardWillShowListener.remove();
			keyboardWillHideListener.remove();
		};
	}, [modalRef]);

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
				snapPoints={snapPoints}
				index={1}
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
