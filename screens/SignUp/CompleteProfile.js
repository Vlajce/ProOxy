import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as yup from "yup";
import { Formik } from "formik";

import { Colors } from "../../constants/Colors";
import HeaderWithProgress from "../../components/UI/HeaderWithProgress";
import Input from "../../components/UI/Input";
import InfoSection from "../../components/ForgotPassword/InfoSection";
import GradientButton from "../../components/UI/GradientButton";
import Card from "../../components/UI/Card";
import CountrySelectionModal from "../../components/CalculatingCO2/CountrySelectionModal";

function CompleteProfile({ navigation, countries }) {
	const { width, height } = useWindowDimensions();

	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [country, setCountry] = useState({
		name: "Serbia",
		imageUrl: "https://flagcdn.com/w320/rs.png",
		callingNumber: "+381",
	});
	const form = useRef(null);

	function submitHandler(values) {
		console.log(values);

		navigation.navigate("LogIn");
	}
	function SelectCountryHandler() {
		setModalIsVisible(true);

		return (
			<CountrySelectionModal
				visible={modalIsVisible}
				onClose={() => setModalIsVisible(false)}></CountrySelectionModal>
		);
	}

	const isLandscape = width > height;
	const paddingVerticalDistance = isLandscape ? height * 0.05 : height * 0.08;
	const paddingHorizontalDistance = isLandscape ? width * 0.1 : width * 0.1;

	return (
		<View
			style={[
				styles.container,
				{
					paddingVertical: paddingVerticalDistance,
					paddingHorizontal: paddingHorizontalDistance,
				},
			]}>
			<HeaderWithProgress
				icon="chevron-back-circle"
				size={40}
				color={Colors.gray100}
				onIconPress={() => navigation.goBack()}
				isLandscape={isLandscape}
				progress={3 / 3}
			/>

			<KeyboardAwareScrollView
				style={styles.scrollableCont}
				bounces="false"
				keyboardShouldPersistTaps="handled"
				extraScrollHeight={50}
				scrollEnabled={true}>
				<InfoSection title="Complete Profile" />
				<Formik
					innerRef={form}
					initialValues={{
						address: "",
						aptNumber: "",
						city: "",
						region: "",
						zipCode: "",
						country: "",
						phone: "",
					}}
					onSubmit={submitHandler}
					//validationSchema={registrationValidationSchema}
				>
					{({ handleSubmit, errors, touched }) => (
						<>
							<Input
								name="address"
								label="Street Address"
								textInputConfig={{
									keyboardType: "default",
									placeholder: "Enter Your Address",
									autoCorrect: false,
									autoCapitalize: "none",
								}}
							/>
							{errors.address && touched.address && (
								<Text style={{ fontSize: 15, color: Colors.error50 }}>
									{errors.address}
								</Text>
							)}
							<Input
								name="aptNumber"
								label="Apt / Suite Number"
								textInputConfig={{
									keyboardType: "default",
									placeholder: "Enter Your Apt / Suite Number",
									autoCorrect: false,
									autoCapitalize: "none",
								}}
							/>
							{errors.aptNumber && touched.aptNumber && (
								<Text style={{ fontSize: 15, color: Colors.error50 }}>
									{errors.aptNumber}
								</Text>
							)}
							<Input
								name="city"
								label="City"
								textInputConfig={{
									keyboardType: "email-address",
									placeholder: "Enter Your City",
									autoCorrect: false,
									autoCapitalize: "none",
								}}
							/>
							{errors.city && touched.city && (
								<Text style={{ fontSize: 15, color: Colors.error50 }}>
									{errors.city}
								</Text>
							)}
							<Input
								name="region"
								label="Region"
								textInputConfig={{
									keyboardType: "email-address",
									placeholder: "Enter Your Region",
									autoCorrect: false,
									autoCapitalize: "none",
								}}
							/>
							{errors.region && touched.region && (
								<Text style={{ fontSize: 15, color: Colors.error50 }}>
									{errors.region}
								</Text>
							)}
							<Input
								name="zipCode"
								label="ZIP Code"
								textInputConfig={{
									keyboardType: "email-address",
									placeholder: "Enter Your ZIP Code",
									autoCorrect: false,
									autoCapitalize: "none",
								}}
							/>
							{errors.zipCode && touched.zipCode && (
								<Text style={{ fontSize: 15, color: Colors.error50 }}>
									{errors.zipCode}
								</Text>
							)}
							<Card
								label="Country"
								flag={
									country ? country.imageUrl : "https://flagcdn.com/w320/rs.png"
								}
								name={country ? country.name : "Serbia"}
								icon="caretdown"
								onPress={SelectCountryHandler}
								style={{ marginTop: 20 }}
							/>
							{errors.country && touched.country && (
								<Text style={{ fontSize: 15, color: Colors.error50 }}>
									{errors.country}
								</Text>
							)}
							<Input
								name="phone"
								label="Phone Number"
								prefix={country.callingNumber}
								textInputConfig={{
									keyboardType: "email-address",
									autoCorrect: false,
									autoCapitalize: "none",
								}}
								textStyle={{ color: "black" }}
							/>
							{errors.phone && touched.phone && (
								<Text style={{ fontSize: 15, color: Colors.error50 }}>
									{errors.phone}
								</Text>
							)}
						</>
					)}
				</Formik>
				<GradientButton
					style={{ marginVertical: 40 }}
					onPress={() => {
						if (form.current) {
							form.current.handleSubmit();
						} else {
							console.error("Form reference is null");
						}
					}}>
					Save Account
				</GradientButton>
				{modalIsVisible && (
					<CountrySelectionModal
						modalVisible={modalIsVisible}
						onClose={() => setModalIsVisible(false)}
						onSelectCountry={(selectedCountry) => {
							setCountry({
								name: selectedCountry.name.common,
								coConcentration: selectedCountry.coConcentration || 580,
								imageUrl: selectedCountry.flags.png,
								callingNumber: selectedCountry.idd.root,
							});
						}}
						countries={countries}
					/>
				)}
			</KeyboardAwareScrollView>
		</View>
	);
}

export default CompleteProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollableCont: {
		flex: 1,
	},
});
