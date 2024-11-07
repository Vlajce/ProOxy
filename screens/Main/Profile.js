import React, { useEffect, useRef } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	useWindowDimensions,
} from "react-native";

import { useStatusBar } from "../../hooks/useStatusBar";
import { Colors } from "../../constants/Colors";
import BottomSheetPopup from "../../components/UI/BottomSheetPopup";
import SettingsCard from "../../components/MainScreen/Profile/SettingsCard";
import OtherCard from "../../components/MainScreen/Profile/OtherCard";
import { settingData } from "../../dummy_data/Profile/SettingsData";
import { otherData } from "../../dummy_data/Profile/OtherData";

function Profile({ navigation }) {
	const { width, height } = useWindowDimensions();
	const bottomSheetRef = useRef(null);
	const { updateStatusBarColor } = useStatusBar();

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
				style={{
					flex: 1,
					backgroundColor: Colors.primary200,
					paddingTop: isLandscape ? height * 0.1 : height * 0.1,
					paddingHorizontal: isLandscape ? width * 0.1 : width * 0.1,
				}}>
				{/* <StatusBar style="light" /> */}
				<View style={{ flexDirection: "row" }}>
					<Text style={styles.welcomeText}>Hello Philipp</Text>
					<Image
						tintColor={"white"}
						style={styles.wavingHand}
						source={require("../../assets/images/waving-hand.png")}
					/>
				</View>
				<Text style={{ color: "white", fontSize: 16 }}>
					Here is your progile information
				</Text>
				<BottomSheetPopup
					bottomSheetRef={bottomSheetRef}
					snapPoints={["75%"]}
					bottomSheetBody={() => (
						<>
							<Text style={styles.bottomSheetText}>Settings</Text>
							{/* <View style={styles.bottomSheetUpperCont}> */}
							{settingData.map((item, index) => (
								<SettingsCard
									key={index}
									text={item.text}
									IconComponent={item.icon}
									iconStyle={{ marginRight: 20 }}
									onClick={() => console.log("Kliknuto edit dugme")}
								/>
							))}
							<Text style={styles.bottomSheetText}>Other</Text>
							{otherData.map((item, index) => (
								<OtherCard
									key={index}
									text={item.text}
									IconComponent={item.icon}
									iconStyle={{ marginRight: 20 }}
									onClick={
										item.rightIcon
											? () => console.log("Kliknuto na karticu")
											: () => navigation.navigate("LogIn")
									}
									rightIcon={item.rightIcon}
								/>
							))}
						</>
					)}
				/>
			</View>
		</>
	);
}

export default Profile;

const styles = StyleSheet.create({
	welcomeText: {
		color: "white",
		fontSize: 30,
		fontWeight: "500",
		marginBottom: 4,
	},
	wavingHand: {
		width: 30,
		height: 30,
		marginLeft: 6,
		alignSelf: "center",
	},
	bottomSheetText: {
		fontWeight: "bold",
		fontSize: 20,
		marginBottom: 12,
	},
});
