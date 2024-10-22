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
		height: 60,
		position: "relative",
		backgroundColor: Colors.gray50,
		borderRadius: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 16,
		paddingVertical: 14,
	},
	icon: {
		marginLeft: "auto",
	},
	input: {
		flex: 1,
		color: Colors.gray200,
		fontSize: 16,
	},
});
