import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
	TextInput,
	Button,
} from "react-native";
import { useState, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as yup from "yup";
import { Formik } from "formik";

import { Colors } from "../../constants/Colors";
import Input from "../../components/UI/Input";
import IconButton from "../../components/UI/IconButton";
import GradientButton from "../../components/UI/GradientButton";
import ClickableText from "../../components/UI/ClickableText";
import IconCheckBox from "../../components/UI/IconCheckBox";

const loginValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter valid email")
		.required("Email Address is Required"),
	password: yup
		.string()
		.min(7, ({ min }) => `Password must be at least ${min} characters`)
		.required("Password is required"),
});

function LogIn({ navigation }) {
	const { width, height } = useWindowDimensions();

	const form = useRef(null);

	const [toggleCheckBox, setToggleCheckBox] = useState(true);

	function IconPressedHandler() {
		navigation.goBack();
	}

	function CalculatePressedHandler() {
		navigation.navigate("ChooseCountry");
	}

	function SetCheckBoxValue() {
		setToggleCheckBox(!toggleCheckBox);
	}

	function submitHandler(values) {
		console.log(values);

		//Provera na backend-u

		navigation.navigate("Offset");
	}

	const isLandscape = width > height;
	const paddingVerticalDistance = isLandscape ? height * 0.05 : height * 0.1;
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
			keyboardShouldPersistTaps="handled"
			extraScrollHeight={30}
			scrollEnabled={true}
			bounces={false}>
			<IconButton
				icon="close-circle"
				size={40}
				color={Colors.gray100}
				onPress={IconPressedHandler}></IconButton>
			<View style={styles.welcomeContainer}>
				<View>
					<Text style={styles.textWelcome}>Welcome</Text>
				</View>
				<View>
					<Image
						style={styles.wavingHand}
						source={require("../../assets/images/waving-hand.png")}
					/>
				</View>
			</View>
			<Text style={styles.textLog}>Login to continue</Text>
			<Formik
				innerRef={form}
				initialValues={{ email: "", password: "" }}
				onSubmit={submitHandler}
				validationSchema={loginValidationSchema}>
				{({ handleSubmit, values, errors, touched }) => (
					<>
						<Input
							name="email"
							label="Email"
							textInputConfig={{
								keyboardType: "email-address",
								placeholder: "Your Email Address",
								autoCorrect: false,
								autoCapitalize: "none",
							}}
						/>
						{touched.email && errors.email && (
							<Text style={{ fontSize: 15, color: Colors.error50 }}>
								{errors.email}
							</Text>
						)}
						<Input
							name="password"
							label="Password"
							textInputConfig={{
								keyboardType: "default",
								placeholder: "Enter Your Password",
								autoCorrect: false,
								autoCapitalize: "none",
								secureTextEntry: true,
							}}
						/>
						{touched.password && errors.password && (
							<Text style={{ fontSize: 15, color: Colors.error50 }}>
								{errors.password}
							</Text>
						)}
					</>
				)}
			</Formik>
			<View style={styles.rowContainer}>
				<View style={styles.cbxContainer}>
					<IconCheckBox
						icon="checkbox"
						size={30}
						color={toggleCheckBox ? Colors.primary200 : Colors.gray50}
						onPress={SetCheckBoxValue}
					/>
					<Text style={styles.rememberText}>Remember me</Text>
				</View>
				<ClickableText
					onPress={() => navigation.navigate("ForgotPassword")}
					text="Forgot Password"
				/>
			</View>
			<GradientButton onPress={() => form.current.submitForm()}>
				Login
			</GradientButton>
			<View style={styles.textCointaner}>
				<View>
					<Text style={styles.textAcc}>Don't have an account?</Text>
				</View>
				<ClickableText
					text="Calculate your CO"
					onPress={CalculatePressedHandler}
				/>
				<Text style={styles.subscript}>2</Text>
			</View>
		</KeyboardAwareScrollView>
	);
}

export default LogIn;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	welcomeContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 36,
	},
	textWelcome: {
		fontWeight: "bold",
		fontSize: 28,
		marginBottom: 7,
	},
	wavingHand: {
		width: 30,
		height: 30,
		marginLeft: 6,
		justifyContent: "center",
	},
	textLog: {
		fontSize: 15,
		marginBottom: 15,
	},
	rowContainer: {
		marginVertical: 14,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	cbxContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	rememberText: {
		marginLeft: 8,
	},
	forgotPasswordText: {
		color: Colors.primary200,
		fontWeight: "600",
	},
	textCointaner: {
		marginTop: 36,
		flexDirection: "row",
		justifyContent: "center",
		paddingBottom: 36,
	},
	textAcc: {
		fontWeight: "500",
	},
	calcContainer: {
		marginLeft: 6,
	},
	calcText: {
		color: Colors.primary200,
		fontWeight: "600",
	},
	errorText: {
		color: Colors.error500,
		fontSize: 12,
		marginBottom: 8,
		fontWeight: "bold",
	},
	subscript: {
		color: Colors.primary200,
		fontWeight: "bold",
		lineHeight: 28,
		fontSize: 10,
	},
	textInput: {
		height: 40,
		width: "100%",
		margin: 10,
		backgroundColor: "white",
		borderColor: "gray",
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 10,
	},
});
