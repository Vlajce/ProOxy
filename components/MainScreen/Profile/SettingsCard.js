import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import CustomButton from "../../UI/CustomButton";

function SettingsCard({ text, IconComponent, iconStyle, onClick }) {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}>
					{IconComponent && <View style={iconStyle}>{IconComponent}</View>}
					<Text style={{ fontWeight: "600", fontSize: 15 }}>{text}</Text>
				</View>
				<CustomButton
					style={{ alignItems: "center" }}
					onPress={onClick}>
					Edit
				</CustomButton>
			</View>
		</View>
	);
}

export default SettingsCard;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		height: 65,
		paddingHorizontal: 20,
		paddingVertical: 14,
		backgroundColor: Colors.gray10,
		marginBottom: 12,
		borderRadius: 20,
	},
});
