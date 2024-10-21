import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { Colors } from "../../constants/Colors";

function IconCheckBox({ icon, size, color, onPress }) {
	return (
		<Pressable
			style={styles.button}
			onPress={onPress}>
			<Ionicons
				name={icon}
				size={size}
				color={color}
			/>
		</Pressable>
	);
}

export default IconCheckBox;

const styles = StyleSheet.create({
	button: {
		borderRadius: 70,
		justifyContent: "center",
		alignItems: "flex-start",
	},
});
