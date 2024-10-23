import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Colors } from "../../constants/Colors";

import Input from "../../components/UI/Input";
import IconButton from "../../components/UI/IconButton";
import GradientButton from "../../components/UI/GradientButton";
import ClickableText from "../../components/UI/ClickableText";
import IconCheckBox from "../../components/UI/IconCheckBox";

function LogIn({ navigation }) {
	const [inputValue, setInputValues] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});
	const [toggleCheckBox, setToggleCheckBox] = useState(true);
	const { width, height } = useWindowDimensions();

	function IconPressedHandler() {
		navigation.goBack();
	}

	function CalculatePressedHandler() {
		navigation.navigate("ChooseCountry");
	}
	function ForgotPassword() {
		navigation.navigate("ForgotPassword");
	}

	function SetCheckBoxValue() {
		setToggleCheckBox(!toggleCheckBox);
	}

	function InputChangeHandler(inputIdentifier, eneterdValue) {
		setInputValues((currentInputValues) => {
			return {
				...currentInputValues,
				[inputIdentifier]: eneterdValue, //dinamicki pristup propertiju
			};
		});
		setErrors({
			email: "",
			password: "",
		});
	}

	function LoginHandler() {
		const user = {
			email: inputValue.email,
			password: inputValue.password,
		};

		if (!InputValidation(user)) {
			setInputValues((currentValues) => {
				return {
					email: currentValues.email,
					password: currentValues.password,
				};
			});
			return;
		}

		console.log(user);

		//fetch...
		//context za usere!
	}

	function InputValidation(user) {
		let emailError = "";
		let passwordError = "";
		let isValid = true;

		if (user.email.trim() === "") {
			emailError = "Email field cannot be empty";
			isValid = false;
		} else {
			const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
			if (!emailRegex.test(user.email)) {
				emailError = "Please enter a valid email address";
				isValid = false;
			}
		}
		if (user.password.trim() === "") {
			passwordError = "Password field cannot be empty";
			isValid = false;
		} else if (user.password.length < 8) {
			passwordError = "Password should be at least 8 characters long";
			isValid = false;
		} else if (!/\d/.test(user.password)) {
			passwordError = "Password must contain at least one number";
			isValid = false;
		} else if (!/[A-Z]/.test(user.password) || !/[a-z]/.test(user.password)) {
			passwordError = "Password must contain both upper and lower case letters";
			isValid = false;
		} else if (!/[^A-Za-z0-9]/.test(user.password)) {
			passwordError = "Password must contain at least one special character";
			isValid = false;
		}

		setErrors({
			email: emailError,
			password: passwordError,
		});

		return isValid;
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
			extraScrollHeight={50}
			scrollEnabled={true}>
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
			<Input
				label="Email"
				labelStyle={styles.inputLabel}
				textInputConfig={{
					keyboardType: "email-address",
					placeholder: "Your Email Address",
					autoCorrect: false,
					autoCapitalize: "none",
					onChangeText: InputChangeHandler.bind(this, "email"),
					value: inputValue.email,
				}}
			/>
			{errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
			<Input
				label="Password"
				labelStyle={styles.inputLabel}
				textInputConfig={{
					keyboardType: "default",
					placeholder: "Enter Your Password",
					minLength: 7,
					autoCorrect: false,
					autoCapitalize: "none",
					secureTextEntry: true,
					onChangeText: InputChangeHandler.bind(this, "password"),
					value: inputValue.password,
				}}
			/>
			{errors.password && (
				<Text style={styles.errorText}>{errors.password}</Text>
			)}
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
					onPress={ForgotPassword}
					text="Forgot Password"
				/>
			</View>
			<GradientButton onPress={LoginHandler}>Login</GradientButton>
			<View style={styles.textCointaner}>
				<View>
					<Text style={styles.textAcc}>Don't have an account?</Text>
				</View>
				<ClickableText
					onPress={CalculatePressedHandler}
					text="Calculate your CO"
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
	inputLabel: {
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
		color: Colors.gray100,
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
});
