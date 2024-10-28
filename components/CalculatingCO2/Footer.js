import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import ProgressCircle from "react-native-progress-circle";

import { Colors } from "../../constants/Colors";
import GradientButton from "../UI/GradientButton";
import ClickableText from "../UI/ClickableText";

function Footer({ progress, style, onButtonClick, onTextClick }) {
	const navigation = useNavigation();

	function NextHandler() {
		navigation.navigate("Mobility");
	}

	function SkipHandler() {
		//sta radi?
	}

	return (
		<View style={[styles.container, style]}>
			{/* <ProgressCircle
				percent={20}
				radius={50}
				borderWidth={8}
				color="#3399FF"
				shadowColor="#999"
				bgColor="#fff">
				<Text style={{ fontSize: 18 }}>{"30%"}</Text>
			</ProgressCircle> */}
			<GradientButton
				style={styles.button}
				onPress={NextHandler}>
				Next
			</GradientButton>
			<ClickableText
				onPress={SkipHandler}
				text="Skip"
				style={styles.clickableText}
			/>
		</View>
	);
}

export default Footer;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	button: {
		width: "35%",
	},
	clickableText: {
		color: "white",
		fontSize: 18,
		paddingTop: 10,
	},
});
