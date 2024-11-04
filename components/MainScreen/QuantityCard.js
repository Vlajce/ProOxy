import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StaticProgressBar from "../UI/StaticProgressBar";

function QuantityCard({
	text,
	IconComponent,
	iconProps,
	iconStyle,
	contStyle,
	value,
	valueColor,
	progress,
	progressColor,
}) {
	return (
		<View style={[styles.container, contStyle]}>
			<View style={[styles.upperCont]}>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					{IconComponent && <View style={iconStyle}>{IconComponent}</View>}
					<Text style={styles.text}>{text}</Text>
				</View>
				<Text>
					<Text style={[styles.value, valueColor]}>{value}</Text>
					<Text style={{ fontSize: 10 }}> </Text>
					<Text style={[styles.measure, valueColor]}>kg</Text>
				</Text>
			</View>
			<StaticProgressBar
				contStyle={{ width: "100%" }}
				filledColor={{ backgroundColor: progressColor }}
				progress={progress}
			/>
		</View>
	);
}

export default QuantityCard;

const styles = StyleSheet.create({
	container: {
		marginBottom: 24,
	},
	upperCont: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
	},
	text: {
		marginLeft: 12,
		fontSize: 18,
		fontWeight: "600",
	},
	value: {
		fontWeight: "bold",
		textAlign: "center",
	},
	measure: {
		fontSize: 10,
		fontWeight: "bold",
	},
});
