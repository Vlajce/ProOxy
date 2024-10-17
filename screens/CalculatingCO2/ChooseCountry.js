import { View, Text, StyleSheet } from "react-native";

import IconButton from "../../components/IconButton";
import { Colors } from "../../constants/Colors";
import GradientButton from "../../components/GradientButton";
import Card from "../../components/Card";

function ChooseCountry({ navigation }) {
	function IconPressedHandler() {
		navigation.goBack();
	}

	function ContinueHandler() {}

	function SelectCountryHandler() {
		navigation.navigate("CountrySelection");
	}

	return (
		<View style={styles.mainContainer}>
			<View style={styles.upperContainer}>
				<View style={styles.upperContent}>
					<IconButton
						icon="close-circle"
						size={36}
						color={Colors.gray100}
						onPress={IconPressedHandler}></IconButton>
				</View>
			</View>
			<View style={styles.lowerContainer}>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Choose Country</Text>
					<Text style={styles.description}>
						This is your country average footpring per month.
					</Text>
					<Text style={styles.description}>
						Personalize it from your home page.
					</Text>
				</View>
				<View style={styles.cardCont}>
					<Card
						label="Select Country"
						countryIcon="none"
						text="country"
						icon="none"
						onPress={SelectCountryHandler}></Card>
				</View>
				<GradientButton onPress={ContinueHandler}>Continue</GradientButton>
			</View>
		</View>
	);
}

export default ChooseCountry;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	upperContainer: {
		flex: 0.4,
		backgroundColor: "blue",
	},
	upperContent: {
		paddingVertical: 80,
		paddingHorizontal: 40,
	},
	lowerContainer: {
		flex: 0.6,
		paddingVertical: 40,
		paddingHorizontal: 40,
	},
	cardCont: {
		marginVertical: 20,
	},
	textContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontWeight: "500",
		fontSize: 27,
		marginBottom: 24,
	},
	description: {
		color: Colors.gray200,
		fontWeight: "600",
		textAlign: "center",
	},
});
