import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../constants/Colors";

function Input({ label, textInputConfig }) {
	return (
		<View style={styles.inputContainer}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={styles.input}
				{...textInputConfig}></TextInput>
		</View>
	);
}

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 6,
	},
	label: {
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
		color: Colors.gray100,
	},
	input: {
		backgroundColor: Colors.gray50,
		borderRadius: 12,
		padding: 24,
		color: Colors.gray200,
		fontSize: 16,
	},
});
