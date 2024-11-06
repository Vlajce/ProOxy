import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MyImpact() {
	return (
		<View style={styles.container}>
			<Text>Calculator</Text>
		</View>
	);
}

export default MyImpact;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
