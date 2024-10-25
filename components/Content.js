import { View, StyleSheet } from "react-native";

//nigde se ne koristi, tu je za future improvement

function Content({
	children,
	paddingTop,
	paddingBottom,
	paddingVertical,
	paddingHorizontal,
}) {
	return (
		<View
			style={[
				styles.container,
				{ paddingTop, paddingBottom, paddingVertical, paddingHorizontal },
			]}>
			{children}
		</View>
	);
}

export default Content;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
