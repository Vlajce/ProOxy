import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Colors } from "../../constants/Colors";

export const otherData = [
	{
		text: "FAQ",
		icon: (
			<MaterialCommunityIcons
				name="book-open-page-variant"
				size={20}
				color={Colors.gray100}
			/>
		),
		rightIcon: (
			<AntDesign
				name="right"
				size={22}
				color={Colors.gray200}
			/>
		),
	},
	{
		text: "Support",
		icon: (
			<FontAwesome6
				name="headphones"
				size={22}
				color={Colors.gray100}
			/>
		),
		rightIcon: (
			<AntDesign
				name="right"
				size={22}
				color={Colors.gray200}
			/>
		),
	},
	{
		text: "Log out",
		icon: (
			<FontAwesome6
				name="door-closed"
				size={20}
				color={Colors.red200}
			/>
		),
		rightIcon: null,
	},
];
