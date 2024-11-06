import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Projects() {
	return (
		<View style={styles.container}>
			<Text>Projects</Text>
		</View>
	);
}

export default Projects;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
