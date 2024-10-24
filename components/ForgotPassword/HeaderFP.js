import { View, StyleSheet } from "react-native";

import IconButton from "../UI/IconButton";
import StaticProgressBar from "../UI/StaticProgressBar";

function HeaderFP({
	style,
	icon,
	size,
	color,
	onIconPress,
	isLandscape,
	progress,
}) {
	const progressBarWidth = isLandscape ? 500 : 300;
	const translateX = isLandscape ? -100 : -60;
	const translateY = -4;

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
						width: progressBarWidth,
						transform: [{ translateX }, { translateY }],
					},
				]}>
				<StaticProgressBar progress={progress} />
			</View>
		</View>
	);
}

export default HeaderFP;

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
