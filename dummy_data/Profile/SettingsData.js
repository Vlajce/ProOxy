import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../../constants/Colors";

export const settingData = [
	{
		text: "Personal information",
		icon: (
			<FontAwesome5
				name="user-alt"
				size={20}
				color={Colors.gray100}
			/>
		),
		screen: "LogIn",
	},
	{
		text: "Change password",
		icon: (
			<MaterialCommunityIcons
				name="lock"
				size={20}
				color={Colors.gray100}
			/>
		),
		screen: "ForgotPassword",
	},
	{
		text: "Payment methods",
		icon: (
			<Ionicons
				name="card"
				size={20}
				color={Colors.gray100}
			/>
		),
		screen: "PaymentMethod",
	},
];
