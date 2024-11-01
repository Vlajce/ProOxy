import React, { useState, useRef } from "react";
import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	TouchableOpacity,
	Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as yup from "yup";
import { Formik } from "formik";

import HeaderWithProgress from "../../components/UI/HeaderWithProgress";
import { Colors } from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import InfoSection from "../../components/ForgotPassword/InfoSection";
import Input from "../../components/UI/Input";
import IconCheckBox from "../../components/UI/IconCheckBox";
import ClickableText from "../../components/UI/ClickableText";
import GradientButton from "../../components/UI/GradientButton";

const registrationValidationSchema = yup.object().shape({
	name: yup
		.string()
		.min(3, "Too Short!")
		.max(30, "Too Long!")
		.required("Name is required"),
	surname: yup
		.string()
		.min(3, "Too Short!")
		.max(30, "Too Long!")
		.required("Surname is required"),
	email: yup
		.string()
		.email("Please enter valid email")
		.required("Email Address is Required"),
});

function CreateAccount({ navigation }) {
	const { width, height } = useWindowDimensions();

	const [toggleCheckBox, setToggleCheckBox] = useState(true);

	const form = useRef(null);

	function submitHandler(values) {
		console.log(values);

		navigation.navigate("ConfirmYourMail");
	}

	const isLandscape = width > height;
	const paddingVerticalDistance = isLandscape ? height * 0.05 : height * 0.08;
	const paddingHorizontalDistance = isLandscape ? width * 0.1 : width * 0.1;

	return (
		<>
			<StatusBar />
			<KeyboardAwareScrollView
				style={[
					styles.container,
					{
						paddingVertical: paddingVerticalDistance,
						paddingHorizontal: paddingHorizontalDistance,
					},
				]}
				contentContainerStyle={{
					paddingBottom: 80,
				}}
				keyboardShouldPersistTaps="handled"
				extraScrollHeight={30}
				scrollEnabled={true}
				bounces={false}>
				<HeaderWithProgress
					icon="chevron-back-circle"
					size={40}
					color={Colors.gray100}
					onIconPress={() => navigation.goBack()}
					isLandscape={isLandscape}
					progress={1 / 3}
					style={{ marginBottom: 24 }}
				/>
				<InfoSection title="Create Account" />
				<Formik
					innerRef={form}
					initialValues={{ name: "", surname: "", email: "" }}
					onSubmit={submitHandler}
					//validationSchema={registrationValidationSchema}
				>
					{({ handleSubmit, errors, touched }) => (
						<>
							<Input
								name="name"
								label="Name"
								textInputConfig={{
									keyboardType: "default",
									placeholder: "Enter Your Name",
									autoCorrect: false,
									autoCapitalize: "none",
								}}
							/>
							{errors.name && touched.name && (
								<Text style={{ fontSize: 15, color: Colors.error50 }}>
									{errors.name}
								</Text>
							)}
							<Input
								name="surname"
								label="Surname"
								textInputConfig={{
									keyboardType: "default",
									placeholder: "Enter Your Surname",
									autoCorrect: false,
									autoCapitalize: "none",
								}}
							/>
							{errors.surname && touched.surname && (
								<Text style={{ fontSize: 15, color: Colors.error50 }}>
									{errors.surname}
								</Text>
							)}
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
				<View style={styles.rowContainer}>
					<View style={{ justifyContent: "flex-start" }}>
						<IconCheckBox
							icon="checkbox"
							size={30}
							color={toggleCheckBox ? Colors.primary200 : Colors.gray50}
							onPress={() => setToggleCheckBox(!toggleCheckBox)}
						/>
					</View>
					<View style={styles.textCont}>
						<Text style={{ fontSize: 15, fontWeight: "500" }}>
							By creating an account, you agree to our
							<ClickableText
								onPress={() => setToggleCheckBox(!toggleCheckBox)}
								text="Term & Conditions"
								style={{ fontSize: 15, marginTop: 8 }}
							/>
						</Text>
					</View>
				</View>
				<GradientButton
					onPress={() => {
						if (form.current) {
							form.current.handleSubmit();
						} else {
							console.error("Form reference is null");
						}
					}}>
					Create Account
				</GradientButton>
				<View style={styles.divider}>
					<View style={styles.hairline} />
					<Text style={styles.dividerText}>Or Sign up with</Text>
					<View style={styles.hairline} />
				</View>
				<View style={styles.iconsContainer}>
					<TouchableOpacity
						onPress={() => {
							console.log("Kliknuto na Apple ikonicu");
						}}>
						<Image
							source={require("../../assets/icons/apple.png")}
							style={styles.image}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							console.log("Kliknuto na Google ikonicu");
						}}>
						<Image
							source={require("../../assets/icons/google.png")}
							style={styles.image}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							console.log("Kliknuto na Facebook ikonicu");
						}}>
						<Image
							source={require("../../assets/icons/facebook.png")}
							style={styles.image}
						/>
					</TouchableOpacity>
				</View>
			</KeyboardAwareScrollView>
		</>
	);
}

export default CreateAccount;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rowContainer: {
		flexDirection: "row",
		marginVertical: 14,
	},
	textCont: {
		paddingVertical: 8,
		marginLeft: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	divider: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 40,
	},
	hairline: {
		flex: 1,
		height: 1,
		backgroundColor: Colors.gray10,
	},
	dividerText: {
		marginHorizontal: 8,
		fontSize: 15,
		fontWeight: "500",
	},
	iconsContainer: {
		paddingHorizontal: 50,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	image: {
		width: 35,
		height: 35,
	},
});
