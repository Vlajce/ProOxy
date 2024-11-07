import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/Colors";

function OtherCard({ text, IconComponent, iconStyle, rightIcon, onClick }) {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				!rightIcon && { backgroundColor: Colors.red50 },
			]}
			onPress={onClick}>
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
				{rightIcon && rightIcon}
			</View>
		</TouchableOpacity>
	);
}

export default OtherCard;

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
