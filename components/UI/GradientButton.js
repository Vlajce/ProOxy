import { View, Pressable, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

function GradientButton({ onPress, style, children, buttonStyle }) {
	return (
		<View style={[styles.container, style]}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => pressed && styles.pressed}>
				<LinearGradient
					colors={[Colors.primary50, Colors.primary100, Colors.primary200]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={[styles.button, buttonStyle]}>
					<Text style={styles.text}>{children}</Text>
				</LinearGradient>
			</Pressable>
		</View>
	);
}

export default GradientButton;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		elevation: 20,
		shadowColor: "#607337",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.5,
		shadowRadius: 6,
		borderRadius: 60,
	},
	pressed: {
		opacity: 0.75,
	},
	button: {
		width: "100%",
		marginTop: 12,
		borderRadius: 70,
		padding: 20,
		alignItems: "center",
	},
	text: {
		color: "white",
		fontSize: 18,
		fontWeight: "500",
	},
});
