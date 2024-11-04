import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

function CO2Card({ IconComponent, iconProps, iconStyle, value, style }) {
	return (
		<View style={[styles.container, style]}>
			{IconComponent && (
				<View style={[styles.icon, iconStyle]}>
					<IconComponent {...iconProps} />
				</View>
			)}
			<Text
				style={{
					flexDirection: "row",
					alignItems: "center",
				}}>
				<Text style={styles.value}>{value}</Text>
				<Text style={{ fontSize: 14 }}> </Text>
				<Text style={styles.measure}>kg</Text>
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
	icon: {
		backgroundColor: Colors.red50,
		borderRadius: 20,
		alignSelf: "center",
	},
	value: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 36,
		color: Colors.red200,
	},
	measure: {
		fontSize: 18,
		fontWeight: "450",
	},
});
