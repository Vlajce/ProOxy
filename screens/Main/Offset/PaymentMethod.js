import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Switch } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import IconButton from "../../../components/UI/IconButton";
import { Colors } from "../../../constants/Colors";
import PaymentMethodCard from "../../../components/MainScreen/MyImpact/PaymentMethodCard";
import PaymentForm from "./PaymentForm";
import GradientButton from "../../../components/UI/GradientButton";

function PaymentMethod({ navigation }) {
	const [isEnabled, setIsEnabled] = useState(false);

	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	function submitHandler(values) {
		console.log(values);
		navigation.navigate("ThanksGiving");
	}

	return (
		<KeyboardAwareScrollView
			style={styles.scrollableCont}
			bounces={false}
			keyboardShouldPersistTaps="handled"
			extraScrollHeight={50}
			scrollEnabled={true}>
			<SafeAreaView style={styles.container}>
				<IconButton
					icon="chevron-back-circle"
					size={40}
					color={Colors.gray70}
					onPress={() => navigation.goBack()}
				/>
				<Text style={styles.title}>Payment Method</Text>
				<View style={styles.paymentMethod}>
					<PaymentMethodCard
						iconComponent={
							<Ionicons
								name="card"
								size={40}
								color={Colors.gray70}
							/>
						}
						iconStyle={styles.iconStyle}
					/>
					<PaymentMethodCard
						iconComponent={
							<Entypo
								name="paypal"
								size={40}
								color={Colors.gray70}
							/>
						}
						iconStyle={styles.iconStyle}
					/>
				</View>
				<Text style={styles.cardText}>Credit card</Text>
				<PaymentForm onSubmit={submitHandler} />
				<View style={styles.rowCont}>
					<Text style={styles.switchText}>Save for future purchases</Text>
					<Switch
						trackColor={{ false: Colors.gray70, true: Colors.primary100 }}
						thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
						ios_backgroundColor={Colors.gray70}
						onValueChange={toggleSwitch}
						value={isEnabled}
						style={styles.switch}
					/>
				</View>
				<GradientButton
					style={{ marginVertical: 40 }}
					onPress={() => {
						submitHandler();
					}}>
					Pay now
				</GradientButton>
			</SafeAreaView>
		</KeyboardAwareScrollView>
	);
}

export default PaymentMethod;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60,
		marginHorizontal: 30,
	},
	title: {
		marginTop: 24,
		fontSize: 30,
		fontWeight: "600",
		textAlign: "center",
	},
	paymentMethod: {
		paddingHorizontal: 10,
		marginVertical: 20,
		flexDirection: "row",
	},
	iconStyle: {
		paddingVertical: 20,
		width: "95%",
		borderRadius: 20,
		backgroundColor: Colors.gray10,
		borderColor: Colors.gray10,
		borderWidth: 2,
		alignItems: "center",
		alignSelf: "center",
	},
	cardText: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "600",
	},
	rowCont: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
	},
	switchText: {
		fontSize: 17,
		fontWeight: "600",
	},
	switch: {},
});
