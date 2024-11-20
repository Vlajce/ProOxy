import React, { useEffect, useRef } from "react";
import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	Image,
} from "react-native";
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
import CustomBottomSheetModal from "../../components/UI/CustomBottomSheetModal";
import OffsetModal from "../../components/MainScreen/MyImpact/OffsetModal";

{
	/*  ZAPOCETO DODAVANJE MODALA MEDJUTIM NIJE DOVRSENO!!!!*/
}
function MyImpact({ navigation }) {
	const { height, width } = useWindowDimensions();
	const { updateStatusBarColor } = useStatusBar();

	const bottomSheetRef = useRef(null);
	const bottomSheetModalRef = useRef(null);

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
	}, [navigation, updateStatusBarColor]);

	useEffect(() => {
		const handleFocus = () => {
			bottomSheetModalRef.current?.dismiss();
		};

		const subscribeFocus = navigation.addListener("focus", handleFocus);

		return () => {
			subscribeFocus();
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
					snapPoints={["50%", "75%"]}
					enableOverDrag={false}
					enablePanDownToClose={false}
					expandOnContentDrag={false}
					topInset={70}
					bottomSheetBody={() => (
						<ScrollView
							bounces={false}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={{ paddingBottom: 50 }}>
							<GradientButton
								onPress={() => bottomSheetModalRef.current?.present()}
								style={{
									marginBottom: 52,
									marginHorizontal: 30,
								}}>
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
							<View style={styles.imageContainer}>
								<Image
									source={require("../../assets/images/proxy-card.png")}
									style={styles.image}
								/>
							</View>
							<Text
								style={{
									fontSize: 14,
									alignSelf: "center",
									marginBottom: 20,
								}}>
								That's equivalent to:
							</Text>
							<View style={styles.imageContainer}>
								<Image
									source={require("../../assets/images/trees-planted.png")}
									style={[styles.image, { height: 260, borderRadius: 45 }]}
								/>
							</View>
						</ScrollView>
					)}
				/>
			</View>
			<CustomBottomSheetModal
				modalRef={bottomSheetModalRef}
				modalBody={
					<OffsetModal
						onCancel={() => bottomSheetModalRef.current?.dismiss()}
					/>
				}
				points={["80%"]}
				index={1}
				enablePanDownToClose={false}
				enableOverDrag={false}
				enableContentPanningGesture={false}
				enableHandlePanningGesture={false}
			/>
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
	imageContainer: {
		paddingHorizontal: 20,
		marginBottom: 36,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: "100%",
		resizeMode: "cover",
		borderRadius: 30,
	},
});
