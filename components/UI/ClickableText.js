import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

function ClickableText({ onPress, text, style }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.5}>
			<Text style={[styles.text, style]}>{text}</Text>
		</TouchableOpacity>
	);
}
export default ClickableText;

const styles = StyleSheet.create({
	text: {
		color: Colors.primary100,
		fontWeight: "500",
		textDecorationLine: "none",
	},
});
