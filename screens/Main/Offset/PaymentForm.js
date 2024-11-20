import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import Input from "../../../components/UI/Input";
import { Colors } from "../../../constants/Colors";

function PaymentForm({ onSubmit }) {
	return (
		<View style={styles.container}>
			<Formik
				initialValues={{
					cardHolderName: "",
					cardNumber: "",
					expirationDate: "",
					ccv: "",
				}}
				onSubmit={onSubmit} // Call onSubmit (passed from parent)
			>
				{({ handleSubmit, errors, touched }) => (
					<>
						<Input
							name="cardHolderName"
							label="Card Holder Name"
							textInputConfig={{
								placeholder: "John Doe",
								placeholderTextColor: Colors.gray300,
								autoCorrect: false,
							}}
						/>
						{errors.cardHolderName && touched.cardHolderName && (
							<Text style={{ fontSize: 15, color: Colors.error50 }}>
								{errors.cardHolderName}
							</Text>
						)}
						<Input
							name="cardNumber"
							label="Card Number"
							textInputConfig={{
								keyboardType: "numeric",
								placeholder: "0123 4537 8900 1112",
								placeholderTextColor: Colors.gray300,
								autoCorrect: false,
								autoCapitalize: "none",
							}}
						/>
						{errors.cardNumber && touched.cardNumber && (
							<Text style={{ fontSize: 15, color: Colors.error50 }}>
								{errors.cardNumber}
							</Text>
						)}
						<View style={styles.rowCont}>
							<Input
								name="expirationDate"
								label="Expiration Date"
								textInputConfig={{
									keyboardType: "default",
									placeholder: "12 / 14",
									placeholderTextColor: Colors.gray300,
									autoCorrect: false,
									autoCapitalize: "none",
								}}
								inputStyle={styles.input}
							/>
							<Input
								name="ccv"
								label="CCV"
								textInputConfig={{
									keyboardType: "default",
									placeholder: "...",
									placeholderTextColor: Colors.gray300,
									autoCorrect: false,
									autoCapitalize: "none",
								}}
								inputStyle={styles.input}
							/>
						</View>
					</>
				)}
			</Formik>
		</View>
	);
}

export default PaymentForm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rowCont: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
	},
	input: {
		flex: 1,
	},
});
