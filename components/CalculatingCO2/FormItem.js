import { View, Text, StyleSheet, Pressable } from "react-native";

import RadioButton from "../UI/RadioButton";
import { Colors } from "../../constants/Colors";

function FormItem({
	IconComponent,
	iconProps,
	value,
	border,
	children,
	selectedValue,
	onSelect,
}) {
	const isSelected = selectedValue === value;

	return (
		<Pressable
			style={[
				styles.mainContainer,
				border && {
					borderBottomWidth: 1,
					borderBottomColor: Colors.gray10,
				},
			]}
			onPress={() => onSelect(value)}>
			<RadioButton
				selected={isSelected}
				style={styles.radioButton}></RadioButton>

			<View style={styles.option}>
				{IconComponent && <IconComponent {...iconProps} />}
				<Text style={styles.text}>{children}</Text>
			</View>
		</Pressable>
	);
}

export default FormItem;

const styles = StyleSheet.create({
	mainContainer: {
		paddingTop: 30,
		paddingBottom: 15,
		paddingRight: 30,
		paddingLeft: 20,
		flexDirection: "row",
	},
	option: {
		paddingRight: 50,
		flexDirection: "row",
	},
	radioButton: {
		marginRight: 16,
	},
	text: {
		fontWeight: "500",
		fontSize: 16,
		marginRight: 12,
		textAlign: "left",
	},
});
