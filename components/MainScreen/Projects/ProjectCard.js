import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import CustomButton from "../../UI/CustomButton";
import { Colors } from "../../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function ProjectCard({ style, imageUrl, title, onPress }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.8}>
			<ImageBackground
				source={{
					uri: imageUrl,
				}}
				resizeMode="cover"
				style={[styles.image, style]}>
				<CustomButton
					style={styles.button}
					textStyle={{ color: "white", fontWeight: "bold" }}>
					WaldSchutz
				</CustomButton>
				<Text style={styles.title}>{title}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
}

export default ProjectCard;

const styles = StyleSheet.create({
	image: {
		flex: 1,
		// width: 220,
		// height: 300,
		padding: 24,
		justifyContent: "flex-end",
		borderRadius: 20,
		overflow: "hidden",
		marginBottom: 24,
		marginRight: 24,
	},
	button: {
		width: 100,
		height: 36,
		backgroundColor: Colors.primary50,
		marginBottom: 12,
		paddingHorizontal: 0,
		paddingVertical: 0,
	},
	title: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
	},
});
