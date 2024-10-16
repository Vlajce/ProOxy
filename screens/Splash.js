import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

import GradientButton from "../components/GradientButton";
import ClickableText from "../components/ClickableText";

function Splash({ navigation }) {
	function CalculateYourCO2() {
		navigation.navigate("ChooseCountry");
	}
	function LogInPressed() {
		navigation.navigate("LogIn");
	}

	return (
		<View style={styles.container}>
			<View style={styles.logo}>
				<Text>Proxy</Text>
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
		paddingTop: 164,
		alignItems: "center",
	},
	logo: {
		marginBottom: 300,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		width: "80%",
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
