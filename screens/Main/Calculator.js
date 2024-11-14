import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	useWindowDimensions,
	SafeAreaView,
} from "react-native";

import { Colors } from "../../constants/Colors";
import FootprintCard from "../../components/MainScreen/FootprintCard";
import EntryCard from "../../components/MainScreen/EntryCard";
import { footprintData } from "../../dummy_data/MainScreen/FootPrintData";
import { entryData } from "../../dummy_data/MainScreen/EntryData";
import { useStatusBar } from "../../hooks/useStatusBar";

function Calculator() {
	const { width, height } = useWindowDimensions();
	const { updateStatusBarColor } = useStatusBar();

	useEffect(() => {
		updateStatusBarColor("dark-content");
	}, []);

	const isLandscape = width > height;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<ScrollView
				bounces={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 180 }}
				style={{
					flexGrow: 1,
					paddingTop: isLandscape ? height * 0.1 : height * 0.04,
					paddingHorizontal: isLandscape ? width * 0.1 : width * 0.09,
				}}>
				<Text style={{ fontWeight: "600", fontSize: 28 }}>Calculator</Text>
				<Text
					style={{
						marginTop: 2,
						fontSize: 16,
						color: Colors.gray500,
						fontWeight: "semi-bold",
					}}>
					Here is your average carbon footprint
				</Text>
				<View style={styles.upperContainer}>
					{footprintData.map((item, index) => (
						<FootprintCard
							key={index}
							percentage={item.percentage}
							title={item.title}
						/>
					))}
				</View>
				<Text style={{ fontWeight: "bold", fontSize: 18, marginVertical: 20 }}>
					Personalize your entries
				</Text>
				<View style={styles.lowerContainer}>
					{entryData.map((item, index) => (
						<EntryCard
							key={index}
							text={item.text}
							value={item.value}
							IconComponent={item.icon}
						/>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Calculator;

const styles = StyleSheet.create({
	upperContainer: {
		height: "35%",
		flexDirection: "row",
		marginTop: 2,
	},
	lowerContainer: {},
});
