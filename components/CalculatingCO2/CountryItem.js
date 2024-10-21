import { View, Text, StyleSheet } from "react-native";

function CountryItem({ children }) {
	return (
		<View>
			<Text>{children}</Text>
		</View>
	);
}

export default CountryItem;
