import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { Colors } from "../../constants/Colors";

function CustomInput({ value, onChangeText, style }) {
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.amount}>$</Text>
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChangeText}
				keyboardType="decimal-pad"
				maxLength={8}
			/>
		</View>
	);
}

export default CustomInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.gray50,

		flexDirection: "row",
		alignItems: "center",
		//position: "relative",
	},
	amount: {
		color: Colors.gray200,
		fontSize: 17,
		fontWeight: "600",
		marginRight: 4,
	},
	input: {
		flex: 1,
		color: "black",
		fontSize: 16,
		fontWeight: "600",
	},
});
