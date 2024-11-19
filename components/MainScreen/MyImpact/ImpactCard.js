import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../../../constants/Colors";
import RadioButton from "../../UI/RadioButton";

function ImpactCard({
	option,
	selectedOption,
	onSelect,
	title,
	price,
	saving,
}) {
	const formattedPrice = price.toFixed(2);
	const isSelected = selectedOption === option;

	return (
		<TouchableOpacity
			style={[
				styles.container,
				isSelected && { borderColor: Colors.primary100 },
			]}
			activeOpacity={0.8}
			onPress={() => onSelect(option)}>
			<RadioButton
				selected={isSelected}
				contStyle={{ marginRight: 12 }}
				style={styles.radioButton}
			/>
			<View style={styles.rowCont}>
				<View>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.info}>100% of my footprint</Text>
				</View>
				<View style={styles.colCont}>
					<Text style={styles.price}>$ {formattedPrice}</Text>
					<Text style={styles.info}>{saving}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default ImpactCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.gray10,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: Colors.gray10,
		marginBottom: 12,
		padding: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	radioButton: {
		backgroundColor: "white",
		width: 24,
		height: 24,
	},
	rowCont: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	colCont: {
		alignItems: "flex-end",
	},
	title: {
		fontWeight: "bold",
		fontSize: 15,
		marginBottom: 4,
	},
	price: {
		color: Colors.primary100,
		fontWeight: "600",
		fontSize: 17,
		marginBottom: 4,
	},
	info: {
		fontSize: 12,
		color: Colors.gray500,
	},
});
