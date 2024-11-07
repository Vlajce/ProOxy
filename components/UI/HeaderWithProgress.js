import { View, StyleSheet } from "react-native";

import IconButton from "./IconButton";
import StaticProgressBar from "./StaticProgressBar";

function HeaderWithProgress({
	style,
	icon,
	size,
	color,
	onIconPress,
	isLandscape,
	progress,
}) {
	return (
		<View style={[styles.headerCont, style]}>
			<IconButton
				icon={icon}
				size={size}
				color={color}
				onPress={onIconPress}></IconButton>
			<View
				style={[
					styles.progressBarContainer,
					{
						width: isLandscape ? 500 : 300,
						transform: [
							{ translateX: isLandscape ? -100 : -60 },
							{ translateY: -4 },
						],
					},
				]}>
				<StaticProgressBar progress={progress} />
			</View>
		</View>
	);
}

export default HeaderWithProgress;

const styles = StyleSheet.create({
	headerCont: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 40,
		justifyContent: "space-between",
	},
	progressBarContainer: {
		width: 300,
		position: "absolute",
		left: "50%",
		top: "50%",
	},
});
