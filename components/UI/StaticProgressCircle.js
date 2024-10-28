import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const StaticProgressCircle = ({ style, progress }) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.progressLayer}></View>
			<View style={styles.offsetLayer}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 70,
		width: 70,
		borderWidth: 4,
		borderRadius: 35,
		borderColor: Colors.gray200,
		marginLeft: -16,
		//overflow: "hidden",
		justifyContent: "center",
		alignItems: "center ",
	},
	progressLayer: {
		height: 70,
		width: 70,
		position: "absolute",
		marginLeft: -4,
		borderWidth: 4,
		borderRadius: 35,
		borderLeftColor: "transparent",
		borderBottomColor: "transparent",
		borderRightColor: "white",
		borderTopColor: "white",
		transform: [{ rotateZ: "-45deg" }],
	},
	offsetLayer: {
		height: 70,
		width: 70,
		borderWidth: 4,
		borderRadius: 35,
		marginLeft: -4,
		borderLeftColor: "transparent",
		borderBottomColor: "transparent",
		borderRightColor: Colors.gray200,
		borderTopColor: Colors.gray200,
		transform: [{ rotateZ: "-135deg" }],
	},
});

export default StaticProgressCircle;
