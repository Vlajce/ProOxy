import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Colors } from "../../constants/Colors";
import HeaderWithProgress from "../../components/UI/HeaderWithProgress";
import InfoSection from "../../components/ForgotPassword/InfoSection";
import GradientButton from "../../components/UI/GradientButton";
import ClickableText from "../../components/UI/ClickableText";

function ConfirmYourMail({ navigation }) {
	const { width, height } = useWindowDimensions();

	const isLandscape = width > height;
	const paddingVerticalDistance = isLandscape ? height * 0.05 : height * 0.08;
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
				paddingBottom: 80,
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
				progress={2 / 3}
			/>
			<InfoSection
				title="Confirm Your Email"
				IconComponent={MaterialCommunityIcons}
				iconProps={{
					name: "shield-check-outline",
					size: 35,
					color: Colors.primary100,
				}}>
				Please confirm your account by entering the authorization code sent to
				your email.
			</InfoSection>

			<View style={styles.codeContainer}></View>
			<GradientButton
				style={{ marginBottom: 40 }}
				onPress={() => navigation.navigate("CompleteProfile")}>
				Confirm Email Address
			</GradientButton>
			<Text style={styles.text}>It may take a minute to receive you core.</Text>
			<Text style={styles.text}>Hasn't recieved it?</Text>
			<ClickableText
				onPress={() => console.log("Resend a new code")}
				text="Resend a new code"
				style={{ textAlign: "center", fontSize: 15, marginTop: 40 }}
			/>
		</KeyboardAwareScrollView>
	);
}

export default ConfirmYourMail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	codeContainer: {
		marginVertical: 40,
		width: 310,
		height: 100,
		backgroundColor: Colors.gray10,
	},
	text: {
		textAlign: "center",
	},
});
