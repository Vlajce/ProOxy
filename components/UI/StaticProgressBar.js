import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const StaticProgressBar = ({ contStyle, filledColor, progress }) => {
	return (
		<View style={[styles.container, contStyle]}>
			<View
				style={[styles.filled, filledColor, { width: `${progress * 100}%` }]}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 8,
		width: "40%",
		backgroundColor: Colors.gray10,
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
