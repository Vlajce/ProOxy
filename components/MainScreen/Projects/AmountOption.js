import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function AmountOption({ value, selectedValue, onSelect }) {
	const isSelected = selectedValue === value;

	return (
		<TouchableOpacity
			style={[
				styles.container,
				isSelected
					? { backgroundColor: Colors.primary100 }
					: { backgroundColor: Colors.gray50 },
			]}
			onPress={() => onSelect(value)}>
			<Text style={[styles.amount, isSelected && { color: "white" }]}>$</Text>
			<Text style={{ fontSize: 4 }}> </Text>
			<Text style={[styles.amount, isSelected && { color: "white" }]}>
				{value}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		paddingHorizontal: 12,
		marginHorizontal: 5,
		flexDirection: "row",
	},
	amount: {
		fontSize: 18,
		fontWeight: "600",
		color: "black",
	},
});
