import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import * as Progress from "react-native-progress";
import CircularProgress from "react-native-circular-progress-indicator";

import { Colors } from "../../constants/Colors";
import GradientButton from "../UI/GradientButton";
import ClickableText from "../UI/ClickableText";

function Footer({ progress, style, onButtonClick, onTextClick }) {
	return (
		<View style={[styles.container, style]}>
			<CircularProgress
				value={progress}
				maxValue={5}
				radius={30}
				progressValueColor={"white"}
				activeStrokeColor="white"
				inActiveStrokeColor={Colors.gray50}
				inActiveStrokeOpacity={0.2}
				inActiveStrokeWidth={5}
				activeStrokeWidth={5}
				duration={1000}
				textColor={"white"}
				showProgressValue={false}
				title={
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
							{progress}
						</Text>
						<Text style={{ color: "white", fontSize: 15 }}>/5</Text>
					</View>
				}
			/>
			<GradientButton
				style={styles.button}
				onPress={onButtonClick}>
				Next
			</GradientButton>
			<ClickableText
				onPress={onTextClick}
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
		//paddingHorizontal: 10,
		//marginHorizontal: -10,
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
