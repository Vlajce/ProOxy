import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
import CurrentCO2 from "./screens/Main/CurrentCO2";
import MyImpact from "./screens/Main/MyImpact";
import Projects from "./screens/Main/Projects";
import Calculator from "./screens/Main/Calculator";
import Profile from "./screens/Main/Profile";
import StatusBar from "./components/StatusBar";
import { Colors } from "./constants/Colors";
import { StatusBarProvider } from "./hooks/useStatusBar";

const Tab = createBottomTabNavigator();

function Home() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.primary100,
				tabBarInactiveTintColor: Colors.gray70,
				tabBarStyle: {
					paddingBottom: 24,
					paddingTop: 12,
					height: "10%",
				},
				tabBarLabelStyle: {
					fontSize: 12,
					fontWeight: "600",
				},
			}}>
			<Tab.Screen
				name="MyImpact"
				component={MyImpact}
				options={{
					headerTintColor: "white",
					tabBarLabel: "My impact",
					tabBarIcon: ({ color }) => (
						<FontAwesome
							name="leaf"
							color={color}
							size={22}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Projects"
				component={Projects}
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign
							name="appstore1"
							color={color}
							size={22}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Calculator"
				component={Calculator}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="calculator"
							color={color}
							size={22}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							name="user-alt"
							color={color}
							size={22}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

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
		<StatusBarProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<NavigationContainer>
					<StatusBar />
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
						<Stack.Screen name="CompleteProfile">
							{(props) => (
								<CompleteProfile
									{...props}
									countries={countries}
								/>
							)}
						</Stack.Screen>
						<Stack.Screen
							name="CurrentCO2"
							component={CurrentCO2}
						/>
						<Stack.Screen
							name="Home"
							component={Home}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</GestureHandlerRootView>
		</StatusBarProvider>
	);
}
