import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";
import CustomButton from "../UI/CustomButton";
import StaticProgressBar from "../UI/StaticProgressBar";

function EntryCard({ IconComponent, iconStyle, text, value, onEdit }) {
	return (
		<View style={styles.container}>
			<View style={styles.upperCont}>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					{IconComponent && <View style={iconStyle}>{IconComponent}</View>}
					<Text style={styles.text}>{text}</Text>
				</View>
				<CustomButton onPress={onEdit}>Edit</CustomButton>
			</View>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Text style={{ marginRight: 24 }}>
					<Text style={{ fontSize: 16, fontWeight: "600" }}>{value}</Text>
					<Text style={{ fontSize: 10 }}> </Text>
					<Text style={{ fontSize: 12, fontWeight: "600" }}>kg</Text>
				</Text>
				<StaticProgressBar
					contStyle={{ width: "80%", backgroundColor: "white", height: 10 }}
					filledColor={{ backgroundColor: Colors.primary100 }}
					progress={value / 500}
				/>
			</View>
		</View>
	);
}

export default EntryCard;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginBottom: 10,
		borderRadius: 20,
		backgroundColor: Colors.gray10,
		paddingHorizontal: 24,
		paddingVertical: 12,
	},
	upperCont: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
	},
	text: {
		fontWeight: "bold",
		fontSize: 15,
	},
});
