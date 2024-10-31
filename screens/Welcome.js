import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Colors } from "../constants/Colors";

import GradientButton from "../components/UI/GradientButton";
import ClickableText from "../components/UI/ClickableText";

function Welcome({ navigation }) {
	const { width, height } = useWindowDimensions();

	function CalculateYourCO2() {
		navigation.navigate("ChooseCountry");
	}
	function LogInPressed() {
		navigation.navigate("LogIn");
	}

	const isLandscape = width > height;
	const paddingTopDistance = isLandscape ? height * 0.2 : height * 0.25;
	const paddingBottomDistance = isLandscape ? height * 0.2 : height * 0.3;
	const titleFontSize = isLandscape ? 40 : 32;

	return (
		<View style={[styles.container, { paddingTop: paddingTopDistance }]}>
			<View style={[styles.logo, { paddingBottom: paddingBottomDistance }]}>
				<Text style={[styles.title, { fontSize: titleFontSize }]}>Proxy</Text>
			</View>
			<View style={styles.buttonContainer}>
				<GradientButton onPress={CalculateYourCO2}>
					Calculate Your CO2
				</GradientButton>
			</View>
			<View style={styles.textCointaner}>
				<View>
					<Text style={styles.textMem}>Already a member?</Text>
				</View>

				<ClickableText
					onPress={LogInPressed}
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
	textMem: {
		fontWeight: "500",
	},
});
