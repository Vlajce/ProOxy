import { View, Text, TextInput, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useField } from "formik";

import { Colors } from "../../constants/Colors";

function Input({ name, label, textInputConfig, icon, inputStyle }) {
	const [field, meta, helpers] = useField(name);

	return (
		<View style={inputStyle}>
			{label && <Text style={styles.labelStyle}>{label}</Text>}
			<View style={styles.inputWrapper}>
				<TextInput
					style={[styles.input]}
					{...textInputConfig}
					value={field.value}
					onChangeText={helpers.setValue}
					onBlur={() => helpers.setTouched(true)}
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
	labelStyle: {
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
		color: Colors.gray100,
	},
	input: {
		flex: 1,
		color: Colors.gray200,
		fontSize: 16,
	},
});
