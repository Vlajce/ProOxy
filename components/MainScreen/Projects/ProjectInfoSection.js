import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Colors } from "../../../constants/Colors";

function ProjectInfoSection({
	IconComponent,
	iconProps,
	label,
	text,
	iconStyle,
	itemIcon,
	itemsText,
}) {
	return (
		<View>
			<View style={styles.infoContainer}>
				{IconComponent && (
					<View style={iconStyle}>
						<IconComponent {...iconProps} />
					</View>
				)}
				<Text style={{ fontWeight: "bold", fontSize: 20 }}>{label}</Text>
			</View>
			{!itemIcon ? (
				<Text style={styles.text}>{text}</Text>
			) : (
				<View style={{}}>
					{itemsText.map((item, index) => (
						<View
							key={index}
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 5,
							}}>
							<AntDesign
								name="right"
								size={13}
								color="red"
							/>
							<Text style={[styles.text, { marginLeft: 12 }]}>{item}</Text>
						</View>
					))}
				</View>
			)}
		</View>
	);
}

export default ProjectInfoSection;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	infoContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 28,
		marginBottom: 14,
	},
	text: {
		textAlign: "left",
		lineHeight: 22,
		color: Colors.gray70,
		fontWeight: "600",
	},
});
