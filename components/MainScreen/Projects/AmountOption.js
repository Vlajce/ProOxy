import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function AmountOption({ children }) {
	const [amountSelected, setAmountSelected] = useState(false);

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={setAmountSelected}>
			<Text style={styles.amount}>$</Text>
			<Text style={{ fontSize: 4 }}> </Text>
			<Text style={styles.amount}>{children}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.gray50,
		borderRadius: 30,
		paddingHorizontal: 12,
		marginHorizontal: 5,
		flexDirection: "row",
	},
	amount: {
		fontSize: 18,
		fontWeight: "600",
	},
});
