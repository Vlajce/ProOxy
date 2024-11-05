import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "../../constants/Colors";

function FootprintCard({ percentage, children }) {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={["#FFFFFF", Colors.gray50]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 2 }}
				style={styles.linear}>
				<View style={styles.bar}>
					<View
						style={[
							styles.filled,
							{ height: percentage > 0 ? `${percentage}%` : "0%" },
						]}
					/>
				</View>
				<Text style={{ fontWeight: "600" }}>{children}</Text>
				<Text style={styles.calcValue}>{percentage}%</Text>
			</LinearGradient>
		</View>
	);
}

export default FootprintCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	linear: {
		minHeight: "50%",
		width: "85%",
		paddingVertical: 12,
		alignItems: "center",
		justifyContent: "flex-end",
		borderRadius: 24,
	},
	bar: {
		height: "50%",
		width: 12,
		justifyContent: "flex-end",
		backgroundColor: "transparent",
		borderRadius: 0,
		overflow: "hidden",
		marginBottom: 10,
	},
	filled: {
		height: "100%",
		backgroundColor: Colors.primary100,
		borderRadius: 20,
	},
	calcValue: {
		marginTop: 6,
		fontWeight: "600",
		color: Colors.gray100,
	},
});
