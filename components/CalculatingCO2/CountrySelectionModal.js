import { View, Text, StyleSheet, FlatList, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { Colors } from "../../constants/Colors";
import CountryItem from "../CalculatingCO2/CountryItem";
import IconButton from "../UI/IconButton";
import Input from "../UI/Input";

function CountrySelectionModal({
	modalVisible,
	onClose,
	onSelectCountry,
	countries,
}) {
	const [searchValue, setSearchValue] = useState("");

	function InputChangeHandler(enteredText) {
		setSearchValue(enteredText);
	}

	const renderCountryItem = ({ item }) => {
		return (
			<CountryItem
				name={item.name.common}
				flag={item.flags.png}
				onPress={() => {
					onSelectCountry(item);
					onClose();
				}}></CountryItem>
		);
	};

	return (
		<Modal
			visible={modalVisible}
			animationType="slide">
			<View style={styles.mainContainer}>
				<StatusBar style="dark" />
				<IconButton
					icon="close-circle"
					size={40}
					color={Colors.gray100}
					onPress={onClose}
				/>
				<Text style={styles.title}>Country Selection</Text>
				<Text style={{ fontWeight: "semi-bold" }}>
					Which country do you lie in?
				</Text>
				<View style={styles.inputCont}>
					<Input
						label=""
						textInputConfig={{
							keyboardType: "default",
							placeholder: "Search",
							placeholderTextColor: "#b4acac", //Colors.gray100,
							autoCorrect: false,
							autoCapitalize: "none",
							onChangeText: InputChangeHandler,
							value: searchValue,
						}}
						icon="search"></Input>
				</View>
				<View style={styles.countriesContainer}>
					<FlatList
						data={countries}
						renderItem={renderCountryItem}
						keyExtractor={(item) => item.cca2}
					/>
				</View>
			</View>
		</Modal>
	);
}

export default CountrySelectionModal;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingVertical: 80,
		paddingHorizontal: 40,
	},
	title: {
		marginVertical: 40,
		fontWeight: "bold",
		//fontFamily: "Trebuchet MS",
		fontSize: 30,
		textAlign: "center",
	},
	inputCont: {
		height: 50,
		marginBottom: 46,
	},
	countriesContainer: {
		//flex: 1,
	},
});
