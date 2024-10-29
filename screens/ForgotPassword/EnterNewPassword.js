import { StyleSheet, useWindowDimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useState } from "react";

import { Colors } from "../../constants/Colors";
import HeaderForgotPassword from "../../components/ForgotPassword/HeaderForgotPassword";
import InfoSection from "../../components/ForgotPassword/InfoSection";
import GradientButton from "../../components/UI/GradientButton";
import Input from "../../components/UI/Input";

function EnterNewPassword({ navigation }) {
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { width, height } = useWindowDimensions();

	function IconPressHandler() {
		navigation.goBack();
	}

	function onSubmitHandler() {
		navigation.navigate("PasswordUpdated");
	}

	function NewPasswordChangeHandler(enteredValue) {
		setNewPassword(enteredValue);
	}

	function ConfirmPasswordChangeHandler(enteredValue) {
		setConfirmPassword(enteredValue);
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
			<HeaderForgotPassword
				icon="chevron-back-circle"
				size={40}
				color={Colors.gray100}
				onIconPress={IconPressHandler}
				isLandscape={isLandscape}
				progress={5 / 7}></HeaderForgotPassword>
			<InfoSection
				title="Enter New Password"
				IconComponent={SimpleLineIcons}
				iconProps={{ name: "lock", size: 35, color: Colors.primary100 }}
				textStyle={{ paddingHorizontal: 20 }}>
				Set a strong password to keep secure your account
			</InfoSection>
			<Input
				label="New Password"
				labelStyle={styles.inputLabel}
				textInputConfig={{
					keyboardType: "default",
					placeholder: "Enter Your New Password",
					minLength: 7,
					autoCorrect: false,
					autoCapitalize: "none",
					secureTextEntry: true,
					onChangeText: NewPasswordChangeHandler,
					value: newPassword,
				}}
			/>
			<Input
				label="Confirm New Password"
				labelStyle={styles.inputLabel}
				textInputConfig={{
					keyboardType: "default",
					placeholder: "Confirm Password",
					minLength: 7,
					autoCorrect: false,
					autoCapitalize: "none",
					secureTextEntry: true,
					onChangeText: ConfirmPasswordChangeHandler,
					value: confirmPassword,
				}}
			/>
			<GradientButton
				onPress={onSubmitHandler}
				style={{ marginTop: 30 }}>
				Reset Password
			</GradientButton>
		</KeyboardAwareScrollView>
	);
}

export default EnterNewPassword;

const styles = StyleSheet.create({
	container: {
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
