import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/AntDesign";

import { Colors } from "../constants/Colors";

const dummyCountry = {
	name: "Switzerland",
	coConcentration: 580,
	imageUrl:
		"https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
};

function Card({ label, countryIcon, text, icon, onPress }) {
	return (
		<Pressable
			style={styles.container}
			onPress={onPress}>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.cardCont}>
				<View style={styles.countryCont}>
					<Image
						source={require("../assets/images/switzerland.png")}
						style={styles.flag}
					/>
					<Text style={styles.countryName}>{dummyCountry.name}</Text>
				</View>
				<View>
					<Ionicons
						name="caretdown"
						size={14}
						color={Colors.gray200}
					/>
				</View>
			</View>
		</Pressable>
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
		width: 40,
		height: 40,
		borderRadius: 5,
		overflow: "hidden",
		justifyContent: "flex-start",
		marginRight: 10,
	},
	countryName: {
		fontSize: 15,
		fontWeight: "bold",
		color: Colors.gray200,
	},
});
