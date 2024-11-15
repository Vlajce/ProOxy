import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import IconButton from "../../../components/UI/IconButton";
import { Colors } from "../../../constants/Colors";
import OtherCard from "../../../components/MainScreen/Profile/OtherCard";
import { proxyData, offsetsData } from "../../../dummy_data/Profile/FAQData";

function FrequentlyAskedQuestions({ navigation }) {
	const { height, width } = useWindowDimensions();

	const isLandscape = width > height;

	return (
		<View
			style={{
				paddingTop: isLandscape ? height * 0.1 : height * 0.08,
				paddingHorizontal: isLandscape ? width * 0.1 : width * 0.07,
			}}>
			<IconButton
				icon="close-circle"
				size={40}
				color={Colors.gray70}
				onPress={() => navigation.goBack()}
			/>
			<Text style={styles.title}>Frequently asked questions</Text>
			<Text style={styles.section}>About ProOxy</Text>
			{proxyData.map((item, index) => (
				<OtherCard
					key={index}
					text={item.text}
					onClick={() => console.log("kliknuto na dugme")} //navigation.navigate(item.screen)}
					rightIcon={item.rightIcon}
					style={{ paddingHorizontal: 28 }}
				/>
			))}
			<Text style={styles.section}>About offsets</Text>
			{offsetsData.map((item, index) => (
				<OtherCard
					key={index}
					text={item.text}
					onClick={() => console.log("kliknuto na dugme")} //navigation.navigate(item.screen)}
					rightIcon={item.rightIcon}
					style={{ paddingHorizontal: 28 }}
				/>
			))}
		</View>
	);
}

export default FrequentlyAskedQuestions;

const styles = StyleSheet.create({
	title: {
		fontWeight: "600",
		fontSize: 26,
		marginTop: 20,
		alignSelf: "center",
		textAlign: "center",
	},
	section: {
		fontWeight: "700",
		fontSize: 20,
		marginTop: 26,
		marginBottom: 20,
	},
});
