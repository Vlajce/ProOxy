import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

function CO2Card({
	IconComponent,
	iconProps,
	iconStyle,
	value,
	style,
	size = "small",
}) {
	return (
		<View
			style={[
				styles.container,
				style,
				size === "large" && styles.containerLarge,
			]}>
			{IconComponent && (
				<View
					style={[
						styles.icon,
						iconStyle,
						size === "large" && styles.iconLarge,
					]}>
					<IconComponent {...iconProps} />
				</View>
			)}
			<Text
				style={{
					flexDirection: "row",
					alignItems: "center",
				}}>
				<Text style={[styles.value, size === "large" && { fontSize: 40 }]}>
					{value}
				</Text>
				<Text style={{ fontSize: 14 }}> </Text>
				<Text style={[styles.measure, size === "large" && { fontSize: 24 }]}>
					kg
				</Text>
			</Text>
		</View>
	);
}

export default CO2Card;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flexDirection: "row",
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	containerLarge: {
		padding: 10,
		borderRadius: 60,
	},
	icon: {
		backgroundColor: Colors.red50,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	iconLarge: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	value: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 36,
		color: Colors.red200,
	},
	measure: {
		color: Colors.gray500,
		fontSize: 18,
		fontWeight: "500",
	},
});
