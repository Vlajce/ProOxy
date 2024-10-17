import { Pressable, Text, StyleSheet } from "react-native";

import { Colors } from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

function GradientButton({ children, onPress }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => pressed && styles.pressed}>
			<LinearGradient
				colors={[Colors.primary50, Colors.primary100, Colors.primary200]}
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
		width: "100%",
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
