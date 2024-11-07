import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import Entypo from "@expo/vector-icons/Entypo";

import { useStatusBar } from "../../hooks/useStatusBar";
import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";
import CO2Card from "../../components/MainScreen/C02Card";
import QuantityCard from "../../components/MainScreen/QuantityCard";
import GradientButton from "../../components/UI/GradientButton";
import FootprintCard from "../../components/MainScreen/FootprintCard";
import EntryCard from "../../components/MainScreen/EntryCard";
import { entryData } from "../../dummy_data/MainScreen/EntryData";
import { getQuantityData } from "../../dummy_data/MainScreen/QuantityData";
import { footprintData } from "../../dummy_data/MainScreen/FootPrintData";
import BottomSheetPopup from "../../components/UI/BottomSheetPopup";

function CurrentCO2({ navigation, route }) {
	const { width, height } = useWindowDimensions();
	const bottomSheetRef = useRef(null);
	const { country, worldAvg } = route.params;
	const { updateStatusBarColor } = useStatusBar();

	useEffect(() => {
		updateStatusBarColor("dark-content");
		return () => updateStatusBarColor("light-content");
	}, []);

	const isLandscape = width > height;

	return (
		<View style={{ flex: 1, backgroundColor: "#ebebeb" }}>
			<StatusBar />
			<View
				style={{
					marginBottom: 36,
					paddingTop: isLandscape ? height * 0.1 : height * 0.085,
					paddingHorizontal: isLandscape ? width * 0.1 : width * 0.1,
				}}>
				<IconButton
					icon="chevron-back-circle"
					size={40}
					color={Colors.gray100}
					onPress={() => navigation.goBack()}
				/>
			</View>
			<View
				style={{
					flex: 1,
					paddingHorizontal: isLandscape ? width * 0.08 : width * 0.08,
				}}>
				<View style={styles.infoSection}>
					<Text style={styles.infoText}>Your current CO2</Text>
					<CO2Card
						IconComponent={Entypo}
						iconProps={{
							name: "emoji-sad",
							size: 28,
							color: Colors.red200,
						}}
						style={{ padding: 12, marginTop: 14 }}
						iconStyle={{ padding: 8, marginRight: 8 }}
						value={708}
					/>
				</View>
				{getQuantityData(country, worldAvg).map((item, index) => (
					<QuantityCard
						key={index}
						text={item.text}
						IconComponent={item.icon}
						value={item.value}
						valueColor={item.valueColor}
						progress={item.progress}
						progressColor={item.progressColor}
					/>
				))}

				<GradientButton
					style={{ width: "65%", alignSelf: "center" }}
					onPress={() => navigation.navigate("CreateAccount")}>
					Offset my CO2
				</GradientButton>
			</View>
			<BottomSheetPopup
				bottomSheetRef={bottomSheetRef}
				snapPoints={["20%", "85%"]}
				bottomSheetBody={() => (
					<>
						<Text style={styles.bottomSheetText}>
							Understand your footprint
						</Text>
						<View style={styles.bottomSheetUpperCont}>
							{footprintData.map((item, index) => (
								<FootprintCard
									key={index}
									percentage={item.percentage}
									title={item.title}
								/>
							))}
						</View>
						<Text style={styles.bottomSheetText}>Personalize your entries</Text>
						<View style={{ height: "30%" }}>
							{entryData.map((item, index) => (
								<EntryCard
									key={index}
									text={item.text}
									IconComponent={item.icon}
									value={item.value}
								/>
							))}
						</View>
					</>
				)}
			/>
		</View>
	);
}

export default CurrentCO2;

const styles = StyleSheet.create({
	infoSection: {
		justifyContent: "center",
		alignItems: "center",
		height: 160,
		backgroundColor: Colors.gray50,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 30,
		marginBottom: 30,
	},
	infoText: {
		textAlign: "center",
		fontWeight: "500",
		fontSize: 16,
	},
	bottomSheetText: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 12,
	},
	bottomSheetUpperCont: {
		height: "35%",
		flexDirection: "row",
		marginBottom: 10,
	},
});
