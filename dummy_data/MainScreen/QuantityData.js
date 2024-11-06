import { Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";

import { Colors } from "../../constants/Colors";

export const getQuantityData = (country, worldAvg) => {
	const quantityData = [
		{
			text: "You",
			icon: (
				<FontAwesome
					name="user-circle"
					size={28}
					color={Colors.blue500}
				/>
			),
			value: 708,
			valueColor: { color: Colors.red200 },
			progress: 1,
			progressColor: Colors.red200,
		},
		{
			text: "Avg " + country.name,
			icon: (
				<Image
					source={{ uri: country.imageUrl }}
					style={{ width: 28, height: 28, borderRadius: 28 }}
				/>
			),
			value: country.coConcentration,
			valueColor: { color: "black" },
			progress: country.coConcentration / 1000,
			progressColor: Colors.blue200,
		},
		{
			text: "Avg World",
			icon: (
				<Fontisto
					name="world"
					size={28}
					color={Colors.blue500}
				/>
			),
			value: worldAvg,
			valueColor: { color: "black" },
			progress: worldAvg / 1000,
			progressColor: Colors.blue200,
		},
	];
	return quantityData;
};
