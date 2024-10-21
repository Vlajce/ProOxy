import { View, Text, TextInput, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../../constants/Colors";

function Input({ label, labelStyle, textInputConfig, icon }) {
	return (
		<View style={styles.inputContainer}>
			<Text style={labelStyle}>{label}</Text>
			<View style={styles.inputWrapper}>
				<TextInput
					style={styles.input}
					{...textInputConfig}
				/>
				{icon && (
					<Feather
						name={icon}
						size={25}
						color={Colors.gray200}
						style={styles.icon}
					/>
				)}
			</View>
		</View>
	);
}

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
	},
	inputWrapper: {
		position: "relative", // Postavljanje pozicije za ikonu unutar wrapper-a
	},
	icon: {
		position: "absolute",
		right: 10, // Razmak od desne ivice
		top: "50%", // Vertikalno centriranje ikone
		transform: [{ translateY: -12 }], // Da se centriraju tačno u sredinu
	},
	input: {
		backgroundColor: Colors.gray50,
		borderRadius: 12,
		padding: 24,
		color: Colors.gray200,
		fontSize: 16,
	},
});
