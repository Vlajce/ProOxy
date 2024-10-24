import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "./screens/LogIn/LogIn";
import Splash from "./screens/Splash";
import ChooseCountry from "./screens/CalculatingCO2/ChooseCountry";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import Flying from "./screens/CalculatingCO2/Flying";
import CheckYourEmail from "./screens/ForgotPassword/CheckYourEmail";
import EnterNewPassword from "./screens/ForgotPassword/EnterNewPassword";
import PasswordUpdated from "./screens/ForgotPassword/PasswordUpdated";

const Stack = createNativeStackNavigator();

export default function App() {
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
						name="Splash"
						component={Splash}
					/>
					<Stack.Screen
						name="LogIn"
						component={LogIn}
					/>
					<Stack.Screen
						name="ChooseCountry"
						component={ChooseCountry}
					/>
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
