import { StyleSheet, useWindowDimensions, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useRef } from "react";
import * as yup from "yup";
import { Formik } from "formik";

import { Colors } from "../../constants/Colors";
import HeaderWithProgress from "../../components/UI/HeaderWithProgress";
import InfoSection from "../../components/ForgotPassword/InfoSection";
import GradientButton from "../../components/UI/GradientButton";
import Input from "../../components/UI/Input";

const newPasswordValidationSchema = yup.object().shape({
	newPassword: yup
		.string()
		.matches(/\w*[a-z]\w*/, "Password must have a small letter")
		.matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
		.matches(/\d/, "Password must have a number")
		.min(7, ({ min }) => `Password must be at least ${min} characters`)
		.required("Password is required"),
	confirmPassword: yup
		.string()
		.required("Password must be confirmed")
		.test("passwords-match", "Passwords must match", function (value) {
			return this.parent.newPassword === value;
		}),
});

function EnterNewPassword({ navigation }) {
	const { width, height } = useWindowDimensions();

	const form = useRef(null);

	function IconPressHandler() {
		navigation.goBack();
	}

	function submitHandler(values) {
		console.log(values);

		navigation.navigate("PasswordUpdated");
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
			extraScrollHeight={30}
			scrollEnabled={true}>
			<HeaderWithProgress
				icon="chevron-back-circle"
				size={40}
				color={Colors.gray100}
				onIconPress={IconPressHandler}
				isLandscape={isLandscape}
				progress={5 / 7}></HeaderWithProgress>
			<InfoSection
				title="Enter New Password"
				IconComponent={SimpleLineIcons}
				iconProps={{ name: "lock", size: 35, color: Colors.primary100 }}
				textStyle={{ paddingHorizontal: 20 }}>
				Set a strong password to keep secure your account
			</InfoSection>
			<Formik
				innerRef={form}
				initialValues={{ newPassword: "", confirmPassword: "" }}
				onSubmit={submitHandler}
				validationSchema={newPasswordValidationSchema}>
				{({ handleSubmit, values, errors, touched }) => (
					<>
						<Input
							name="newPassword"
							label="New Password"
							textInputConfig={{
								keyboardType: "default",
								placeholder: "Enter Your New Password",
								minLength: 7,
								autoCorrect: false,
								autoCapitalize: "none",
								secureTextEntry: true,
							}}
						/>
						{errors.newPassword && touched.newPassword && (
							<Text style={{ fontSize: 15, color: Colors.error50 }}>
								{errors.newPassword}
							</Text>
						)}
						<Input
							name="confirmPassword"
							label="Confirm New Password"
							textInputConfig={{
								keyboardType: "default",
								placeholder: "Confirm Password",
								minLength: 7,
								autoCorrect: false,
								autoCapitalize: "none",
								secureTextEntry: true,
							}}
						/>
						{errors.confirmPassword && touched.confirmPassword && (
							<Text style={{ fontSize: 15, color: Colors.error50 }}>
								{errors.confirmPassword}
							</Text>
						)}
					</>
				)}
			</Formik>
			<GradientButton
				onPress={() => {
					if (form.current) {
						form.current.handleSubmit();
					} else {
						console.error("Form reference is null");
					}
				}}
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
