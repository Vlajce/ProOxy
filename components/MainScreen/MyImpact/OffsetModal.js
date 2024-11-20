import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import ImpactCard from "./ImpactCard";
import { Colors } from "../../../constants/Colors";
import GradientButton from "../../UI/GradientButton";
import ClickableText from "../../UI/ClickableText";

function OffsetModal({ onCancel }) {
	const navigation = useNavigation();
	const [selectedOption, setSelectedOption] = useState(false);
	const [isEnabled, setIsEnabled] = useState(false);

	const handleSelect = (option) =>
		setSelectedOption((prevOption) => (prevOption === option ? "" : option));

	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<View style={styles.container}>
			<View style={styles.titleCont}>
				<Text style={styles.title}>
					Thanks for taking climate action{"  "}
					<MaterialCommunityIcons
						name="hands-pray"
						size={32}
						color="black"
					/>
				</Text>
			</View>
			<Text style={{ marginBottom: 40, alignSelf: "center" }}>
				Choose your impact
			</Text>
			<View style={styles.impactCardsCont}>
				<ImpactCard
					title="1 year offset"
					price={162.25}
					saving=""
					option="1"
					selectedOption={selectedOption}
					onSelect={handleSelect}
				/>
				<ImpactCard
					title="3 year offset"
					price={389.4}
					saving="Save 20%"
					option="2"
					selectedOption={selectedOption}
					onSelect={handleSelect}
				/>
			</View>
			<View style={styles.rowCont}>
				<Text style={styles.switchText}>Automatic renewal</Text>
				<Switch
					trackColor={{ false: Colors.gray70, true: Colors.primary100 }}
					thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
					ios_backgroundColor={Colors.gray70}
					onValueChange={toggleSwitch}
					value={isEnabled}
					style={styles.switch}
				/>
			</View>
			<GradientButton
				onPress={() => navigation.navigate("PaymentMethod")}
				style={styles.button}>
				Go to Checkout
			</GradientButton>
			<ClickableText
				onPress={onCancel}
				text="Cancel"
				style={styles.clickable}
			/>
		</View>
	);
}

export default OffsetModal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
	},
	titleCont: {
		flexDirection: "row",
		paddingHorizontal: 80,
		marginBottom: 30,
		alignSelf: "center",
	},
	title: {
		fontSize: 29,
		fontWeight: "600",
		textAlign: "center",
		lineHeight: 34,
	},
	impactCardsCont: {
		width: "100%",
		paddingHorizontal: 32,
	},
	rowCont: {
		marginTop: 20,
		paddingHorizontal: 30,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	switchText: {
		fontWeight: "600",
		fontSize: 17,
	},
	switch: {
		transform:
			Platform.OS === "ios"
				? [{ scaleX: 0.9 }, { scaleY: 0.9 }]
				: [{ scaleX: 1.4 }, { scaleY: 1.3 }],
	},
	button: {
		marginTop: 24,
		width: "85%",
		marginBottom: 36,
		alignSelf: "center",
	},
	clickable: {
		color: Colors.gray500,
		fontWeight: "600",
		fontSize: 17,
		alignSelf: "center",
	},
});
