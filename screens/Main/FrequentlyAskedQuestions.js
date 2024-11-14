import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";
import OtherCard from "../../components/MainScreen/Profile/OtherCard";

function FrequentlyAskedQuestions() {
	const { height, width } = useWindowDimensions();

	const isLandscape = width > height;

	return (
		<View
			style={{
				paddingTop: isLandscape ? height * 0.1 : height * 0.08,
				paddingHorizontal: isLandscape ? width * 0.1 : width * 0.07,
				flex: 1,
			}}>
			<IconButton
				icon="close-circle"
				size={40}
				color={Colors.gray70}
			/>
			<Text style={{ fontWeight: "600", fontSize: 25, marginTop: 26 }}>
				Frequently Asked Questions
			</Text>
			<OtherCard
				key={index}
				text={item.text}
				IconComponent={item.icon}
				iconStyle={{ marginRight: 20 }}
				onClick={
					item.rightIcon
						? () => navigation.navigate("FrequentlyAskedQuestions") //console.log("Kliknuto na karticu")
						: () => navigation.navigate("LogIn")
				}
				rightIcon={item.rightIcon}
			/>
		</View>
	);
}

export default FrequentlyAskedQuestions;

const styles = StyleSheet.create({});
