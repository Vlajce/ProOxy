import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/AntDesign";

import { Colors } from "../../constants/Colors";

function Card({ label, flag, name, onPress, style }) {
	return (
		<TouchableOpacity
			style={[styles.container, style]}
			onPress={onPress}>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.cardCont}>
				<View style={styles.countryCont}>
					<Image
						source={{ uri: flag }}
						style={styles.flag}
					/>
					<Text style={styles.countryName}>{name}</Text>
				</View>
				<View>
					<Ionicons
						name="caretdown"
						size={14}
						color={Colors.gray200}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default Card;

const styles = StyleSheet.create({
	container: {},
	label: {
		fontSize: 15,
		fontWeight: "bold",
		color: Colors.gray200,
		marginBottom: 14,
	},
	cardCont: {
		height: 65,
		flexDirection: "row",
		borderRadius: 10,
		backgroundColor: Colors.gray50,
		padding: 20,
		alignItems: "center",
		justifyContent: "space-between",
	},
	countryCont: {
		flexDirection: "row",
		alignItems: "center",
	},
	flag: {
		width: 35,
		height: 35,
		borderRadius: 20,
		overflow: "hidden",
		justifyContent: "flex-start",
		marginRight: 10,
		backgroundColor: "transparent",
	},
	countryName: {
		fontSize: 15,
		fontWeight: "bold",
		color: Colors.gray200,
	},
});
