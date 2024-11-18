import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

function CO2SavedCard({ IconComponent, iconProps, iconStyle, style }) {
	return (
		<View style={[styles.container, style]}>
			{IconComponent && (
				<View style={[styles.icon, iconStyle]}>
					<IconComponent {...iconProps} />
				</View>
			)}
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Text style={styles.value}>125</Text>
				<Text style={styles.text}>kg CO2 saved</Text>
			</View>
		</View>
	);
}

export default CO2SavedCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.gray50,
		flexDirection: "row",
		borderRadius: 60,
		alignItems: "center",
	},
	icon: {
		backgroundColor: "white",
		borderRadius: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	value: {
		fontSize: 40,
		fontWeight: "bold",
		color: Colors.primary100,
	},
	text: {
		color: Colors.gray500,
		fontWeight: "bold",
		marginTop: -2,
	},
});
