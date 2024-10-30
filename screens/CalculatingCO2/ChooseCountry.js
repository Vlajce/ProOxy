import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";
import GradientButton from "../../components/UI/GradientButton";
import Card from "../../components/UI/Card";
import CountrySelectionModal from "../../components/CalculatingCO2/CountrySelectionModal";

function ChooseCountry({ navigation, countries }) {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [country, setCountry] = useState(null);

	const { width, height } = useWindowDimensions();
	const isLandscape = width > height;

	useEffect(() => {
		setCountry({
			name: "Switzerland",
			coConcentration: 580,
			imageUrl: "https://flagcdn.com/w320/ch.png",
		});
	}, []);

	function IconPressedHandler() {
		navigation.navigate("Welcome");
	}

	function ChosenCountryHandler() {
		setModalIsVisible(false);
	}

	function SelectCountryHandler() {
		setModalIsVisible(true);

		return (
			<CountrySelectionModal
				visible={modalIsVisible}
				onClose={ChosenCountryHandler}></CountrySelectionModal>
		);
	}

	function ContinueHandler() {
		navigation.navigate("Flying");
	}

	function handleSelectCountry(selectedCountry) {
		setCountry({
			name: selectedCountry.name.common,
			coConcentration: selectedCountry.coConcentration || 580,
			imageUrl: selectedCountry.flags.png,
		});
	}

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
							flag={
								country
									? country.imageUrl
									: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg"
							}
							name={country ? country.name : "Switzerland"}
							icon="caretdown"
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
					onSelectCountry={handleSelectCountry}
					countries={countries}
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
