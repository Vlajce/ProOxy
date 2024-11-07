import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
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
		.matches(/\w*[a-z]\w*/, "Password must have a small letter")
		.matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
		.matches(/\d/, "Password must have a number")
		.min(7, ({ min }) => `Password must be at least ${min} characters`)
		.required("Password is required"),
});

function LogIn({ navigation }) {
	const { width, height } = useWindowDimensions();

	const form = useRef(null);

	const [toggleCheckBox, setToggleCheckBox] = useState(true);

	function submitHandler(values) {
		console.log(values);

		//Provera na backend-u

		navigation.navigate("Home");
	}

	const isLandscape = width > height;

	return (
		<KeyboardAwareScrollView
			style={[
				styles.container,
				{
					paddingVertical: isLandscape ? height * 0.05 : height * 0.1,
					paddingHorizontal: isLandscape ? width * 0.1 : width * 0.1,
				},
			]}
			contentContainerStyle={{
				paddingBottom: 50,
			}}
			keyboardShouldPersistTaps="handled"
			extraScrollHeight={30}
			scrollEnabled={true}
			bounces={false}>
			<IconButton
				icon="close-circle"
				size={40}
				color={Colors.gray100}
				onPress={() => navigation.navigate("Welcome")}></IconButton>
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
			<Text style={{ fontSize: 15, marginBottom: 15 }}>Login to continue</Text>
			<Formik
				innerRef={form}
				initialValues={{ email: "", password: "" }}
				onSubmit={submitHandler}>
				{/* Zakomentarisano samo u svrhe testiranja da bi bilo lakse */}
				{/* //validationSchema={loginValidationSchema} */}
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
						{errors.email && touched.email && (
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
						{errors.password && touched.password && (
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
						onPress={() => setToggleCheckBox(!toggleCheckBox)}
					/>
					<Text style={{ marginLeft: 8 }}>Remember me</Text>
				</View>
				<ClickableText
					onPress={() => navigation.navigate("ForgotPassword")}
					text="Forgot Password"
					style={{ fontSize: 14 }}
				/>
			</View>
			<GradientButton
				onPress={() => {
					if (form.current) {
						form.current.handleSubmit();
					} else {
						console.error("Form reference is null");
					}
				}}>
				Login
			</GradientButton>
			<View style={styles.textCointaner}>
				<View>
					<Text style={{ fontWeight: "500" }}>Don't have an account?</Text>
				</View>
				<ClickableText
					text="Calculate your CO"
					onPress={() => navigation.navigate("ChooseCountry")}
					style={{ fontSize: 14, marginLeft: 8 }}
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
	textCointaner: {
		marginTop: 36,
		flexDirection: "row",
		justifyContent: "center",
		paddingBottom: 36,
	},
	subscript: {
		color: Colors.primary200,
		fontWeight: "bold",
		lineHeight: 28,
		fontSize: 10,
	},
});
