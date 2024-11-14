import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import { Colors } from "../../constants/Colors";
import { useStatusBar } from "../../hooks/useStatusBar";
import CO2Card from "../../components/MainScreen/C02Card";
import BottomSheetPopup from "../../components/UI/BottomSheetPopup";
import GradientButton from "../../components/UI/GradientButton";
import CustomButton from "../../components/UI/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "../../components/MainScreen/Carousel";
import { projectsData } from "../../dummy_data/MyImpact/ProjectsData";

function MyImpact({ navigation }) {
	const { height, width } = useWindowDimensions();
	const { updateStatusBarColor } = useStatusBar();
	const bottomSheetRef = useRef(null);

	useEffect(() => {
		const subscribeFocus = navigation.addListener("focus", () => {
			updateStatusBarColor("light-content");
		});

		const subscribeBlur = navigation.addListener("blur", () => {
			updateStatusBarColor("dark-content");
		});

		return () => {
			subscribeFocus();
			subscribeBlur();
		};
	}, [navigation]);

	const isLandscape = width > height;

	return (
		<>
			<View
				style={[
					styles.container,
					{
						paddingHorizontal: isLandscape ? width * 0.1 : width * 0.1,
						paddingTop: isLandscape ? height * 0.1 : height * 0.1,
					},
				]}>
				<View style={{ marginBottom: 24 }}>
					<View>
						<Text style={{ color: "white", fontSize: 32, fontWeight: "600" }}>
							Hello Philipp
						</Text>
					</View>
					<Text style={{ color: "white", fontSize: 16, marginTop: 2 }}>
						Here us your carbon footprint
					</Text>
				</View>
				<CO2Card
					IconComponent={Entypo}
					iconProps={{
						name: "emoji-sad",
						size: 36,
						color: Colors.red200,
					}}
					style={{
						padding: 16,
						marginTop: 14,
						width: 200,
						height: 80,
						alignSelf: "center",
					}}
					iconStyle={{ padding: 8, marginRight: 8 }}
					value={708}
					size="large"
				/>
				<BottomSheetPopup
					bottomSheetRef={bottomSheetRef}
					snapPoints={["50%", "75%", "80%"]}
					bottomSheetBody={() => (
						// <ScrollView
						// 	bounces={false}
						// 	showsVerticalScrollIndicator={false}
						// 	contentContainerStyle={{ paddingBottom: 180 }}>
						<View>
							<GradientButton
								onPress={() => console.log("kliknuto dugme")}
								style={{ marginBottom: 52, paddingHorizontal: 30 }}>
								Offset my CO2
							</GradientButton>
							<View style={styles.titleCont}>
								<Text style={{ fontWeight: "bold", fontSize: 24 }}>
									Our projects
								</Text>
								<CustomButton
									onPress={() => navigation.navigate("Projects")}
									style={styles.button}
									textStyle={{
										color: Colors.blue200,
										fontWeight: "bold",
										fontSize: 14,
									}}>
									View all
								</CustomButton>
							</View>
							<Carousel
								data={projectsData}
								horizontal={true}
							/>
							<View style={styles.titleCont}>
								<Text style={{ fontWeight: "bold", fontSize: 24 }}>
									Certificate
								</Text>
								<CustomButton
									onPress={() => console.log("Kliknuto na Share")}
									style={styles.button}
									textStyle={{
										color: Colors.blue200,
										fontWeight: "bold",
										fontSize: 14,
									}}>
									Share
								</CustomButton>
							</View>
							{/* OVDE TREBA DA SE DODAJU SLIKE KARTICA */}
						</View>
					)}
				/>
			</View>
		</>
	);
}

export default MyImpact;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.blue200,
	},
	titleCont: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
		paddingHorizontal: 30,
	},
	projectsContainer: {
		width: "100%",
		height: 200,
		marginTop: 16,
		marginBottom: 36,
		backgroundColor: Colors.gray100,
	},
	button: {
		paddingHorizontal: 15,
		backgroundColor: Colors.gray10,
	},
});
