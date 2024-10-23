import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const StaticProgressBar = ({ progress }) => {
	return (
		<View style={styles.container}>
			<View style={[styles.filled, { width: `${progress * 100}%` }]} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 8,
		width: "40%",
		backgroundColor: Colors.gray50,
		borderRadius: 5,
		overflow: "hidden",
	},
	filled: {
		height: "100%",
		backgroundColor: Colors.primary100,
		borderRadius: 5,
	},
});

export default StaticProgressBar;
