import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

function ClickableText({ onPress, text, style }) {
	return (
		<TouchableOpacity
			style={styles.loginContainer}
			onPress={onPress}
			activeOpacity={0.5}>
			<Text style={[styles.loginText, style]}>{text}</Text>
		</TouchableOpacity>
	);
}
export default ClickableText;

const styles = StyleSheet.create({
	loginContainer: {
		marginLeft: 8,
	},
	loginText: {
		color: Colors.primary100,
		fontWeight: "500",
		textDecorationLine: "none",
	},
});
