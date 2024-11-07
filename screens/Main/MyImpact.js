import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { useStatusBar } from "../../hooks/useStatusBar";

function MyImpact({ navigation }) {
	const { updateStatusBarColor } = useStatusBar();

	useEffect(() => {
		updateStatusBarColor("dark-content");
	}, []);

	return (
		<View style={styles.container}>
			<Text>MyImpact</Text>
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
