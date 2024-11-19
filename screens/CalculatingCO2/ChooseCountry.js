import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";

import { useStatusBar } from "../../hooks/useStatusBar";
import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";
import GradientButton from "../../components/UI/GradientButton";
import Card from "../../components/UI/Card";
import CountrySelectionModal from "../../components/CalculatingCO2/CountrySelectionModal";

function ChooseCountry({ navigation, countries }) {
	const { width, height } = useWindowDimensions();
	const { updateStatusBarColor, statusBarColor } = useStatusBar();

	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [country, setCountry] = useState({
		name: "Switzerland",
		coConcentration: 580,
		imageUrl: "https://flagcdn.com/w320/ch.png",
	});

	useEffect(() => {
		modalIsVisible
			? updateStatusBarColor("dark-content")
			: updateStatusBarColor("light-content");

		return () => updateStatusBarColor("dark-content");
	}, [modalIsVisible, updateStatusBarColor]);

	function SelectCountryHandler() {
		setModalIsVisible(true);

		return (
			<CountrySelectionModal
				visible={modalIsVisible}
				onClose={() => setModalIsVisible(false)}></CountrySelectionModal>
		);
	}

	const isLandscape = width > height;

	return (
		<ScrollView
			contentContainerStyle={{ flex: 1, marginBottom: isLandscape && 200 }}
			bounces={false}>
			{!isLandscape && (
				<View
					style={{
						backgroundColor: "#2a8dca",
						flex: 0.6,
					}}>
					<View style={styles.upperContent}>
						<View style={{ paddingTop: 10 }}>
							<IconButton
								icon="close-circle"
								size={40}
								color="white"
								onPress={() => navigation.navigate("Welcome")}
							/>
						</View>
						<View style={{ alignItems: "flex-end" }}>
							<Text style={styles.co2Text}>
								<Text style={styles.co2Number}>580</Text>
								<Text style={styles.co2Unit}> kg</Text>
							</Text>
							<Text style={styles.countryAvgText}>Country Average</Text>
						</View>
					</View>
				</View>
			)}
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
				<View style={{ marginVertical: 20 }}>
					<Card
						label="Select Country"
						flag={
							country ? country.imageUrl : "https://flagcdn.com/w320/ch.png"
						}
						name={country ? country.name : "Switzerland"}
						icon="caretdown"
						onPress={SelectCountryHandler}
					/>
				</View>
				<GradientButton
					onPress={() =>
						navigation.navigate("Flying", {
							country: country,
						})
					}>
					Continue
				</GradientButton>
			</View>
			{modalIsVisible && (
				<CountrySelectionModal
					modalVisible={modalIsVisible}
					onClose={() => setModalIsVisible(false)}
					onSelectCountry={(selectedCountry) =>
						setCountry({
							name: selectedCountry.name.common,
							coConcentration: selectedCountry.coConcentration || 580,
							imageUrl: selectedCountry.flags.png,
							callingNumber: selectedCountry.idd.root,
						})
					}
					countries={countries}
				/>
			)}
		</ScrollView>
	);
}

export default ChooseCountry;

const styles = StyleSheet.create({
	upperContainer: {
		backgroundColor: "#2a8dca",
	},
	upperContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		paddingVertical: 80,
		paddingHorizontal: 40,
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
