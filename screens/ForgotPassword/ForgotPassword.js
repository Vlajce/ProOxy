import { StyleSheet, useWindowDimensions, Text } from "react-native";
import React, { useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Formik } from "formik";
import * as yup from "yup";

import { Colors } from "../../constants/Colors";
import Input from "../../components/UI/Input";
import GradientButton from "../../components/UI/GradientButton";
import HeaderWithProgress from "../../components/UI/HeaderWithProgress";
import InfoSection from "../../components/ForgotPassword/InfoSection";

const forgotPasswordValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter valid email")
		.required("Email Address is Required"),
});

function ForgotPassword({ navigation }) {
	const { width, height } = useWindowDimensions();

	const form = useRef(null);

	function submitHandler(values) {
		console.log(values);
		navigation.navigate("CheckYourEmail");
	}

	const isLandscape = width > height;

	return (
		<KeyboardAwareScrollView
			style={[
				styles.container,
				{
					paddingVertical: isLandscape ? height * 0.15 : height * 0.1,
					paddingHorizontal: isLandscape ? width * 0.1 : width * 0.1,
				},
			]}
			contentContainerStyle={{
				paddingBottom: 50,
			}}
			bounces="false"
			keyboardShouldPersistTaps="handled"
			extraScrollHeight={50}
			scrollEnabled={true}>
			<HeaderWithProgress
				icon="chevron-back-circle"
				size={40}
				color={Colors.gray100}
				onIconPress={() => navigation.goBack()}
				isLandscape={isLandscape}
				progress={1 / 3}
			/>
			<InfoSection
				title="Forgot Password?"
				IconComponent={FontAwesome}
				iconProps={{ name: "key", size: 35, color: Colors.primary100 }}>
				Don't worry! It happens. Please enter the email address associated with
				your account.
			</InfoSection>
			<Formik
				innerRef={form}
				initialValues={{ email: "" }}
				onSubmit={submitHandler}>
				{/*zakomentarisano u svrhe testiranja*/}
				{/* validationSchema={newPasswordValidationSchema}> */}
				{({ handleSubmit, values, errors, touched }) => (
					<>
						<Input
							name="email"
							label="Email"
							textInputConfig={{
								keyboardType: "email-address",
								placeholder: "Enter Your Email Address",
								autoCorrect: false,
								autoCapitalize: "none",
							}}
						/>
						{errors.email && touched.email && (
							<Text style={{ fontSize: 15, color: Colors.error50 }}>
								{errors.email}
							</Text>
						)}
					</>
				)}
			</Formik>
			<GradientButton
				style={{ marginTop: 26 }}
				onPress={() => {
					if (form.current) {
						form.current.handleSubmit();
					} else {
						console.error("Form reference is null");
					}
				}}>
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
});
