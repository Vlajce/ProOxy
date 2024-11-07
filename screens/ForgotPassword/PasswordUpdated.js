import {
	View,
	Text,
	Image,
	StyleSheet,
	useWindowDimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Feather from "@expo/vector-icons/Feather";

import GradientButton from "../../components/UI/GradientButton";
import { Colors } from "../../constants/Colors";
import StaticProgressBar from "../../components/UI/StaticProgressBar";

function PasswordUpdated({ navigation }) {
	const { width, height } = useWindowDimensions();

	const isLandscape = width > height;
	const paddingVerticalDistance = isLandscape ? height * 0.15 : height * 0.1;
	const paddingHorizontalDistance = isLandscape ? width * 0.1 : width * 0.1;

	const textSize = isLandscape ? 18 : 14;

	function onSubmitHandler() {
		navigation.navigate("LogIn");
	}

	return (
		<KeyboardAwareScrollView
			style={[
				styles.container,
				{
					paddingVertical: paddingVerticalDistance,
					paddingHorizontal: paddingHorizontalDistance,
				},
			]}
			contentContainerStyle={{
				paddingBottom: 100,
			}}
			bounces="false"
			keyboardShouldPersistTaps="handled"
			extraScrollHeight={50}
			scrollEnabled={true}>
			<StaticProgressBar
				progress={1}
				contStyle={styles.progressBar}
			/>
			<View style={styles.titleCont}>
				<Text style={styles.title}>Password Updated</Text>
				<View>
					<Image
						style={styles.wavingHand}
						source={require("../../assets/images/hand-horns.png")}
					/>
				</View>
			</View>

			<View style={[styles.iconCont, { marginVertical: 20 }]}>
				<Feather
					name="check"
					size={75}
					color={Colors.primary100}
				/>
			</View>

			<Text
				style={[styles.helperText, { marginBottom: 4, fontSize: textSize }]}>
				Your password has been changed successfully.
			</Text>
			<Text style={[styles.helperText, { fontSize: textSize }]}>
				Use your new password to log in.
			</Text>

			<GradientButton
				onPress={onSubmitHandler}
				style={{ marginTop: 30 }}>
				Login Now
			</GradientButton>
		</KeyboardAwareScrollView>
	);
}

export default PasswordUpdated;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	progressBar: {
		alignSelf: "center",
		marginBottom: 40,
	},
	titleCont: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "700",
	},
	wavingHand: {
		marginLeft: 8,
		width: 35,
		height: 35,
	},
	iconCont: {
		width: 120,
		height: 120,
		marginVertical: 40,
		borderRadius: 60,
		backgroundColor: "#f2f8ce",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	helperText: {
		textAlign: "center",
	},
});
