import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Flying() {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Text>Flying</Text>
		</SafeAreaView>
	);
}

export default Flying;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
