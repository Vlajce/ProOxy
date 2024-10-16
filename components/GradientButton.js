import { Pressable, Text, View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

function GradientButton({ children, onPressHandler }) {
	return (
		<Pressable
			onPress={onPressHandler}
			style={({ pressed }) => pressed && styles.pressed}>
			<LinearGradient
				colors={["#5da118", "#528123", "#466f1e"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={styles.button}>
				<Text style={styles.text}>{children}</Text>
			</LinearGradient>
		</Pressable>
	);
}

export default GradientButton;

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.75,
	},
	button: {
		width: 300,
		marginTop: 24,
		borderRadius: 70,
		padding: 20,
		alignItems: "center",
		elevation: 4,
		shadowColor: "#86974c",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 4,
		shadowRadius: 4,
	},
	text: {
		color: "white",
		fontSize: 18,
	},
});
