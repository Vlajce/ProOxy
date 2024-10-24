import { View, Text, StyleSheet } from "react-native";

function InfoSection({
	iconStyle,
	title,
	IconComponent,
	iconProps,
	textStyle,
	children,
}) {
	return (
		<View style={styles.upperTextCont}>
			<Text style={styles.title}>{title}</Text>

			<View style={[styles.icon, iconStyle]}>
				{IconComponent && <IconComponent {...iconProps} />}
			</View>
			<Text style={[styles.helperText, textStyle]}>{children}</Text>
		</View>
	);
}

export default InfoSection;

const styles = StyleSheet.create({
	upperTextCont: {
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "700",
	},
	icon: {
		width: 65,
		height: 65,
		marginTop: 30,
		marginBottom: 20,
		borderRadius: 35,
		backgroundColor: "#f2f8ce",
		justifyContent: "center",
		alignItems: "center",
	},
	helperText: {
		textAlign: "center",
	},
});
