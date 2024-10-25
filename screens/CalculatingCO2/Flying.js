import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { useState } from "react";

import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";

function Flying({ navigation }) {
	const { width, height } = useWindowDimensions();

	const [current, setCurrent] = useState("test");

	function IconPressedHandler() {
		navigation.goBack();
	}

	const isLandscape = width > height;
	const paddingVerticalDistance = isLandscape ? height * 0.15 : height * 0.1;
	const paddingHorizontalDistance = isLandscape ? width * 0.1 : width * 0.1;

	const translateX = isLandscape ? height * -0.8 : width * -0.3;
	const translateY = 2;

	return (
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

			<View style={styles.formCont}></View>
		</View>
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
		marginBottom: 140,
	},
	formCont: {
		backgroundColor: "white",
		width: 280,
		height: 320,
		borderRadius: 25,
		alignSelf: "center",
		paddingHorizontal: 24,
		paddingVertical: 30,
	},
});
