import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

import TextInput from "../../components/IconButton";
import IconButton from "../../components/IconButton";
import GradientButton from "../../components/GradientButton";

function LogIn({ navigation }) {
	function onPressHandler() {
		navigation.goBack();
	}

	function CalculatePressedHandler() {
		navigation.navigate("ChooseCountry");
	}

	return (
		<View style={styles.container}>
			<IconButton
				icon="close-circle"
				size={36}
				color={Colors.gray50}
				onPress={onPressHandler}></IconButton>
			<View style={styles.welcomeContainer}>
				<View>
					<Text style={styles.textWelcome}>Welcome</Text>
				</View>
				<View></View>
			</View>
			<Text style={styles.textLog}>Login to continue</Text>
			<Text style={styles.textInput}>Email</Text>
			<TextInput></TextInput>
			<Text style={styles.textInput}>Password</Text>
			<TextInput></TextInput>
			<View></View>
			<GradientButton>Login</GradientButton>
			<View style={styles.textCointaner}>
				<View>
					<Text style={styles.textAcc}>Don't have an account?</Text>
				</View>
				<View style={styles.calcContainer}>
					<Text
						style={styles.calcText}
						onPress={CalculatePressedHandler}>
						Calculate your CO2
					</Text>
				</View>
			</View>
		</View>
	);
}

export default LogIn;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 64,
		paddingHorizontal: 40,
	},
	welcomeContainer: {
		flexDirection: "row",
	},
	textWelcome: {
		fontSize: 28,
		marginBottom: 10,
	},
	textLog: {
		fontSize: 15,
	},
	textInput: {
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 20,
		color: Colors.gray100,
	},
	textCointaner: {
		marginTop: 36,
		flexDirection: "row",
	},
	textAcc: { fontWeight: "500" },
	calcContainer: { marginLeft: 8 },
	calcText: { color: Colors.primary100, fontWeight: "bold" },
});
