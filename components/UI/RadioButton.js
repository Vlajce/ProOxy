import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Colors } from "../../constants/Colors";

function RadioButton({ selected, contStyle, style }) {
	return (
		<View style={[styles.container, contStyle]}>
			{selected ? (
				<Ionicons
					name="checkmark-circle"
					size={26}
					color={Colors.primary100}
				/>
			) : (
				<View style={[styles.emptyCircle, style]}></View>
			)}
		</View>
	);
}

export default RadioButton;

const styles = StyleSheet.create({
	container: {
		width: 26,
		height: 26,
		justifyContent: "center",
		alignItems: "center",
	},
	emptyCircle: {
		width: 22,
		height: 22,
		borderColor: Colors.gray50,
		borderWidth: 1,
		borderRadius: 12,
	},
});
