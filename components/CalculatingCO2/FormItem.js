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
			<View style={styles.option}>
				<RadioButton
					selected={isSelected}
					style={styles.radioButton}></RadioButton>
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						{IconComponent && <IconComponent {...iconProps} />} {children}
					</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default FormItem;

const styles = StyleSheet.create({
	mainContainer: {
		padding: 24,
		flexDirection: "row",
		alignItems: "center",
	},
	option: {
		flexDirection: "row",
	},
	radioButton: {
		marginRight: 16,
		alignItems: "flex-start",
	},
	textContainer: {
		flex: 1,
	},
	text: {
		fontWeight: "500",
		fontSize: 15,
		textAlign: "left",
	},
});
