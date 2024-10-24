import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import HeaderFP from "../../components/ForgotPassword/HeaderFP";
import InfoSection from "../../components/ForgotPassword/InfoSection";
import GradientButton from "../../components/UI/GradientButton";
import ClickableText from "../../components/UI/ClickableText";
import { Colors } from "../../constants/Colors";

function CheckYourEmail({ navigation }) {
	const { width, height } = useWindowDimensions();

	function IconPressHandler() {
		navigation.goBack();
	}

	function onSubmitHandler() {
		navigation.navigate("EnterNewPassword");
	}

	function ResendEmail() {}

	const isLandscape = width > height;
	const paddingVerticalDistance = isLandscape ? height * 0.15 : height * 0.1;
	const paddingHorizontalDistance = isLandscape ? width * 0.1 : width * 0.1;

	const marginBottomDistance = isLandscape ? height * 0.05 : height * 0.06; //50 za portrait
	const marginTopDistance = isLandscape ? height * 0.08 : height * 0.15; //150 za portrait

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
				title="Check Your Email"
				IconComponent={FontAwesome}
				iconProps={{
					name: "envelope-open-o",
					size: 35,
					color: Colors.primary100,
				}}
				textStyle={{ paddingHorizontal: 20 }}>
				We have sent a password recover instuctions to your email
			</InfoSection>
			<GradientButton
				onPress={onSubmitHandler}
				style={{ marginTop: 30 }}>
				Open Email App
			</GradientButton>

			<View style={[styles.textCont, { marginTop: marginTopDistance }]}>
				<Text style={styles.lowerText}>
					It may take a minute to recieve the email.
				</Text>
				<Text
					style={[styles.lowerText, { marginBottom: marginBottomDistance }]}>
					Check your spam folder.
				</Text>
				<ClickableText
					text="Resend an email"
					onPress={ResendEmail}
				/>
			</View>
		</KeyboardAwareScrollView>
	);
}

export default CheckYourEmail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textCont: {
		alignItems: "center",
	},
	lowerText: {
		textAlign: "center",
	},
});
