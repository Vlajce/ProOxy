import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import HeaderWithProgress from "../../components/UI/HeaderWithProgress";
import InfoSection from "../../components/ForgotPassword/InfoSection";
import GradientButton from "../../components/UI/GradientButton";
import ClickableText from "../../components/UI/ClickableText";
import { Colors } from "../../constants/Colors";

function CheckYourEmail({ navigation }) {
	const { width, height } = useWindowDimensions();

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
				paddingBottom: 100,
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
				onPress={() => navigation.navigate("EnterNewPassword")}
				style={{ marginTop: 30 }}>
				Open Email App
			</GradientButton>

			<View
				style={[
					styles.textCont,
					{ marginTop: isLandscape ? height * 0.08 : height * 0.15 },
				]}>
				<Text style={styles.lowerText}>
					It may take a minute to recieve the email.
				</Text>
				<Text
					style={[
						styles.lowerText,
						{ marginBottom: isLandscape ? height * 0.05 : height * 0.06 },
					]}>
					Check your spam folder.
				</Text>
				<ClickableText
					text="Resend an email"
					onPress={() => console.log("Resend an Email")}
					style={{ fontSize: 14 }}
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
