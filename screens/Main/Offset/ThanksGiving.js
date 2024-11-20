import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../../constants/Colors";
import GradientButton from "../../../components/UI/GradientButton";

function ThanksGiving() {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.rowCont}>
				<Text style={styles.title}>Awesome!</Text>
				<Image
					style={styles.wavingHand}
					source={require("../../../assets/images/hand-horns.png")}
				/>
			</View>
			<View style={[styles.iconCont, { marginVertical: 40 }]}>
				<Feather
					name="check"
					size={75}
					color={Colors.primary100}
				/>
			</View>
			<Text>Thank you for offsetting your footprint.</Text>
			<GradientButton
				onPress={() => navigation.navigate("Projects")}
				style={styles.button}>
				Support Projects
			</GradientButton>
		</SafeAreaView>
	);
}

export default ThanksGiving;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: 150,
	},
	rowCont: {
		flexDirection: "row",
	},
	wavingHand: {
		marginLeft: 2,
		width: 35,
		height: 35,
	},
	title: {
		fontWeight: "600",
		fontSize: 30,
	},
	iconCont: {
		width: 120,
		height: 120,
		borderRadius: 60,
		backgroundColor: Colors.primaryBackground,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	button: {
		marginTop: 40,
		width: "75%",
	},
});
