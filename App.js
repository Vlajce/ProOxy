import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import axios from "axios";

import LogIn from "./screens/LogIn/LogIn";
import Welcome from "./screens/Welcome";
import ChooseCountry from "./screens/CalculatingCO2/ChooseCountry";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import Flying from "./screens/CalculatingCO2/Flying";
import CheckYourEmail from "./screens/ForgotPassword/CheckYourEmail";
import EnterNewPassword from "./screens/ForgotPassword/EnterNewPassword";
import PasswordUpdated from "./screens/ForgotPassword/PasswordUpdated";
import CreateAccount from "./screens/SignUp/CreateAccount";
import ConfirmYourMail from "./screens/SignUp/ConfirmYourEmail";
import CompleteProfile from "./screens/SignUp/CompleteProfile";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const loadCountries = async () => {
			try {
				const response = await axios.get("https://restcountries.com/v3.1/all");
				const sortedCountries = response.data.sort((a, b) =>
					a.name.common.localeCompare(b.name.common)
				);
				setCountries(sortedCountries);
			} catch (error) {
				console.error("Greska pri ucitavanju drzava:", error);
			} finally {
				setIsReady(true);
				await SplashScreen.hideAsync();
			}
		};

		loadCountries();
	}, []);

	if (!isReady) {
		return null;
	}

	return (
		<>
			<NavigationContainer>
				<StatusBar style="auto" />
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						contentStyle: {
							backgroundColor: "#FFFFFF",
						},
					}}>
					<Stack.Screen
						name="Welcome"
						component={Welcome}
					/>
					<Stack.Screen
						name="LogIn"
						component={LogIn}
					/>
					<Stack.Screen name="ChooseCountry">
						{(props) => (
							<ChooseCountry
								{...props}
								countries={countries}
							/>
						)}
					</Stack.Screen>
					<Stack.Screen
						name="ForgotPassword"
						component={ForgotPassword}
					/>
					<Stack.Screen
						name="CheckYourEmail"
						component={CheckYourEmail}
					/>
					<Stack.Screen
						name="EnterNewPassword"
						component={EnterNewPassword}
					/>
					<Stack.Screen
						name="PasswordUpdated"
						component={PasswordUpdated}
					/>
					<Stack.Screen
						name="Flying"
						component={Flying}
					/>
					<Stack.Screen
						name="CreateAccount"
						component={CreateAccount}
					/>
					<Stack.Screen
						name="ConfirmYourMail"
						component={ConfirmYourMail}
					/>
					<Stack.Screen
						name="CompleteProfile"
						component={CompleteProfile}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
