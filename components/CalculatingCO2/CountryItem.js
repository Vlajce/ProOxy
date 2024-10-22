import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Colors } from "../../constants/Colors";

function CountryItem({ name, flag, onPress }) {
	return (
		<Pressable
			style={({ pressed }) => pressed && styles.itemPressed}
			android_ripple={{ color: Colors.gray50 }}
			onPress={onPress}>
			<View style={styles.container}>
				<Image
					style={styles.flag}
					source={{ uri: flag }}
				/>
				<Text style={styles.countryName}>{name}</Text>
			</View>
		</Pressable>
	);
}

export default CountryItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		borderTopWidth: 1,
		borderColor: Colors.gray50,
		paddingVertical: 14,
	},
	itemPressed: {
		opacity: 0.5,
	},
	flag: {
		width: 30,
		height: 30,
		borderRadius: 24,
		marginRight: 20,
	},
	countryName: {
		fontWeight: "500",
	},
});
