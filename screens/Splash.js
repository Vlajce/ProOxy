import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Colors } from "../constants/Colors";

import GradientButton from "../components/UI/GradientButton";
import ClickableText from "../components/UI/ClickableText";

function Splash({ navigation }) {
	const { width, height } = useWindowDimensions();

	function CalculateYourCO2() {
		navigation.navigate("ChooseCountry");
	}
	function LogInPressed() {
		navigation.navigate("LogIn");
	}

	const marginTopDistance = height < 640 ? 80 : 200;
	const marginBottomDistance = height < 640 ? 60 : 200;
	const titleFontSize = width < 360 ? 24 : 30;

	return (
		<View style={[styles.container, { marginTop: marginTopDistance }]}>
			<View style={[styles.logo, { marginBottom: marginBottomDistance }]}>
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
					text="Log in"></ClickableText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//paddingTop: 164,
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: Colors.primary200,
	},
	logo: {
		//marginBottom: 300,
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

export default Splash;
