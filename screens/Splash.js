import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
			<View style={styles.buttonContainer}>
				<GradientButton onPress={CalculateYourCO2}>
					Calculate Your CO2
				</GradientButton>
			</View>
			<View style={styles.textCointaner}>
				<View>
					<Text style={styles.textMem}>Already a member?</Text>
				</View>
				<TouchableOpacity
					style={styles.loginContainer}
					onPress={LogInPressed}
					activeOpacity={0.6}>
					<Text style={styles.loginText}>Log in</Text>
				</TouchableOpacity>
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
	loginContainer: {
		marginLeft: 8,
	},
	textMem: {
		fontWeight: "500",
	},
	loginText: {
		color: Colors.primary100,
		fontWeight: "bold",
		textDecorationLine: "none",
	},
});

export default Splash;
