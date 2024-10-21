import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";
import GradientButton from "../../components/UI/GradientButton";
import Card from "../../components/UI/Card";
import CountrySelectionModal from "../../components/CalculatingCO2/CountrySelectionModal";

function ChooseCountry({ navigation }) {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const { width, height } = useWindowDimensions();
	const isLandscape = width > height;

	function IconPressedHandler() {
		navigation.navigate("Splash");
	}

	function ChosenCountryHandler() {
		setModalIsVisible(false);
	}

	function SelectCountryHandler() {
		setModalIsVisible(true);

		return (
			<CountrySelectionModal
				visible={modalIsVisible}
				onPress={ChosenCountryHandler}></CountrySelectionModal>
		);
	}

	function ContinueHandler() {}

	return (
		<ScrollView
			contentContainerStyle={styles.scrollViewContainer}
			bounces="false">
			<StatusBar style="light" />
			<View
				style={[
					styles.mainContainer,
					isLandscape ? styles.landscapeMainContainer : null,
				]}>
				<View
					style={[
						styles.upperContainer,
						isLandscape
							? styles.landscapeUpperContainer
							: styles.portraitUpperContainer,
					]}>
					<View style={styles.upperContent}>
						<View style={{ paddingTop: 10 }}>
							<IconButton
								icon="close-circle"
								size={40}
								color="white"
								onPress={IconPressedHandler}
							/>
						</View>
						<View style={styles.textContainerRight}>
							<Text style={styles.co2Text}>
								<Text style={styles.co2Number}>580</Text>
								<Text style={styles.co2Unit}> kg</Text>
							</Text>
							<Text style={styles.countryAvgText}>Country Average</Text>
						</View>
					</View>
				</View>
				<View
					style={[
						styles.lowerContainer,
						isLandscape ? styles.landscapeLowerContainer : null,
					]}>
					<View style={styles.textContainer}>
						<Text style={styles.title}>Choose Country</Text>
						<Text style={styles.description}>
							This is your country average footprint per month.
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
							onPress={SelectCountryHandler}
						/>
					</View>
					<GradientButton onPress={ContinueHandler}>Continue</GradientButton>
				</View>
			</View>
			{modalIsVisible && (
				<CountrySelectionModal
					modalVisible={modalIsVisible}
					onClose={ChosenCountryHandler}
				/>
			)}
		</ScrollView>
	);
}

export default ChooseCountry;

const styles = StyleSheet.create({
	scrollViewContainer: {
		flexGrow: 1,
	},
	mainContainer: {
		flex: 1,
	},
	landscapeMainContainer: {
		flex: 1,
	},
	upperContainer: {
		backgroundColor: "#2a8dca",
	},
	portraitUpperContainer: {
		flex: 0.6,
	},
	landscapeUpperContainer: {
		flex: 0.4,
	},
	upperContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		paddingVertical: 80,
		paddingHorizontal: 40,
	},
	textContainerRight: {
		alignItems: "flex-end",
	},
	co2Text: {
		flexDirection: "row",
		color: "white",
	},
	co2Number: {
		fontSize: 40,
		fontWeight: "bold",
	},
	co2Unit: {
		fontSize: 22,
		fontWeight: "normal",
	},
	countryAvgText: {
		color: "white",
		fontSize: 14,
	},
	lowerContainer: {
		flex: 0.6,
		paddingVertical: 40,
		paddingHorizontal: 40,
	},
	landscapeLowerContainer: {
		paddingVertical: 30,
		paddingHorizontal: 50,
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
