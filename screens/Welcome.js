import React, { useEffect } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import { useStatusBar } from "../hooks/useStatusBar";
import { Colors } from "../constants/Colors";
import GradientButton from "../components/UI/GradientButton";
import ClickableText from "../components/UI/ClickableText";
import { SafeAreaView } from "react-native-safe-area-context";

function Welcome({ navigation }) {
	const { width, height } = useWindowDimensions();
	const { updateStatusBarColor } = useStatusBar();

	useEffect(() => {
		updateStatusBarColor("dark-content");
	}, []);

	const isLandscape = width > height;

	return (
		<SafeAreaView
			style={[
				styles.container,
				{
					paddingBottom: isLandscape ? height * 0.2 : height * 0.25,
				},
			]}>
			<Text
				style={[
					styles.title,
					{
						fontSize: isLandscape ? 50 : 40,
						marginTop: isLandscape ? height * 0.2 : height * 0.2,
					},
				]}>
				Proxy
			</Text>
			<GradientButton
				onPress={() => navigation.navigate("ChooseCountry")}
				style={{
					width: "80%",
					marginTop: isLandscape ? height * 0.1 : height * 0.3,
				}}>
				Calculate Your CO2
			</GradientButton>
			<View style={styles.textCointaner}>
				<View>
					<Text style={{ fontWeight: "500" }}>Already a member?</Text>
				</View>
				<ClickableText
					onPress={() => navigation.navigate("LogIn")}
					text="Log in"
					style={{
						fontSize: 14,
						marginLeft: 8,
					}}></ClickableText>
			</View>
		</SafeAreaView>
	);
}

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		color: "white",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: Colors.primary200,
		alignSelf: "center",
	},
	textCointaner: {
		flexDirection: "row",
		marginTop: 36,
	},
});
