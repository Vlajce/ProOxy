import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";
import Input from "../../components/UI/Input";
import GradientButton from "../../components/UI/GradientButton";
import StaticProgressBar from "../../components/UI/StaticProgressBar";

function ForgotPassword({ navigation }) {
	const [inputValue, setInputValue] = useState("");

	const { width, height } = useWindowDimensions();

	function IconPressHandler() {
		navigation.goBack();
	}

	function InputChangeHandler(eneterdText) {
		setInputValue(eneterdText);
	}

	function onSubmitHandler() {
		navigation.navigate("CheckYourEmail");
	}

	const isLandscape = width > height;
	const paddingVerticalDistance = isLandscape ? height * 0.15 : height * 0.1;
	const paddingHorizontalDistance = isLandscape ? width * 0.1 : width * 0.1;

	const progressBarWidth = isLandscape ? 500 : 300;
	const translateX = isLandscape ? -100 : -50;
	const translateY = -4;

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
			keyboardShouldPersistTaps="handled"
			extraScrollHeight={50}
			scrollEnabled={true}>
			<View style={styles.headerCont}>
				<IconButton
					icon="chevron-back-circle"
					size={40}
					color={Colors.gray100}
					onPress={IconPressHandler}></IconButton>
				<View
					style={[
						styles.progressBarContainer,
						{
							width: progressBarWidth,
							transform: [{ translateX }, { translateY }],
						},
					]}>
					<StaticProgressBar progress={1 / 3} />
				</View>
			</View>

			<View style={styles.upperTextCont}>
				<Text style={styles.title}>Forgot Password?</Text>

				<View style={styles.icon}>
					<FontAwesome
						name="key"
						size={35}
						color={Colors.primary100}
					/>
				</View>
				<Text style={styles.helperText}>
					Don't worry! It happens. Please enter the email address associated
					with your account.
				</Text>
			</View>
			<Input
				label="Email"
				labelStyle={styles.inputLabel}
				textInputConfig={{
					keyboardType: "email-address",
					placeholder: "Enter Your Email Address",
					autoCorrect: false,
					autoCapitalize: "none",
					onChangeText: InputChangeHandler,
					value: inputValue,
				}}
				inputStyle={{ marginBottom: 26 }}
			/>
			<GradientButton
				onPress={onSubmitHandler}
				// style={{ paddingBottom: 80 }}>
			>
				Submit
			</GradientButton>
		</KeyboardAwareScrollView>
	);
}

export default ForgotPassword;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	headerCont: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 40,
		justifyContent: "space-between",
	},
	progressBarContainer: {
		width: 300,
		position: "absolute",
		left: "50%",
		top: "50%",
	},
	upperTextCont: {
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "700",
	},
	icon: {
		width: 60,
		height: 60,
		marginTop: 30,
		marginBottom: 20,
		borderRadius: 30,
		backgroundColor: "#f2f8ce",
		justifyContent: "center",
		alignItems: "center",
	},
	helperText: {
		textAlign: "center",
	},
	inputLabel: {
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
		color: Colors.gray100,
	},
});
