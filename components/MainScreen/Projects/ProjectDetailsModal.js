import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

import { Colors } from "../../../constants/Colors";
import CO2SavedCard from "./CO2SavedCard";
import AmountOption from "./AmountOption";
import GradientButton from "../../UI/GradientButton";
import ClickableText from "../../UI/ClickableText";
import CustomInput from "../../UI/CustomInput";

function ProjectDetailsModal({ onCancel }) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.innerContainer}>
				<CO2SavedCard
					IconComponent={Fontisto}
					iconProps={{
						name: "world",
						size: 26,
						color: Colors.primary200,
					}}
					style={{
						padding: 16,
						marginTop: 10,
						marginBottom: 24,
						width: 220,
						height: 80,
						alignSelf: "center",
					}}
					iconStyle={{ padding: 10, marginRight: 25 }}
					value={150}
				/>
				<Text style={{ fontWeight: "700", fontSize: 16, marginBottom: 15 }}>
					How much do you want to support?
				</Text>
				<View style={styles.amountOptions}>
					<AmountOption>2</AmountOption>
					<AmountOption>7</AmountOption>
					<AmountOption>14</AmountOption>
					<AmountOption>25</AmountOption>
				</View>
				<Text
					style={{
						color: Colors.gray200,
						fontWeight: "bold",
						marginBottom: 10,
					}}>
					or enter custom amount
				</Text>
				<CustomInput />
				<GradientButton
					onPress={() => console.log("kliknuto dugme")}
					style={styles.button}>
					Contribute
				</GradientButton>
				<ClickableText
					onPress={onCancel}
					text="Cancel"
					style={styles.clickable}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default ProjectDetailsModal;

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		alignItems: "center",
	},
	amountOptions: {
		paddingHorizontal: 26,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 24,
	},
	inputCont: {
		width: 170,
		height: 60,
		backgroundColor: Colors.gray50,
		borderRadius: 10,
		marginBottom: 24,
		justifyContent: "center",
	},
	amount: {
		fontSize: 18,
		fontWeight: "600",
	},
	button: {
		width: "85%",
		marginBottom: 36,
	},
	clickable: {
		color: Colors.gray500,
		fontWeight: "600",
		fontSize: 17,
	},
});
