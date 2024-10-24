import { StyleSheet, useWindowDimensions } from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Colors } from "../../constants/Colors";
import Input from "../../components/UI/Input";
import GradientButton from "../../components/UI/GradientButton";
import HeaderFP from "../../components/ForgotPassword/HeaderFP";
import InfoSection from "../../components/ForgotPassword/InfoSection";

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
			<HeaderFP
				icon="chevron-back-circle"
				size={40}
				color={Colors.gray100}
				onIconPress={IconPressHandler}
				isLandscape={isLandscape}
				progress={1 / 3}></HeaderFP>
			<InfoSection
				title="Forgot Password?"
				IconComponent={FontAwesome}
				iconProps={{ name: "key", size: 35, color: Colors.primary100 }}>
				Don't worry! It happens. Please enter the email address associated with
				your account.
			</InfoSection>
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
			<GradientButton onPress={onSubmitHandler}>Submit</GradientButton>
		</KeyboardAwareScrollView>
	);
}

export default ForgotPassword;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	inputLabel: {
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
		color: Colors.gray100,
	},
});
