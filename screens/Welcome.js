import React, { useEffect } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import { useStatusBar } from "../hooks/useStatusBar";
import { Colors } from "../constants/Colors";
import GradientButton from "../components/UI/GradientButton";
import ClickableText from "../components/UI/ClickableText";

function Welcome({ navigation }) {
	const { width, height } = useWindowDimensions();
	const { updateStatusBarColor } = useStatusBar();

	useEffect(() => {
		updateStatusBarColor("dark-content");
	}, []);

	const isLandscape = width > height;

	return (
		<View
			style={[
				styles.container,
				{ paddingTop: isLandscape ? height * 0.2 : height * 0.25 },
			]}>
			<View
				style={[
					styles.logo,
					{ paddingBottom: isLandscape ? height * 0.2 : height * 0.3 },
				]}>
				<Text style={[styles.title, { fontSize: isLandscape ? 40 : 32 }]}>
					Proxy
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<GradientButton onPress={() => navigation.navigate("ChooseCountry")}>
					Calculate Your CO2
				</GradientButton>
			</View>
			<View style={styles.textCointaner}>
				<View>
					<Text style={{ fontWeight: "500" }}>Already a member?</Text>
				</View>
				<ClickableText
					onPress={() => navigation.navigate("LogIn")}
					text="Log in"
					style={{ fontSize: 14, marginLeft: 8 }}></ClickableText>
			</View>
		</View>
	);
}

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: Colors.primary200,
	},
	logo: {
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		width: "80%",
		marginVertical: 5,
	},
	textCointaner: {
		flexDirection: "row",
		marginTop: 36,
	},
});
