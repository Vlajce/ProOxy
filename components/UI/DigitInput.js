import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { Colors } from "../../constants/Colors";

function DigitInput({ focus, style }) {
	return (
		<View style={{ marginHorizontal: 10, flex: 1 }}>
			<TextInput
				style={[styles.input, style]}
				autoFocus={focus}
				keyboardType="phone-pad"
				maxLength={1}
				selection={((start = 0), (end = 10))}
			/>
		</View>
	);
}

export default DigitInput;

const styles = StyleSheet.create({
	input: {
		width: 70,
		height: 70,
		backgroundColor: Colors.gray10,
		borderRadius: 15,
		fontSize: 24,
		textAlign: "center",
	},
});
