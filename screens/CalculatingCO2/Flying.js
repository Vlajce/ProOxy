import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { useState, useRef } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import "react-native-gesture-handler";
import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";
import FormItem from "../../components/CalculatingCO2/FormItem";
import Footer from "../../components/CalculatingCO2/Footer";

function Flying({ navigation }) {
	const { width, height } = useWindowDimensions();

	const bottomSheetModalRef = useRef(null);

	const snapPoint = ["50"];

	const [selectedOption, setSelectedOption] = useState("");

	function IconPressedHandler() {
		navigation.goBack();
	}

	function handleSelect(value) {
		setSelectedOption((prevOption) => (prevOption === value ? "" : value));
	}

	function NextHandler() {
		navigation.navigate("CreateAccount");
		//navigation.navigate("Mobility");
	}

	function SkipHandler() {
		//sta radi?
	}

	function handlePresentModal() {
		bottomSheetModalRef.current?.present();
	}

	const isLandscape = width > height;
	const paddingVerticalDistance = isLandscape ? height * 0.15 : height * 0.1;
	const paddingHorizontalDistance = isLandscape ? width * 0.1 : width * 0.1;

	const translateX = isLandscape ? height * -0.8 : width * -0.3;
	const translateY = 2;

	return (
		<>
			<View
				style={[
					styles.container,
					{
						paddingVertical: paddingVerticalDistance,
						paddingHorizontal: paddingHorizontalDistance,
					},
				]}>
				<View style={styles.header}>
					<IconButton
						icon="chevron-back-circle"
						size={40}
						color="white"
						onPress={IconPressedHandler}
					/>
					<View
						style={[
							styles.headerCenter,
							{
								transform: [{ translateX }, { translateY }],
							},
						]}>
						<Text style={styles.headerText}>Flying</Text>
						<FontAwesome
							name="plane"
							size={24}
							color="white"
						/>
					</View>
				</View>
				<Text style={styles.title}>
					How many times a year do you use air transport (flying)?
				</Text>

				<View style={styles.formCont}>
					<FormItem
						IconComponent={MaterialIcons}
						iconProps={{
							name: "luggage",
							size: 20,
							style: { marginRight: 4 },
						}}
						value="rarely"
						border={true}
						selectedValue={selectedOption}
						onSelect={handleSelect}>
						I fly rarely or never (one or no flight per year)
					</FormItem>
					<FormItem
						IconComponent={MaterialCommunityIcons}
						iconProps={{
							name: "airplane",
							size: 20,
							style: { marginRight: 4 },
						}}
						value="occasionally"
						border={true}
						selectedValue={selectedOption}
						onSelect={handleSelect}>
						Occasionally (maximum of three flights per year)
					</FormItem>
					<FormItem
						IconComponent={MaterialCommunityIcons}
						iconProps={{
							name: "airplane-takeoff",
							size: 20,
							style: { marginRight: 6 },
						}}
						value="more"
						border={true}
						selectedValue={selectedOption}
						onSelect={handleSelect}>
						More then 3 flights per year
					</FormItem>
					<FormItem
						IconComponent={Ionicons}
						iconProps={{
							name: "pencil-sharp",
							size: 16,
							style: { marginRight: 20 },
						}}
						value="custom"
						border={false}
						selectedValue={selectedOption}
						onSelect={handleSelect}>
						Enter custom amount
					</FormItem>
				</View>
			</View>
			<Footer
				style={styles.footer}
				progress={1}
				onButtonClick={NextHandler}
				onTextClick={SkipHandler}></Footer>
		</>
	);
}

export default Flying;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.gray100,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 60,
		justifyContent: "space-between",
	},
	headerCenter: {
		flexDirection: "row",
	},
	headerText: {
		color: "white",
		fontWeight: "600",
		fontSize: 18,
		marginRight: 6,
	},
	title: {
		color: "white",
		fontSize: 20,
		textAlign: "center",
		fontWeight: "500",
		marginBottom: 120,
	},
	formCont: {
		width: "100%",
		maxWidth: 400,
		backgroundColor: "white",
		marginHorizontal: 40,
		borderRadius: 25,
		alignSelf: "center",
		marginBottom: 10,
	},
	footer: {
		backgroundColor: Colors.gray100,
		paddingBottom: 40,
		paddingLeft: 20,
		paddingRight: 35,
	},
});
