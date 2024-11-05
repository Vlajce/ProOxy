import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

function CustomButton({ style, children, onPress }) {
	return (
		<TouchableOpacity
			style={[styles.button, style]}
			onPress={onPress}>
			<Text style={{ color: Colors.gray500, fontWeight: "bold" }}>
				{children}
			</Text>
		</TouchableOpacity>
	);
}

export default CustomButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.blue20,
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
