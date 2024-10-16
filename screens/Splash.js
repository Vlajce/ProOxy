import { View, Text, StyleSheet } from "react-native";
import GradientButton from "../components/GradientButton";
import { Colors } from "../constants/Colors";

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

			<GradientButton onPress={CalculateYourCO2}>
				Calculate Your CO2
			</GradientButton>
			<View style={styles.textCointaner}>
				<View>
					<Text style={styles.textMem}>Already a member?</Text>
				</View>
				<View style={styles.loginContainer}>
					<Text
						style={styles.loginText}
						onPress={LogInPressed}>
						Log in
					</Text>
				</View>
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
	textCointaner: {
		flexDirection: "row",
		marginTop: 36,
	},
	loginContainer: {
		marginLeft: 8,
	},
	textMem: {
		fontWeight: "500",
	},
	loginText: {
		color: Colors.primary100,
		fontWeight: "bold",
	},
});

export default Splash;
