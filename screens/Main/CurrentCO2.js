import React, { useMemo, useRef } from "react";
import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";
import CO2Card from "../../components/MainScreen/C02Card";
import QuantityCard from "../../components/MainScreen/QuantityCard";
import GradientButton from "../../components/UI/GradientButton";
import FootprintCard from "../../components/MainScreen/FootprintCard";
import EntryCard from "../../components/MainScreen/EntryCard";

function CurrentCO2({ navigation, route }) {
	const { width, height } = useWindowDimensions();
	const snapPoints = useMemo(() => ["20%", "85%"], []);

	const bottomSheetRef = useRef(null);

	const { country, worldAvg } = route.params;

	const isLandscape = width > height;

	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor: "#90bd0c" }}>
			<StatusBar />
			<View
				style={[
					{ marginBottom: 36 },
					{
						paddingTop: isLandscape ? height * 0.1 : height * 0.085,
						paddingHorizontal: isLandscape ? width * 0.1 : width * 0.1,
					},
				]}>
				<IconButton
					icon="chevron-back-circle"
					size={40}
					color={Colors.gray100}
					onPress={() => navigation.goBack()}
				/>
			</View>
			<View
				style={[
					{ flex: 1 },
					{
						paddingHorizontal: isLandscape ? width * 0.08 : width * 0.08,
					},
				]}>
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
				<QuantityCard
					text="You"
					IconComponent={
						<FontAwesome
							name="user-circle"
							size={28}
							color={Colors.blue500}
						/>
					}
					value={708}
					valueColor={{ color: Colors.red200 }}
					progress={1}
					progressColor={Colors.red200}
				/>
				<QuantityCard
					//ovde treba da se preko state-a prenese drzava
					text={"Avg " + country.name}
					IconComponent={
						<Image
							source={{ uri: country.imageUrl }}
							style={{
								width: 28,
								height: 28,
								borderRadius: 28,
								marginRight: -9,
							}}
						/>
					}
					iconStyle={{
						marginRight: 10,
						backgroundColor: "transparent",
					}}
					value={country.coConcentration}
					valueColor={{ color: "black" }}
					progress={country.coConcentration / 1000}
					progressColor={Colors.blue200}
				/>
				<QuantityCard
					text="Avg World"
					IconComponent={
						<Fontisto
							name="world"
							size={28}
							color={Colors.blue500}
						/>
					}
					value={worldAvg}
					valueColor={{ color: "black" }}
					progress={worldAvg / 1000}
					progressColor={Colors.blue200}
				/>
				<GradientButton
					style={{ width: "65%", alignSelf: "center" }}
					onPress={() => console.log("button pressed")}>
					Offset my CO2
				</GradientButton>
			</View>
			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={snapPoints}
				index={0}
				handleIndicatorStyle={{ backgroundColor: "#fff" }}>
				<BottomSheetView
					style={{
						paddingTop: 6,
						paddingHorizontal: 30,
					}}>
					<Text style={styles.bottomSheetText}>Understand your footprint</Text>
					<View style={styles.bottomSheetUpperCont}>
						<FootprintCard percentage={7}>Flying</FootprintCard>
						<FootprintCard percentage={52}>Mobility</FootprintCard>
						<FootprintCard percentage={28}>Food</FootprintCard>
						<FootprintCard percentage={13}>Housing</FootprintCard>
					</View>
					<Text style={styles.bottomSheetText}>Personalize your entries</Text>
					<View style={{ height: "30%" }}>
						<EntryCard
							text="Flying"
							IconComponent={
								<MaterialCommunityIcons
									name="airplane"
									size={20}
									style={{ marginRight: 4 }}
								/>
							}
							value={102}
						/>
						<EntryCard
							text="Mobility"
							IconComponent={
								<MaterialCommunityIcons
									name="airplane"
									size={20}
									style={{ marginRight: 4 }}
								/>
							}
							value={291}
						/>
						<EntryCard
							text="Food"
							IconComponent={
								<MaterialCommunityIcons
									name="airplane"
									size={20}
									style={{ marginRight: 4 }}
								/>
							}
							value={198}
						/>
						<EntryCard
							text="Housing"
							IconComponent={
								<MaterialCommunityIcons
									name="airplane"
									size={20}
									style={{ marginRight: 4 }}
								/>
							}
							value={117}
						/>
					</View>
				</BottomSheetView>
			</BottomSheet>
		</GestureHandlerRootView>
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
