import React from "react";
import { View, Text, StyleSheet } from "react-native";

function CategoryTag({ children }) {
	return (
		<View style={styles.container}>
			<Text style={{ fontWeight: "600", fontSize: 12 }}>{children}</Text>
		</View>
	);
}

export default CategoryTag;

const styles = StyleSheet.create({
	container: {
		height: 32,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderRadius: 26,
		marginRight: 4,
		marginBottom: 8,
		paddingHorizontal: 16,
		paddingVertical: 6,
	},
});
