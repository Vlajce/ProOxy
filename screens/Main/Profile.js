import React, { useRef } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { Colors } from "../../constants/Colors";
import BottomSheetPopup from "../../components/UI/BottomSheetPopup";
import SettingsCard from "../../components/MainScreen/Profile/SettingsCard";
import OtherCard from "../../components/MainScreen/Profile/OtherCard";
import { settingData } from "../../dummy_data/Profile/SettingsData";
import { otherData } from "../../dummy_data/Profile/OtherData";

function Profile() {
	const { width, height } = useWindowDimensions();

	const bottomSheetRef = useRef(null);

	const isLandscape = width > height;

	return (
		<>
			<StatusBar style="light" />
			<View
				style={{
					flex: 1,
					backgroundColor: Colors.primary200,
					paddingTop: isLandscape ? height * 0.1 : height * 0.1,
					paddingHorizontal: isLandscape ? width * 0.1 : width * 0.1,
				}}>
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
									onClick={() => console.log("Kliknuto na other karticu")}
									rightIcon={item.rightIcon}
								/>
							))}
							{/* </View> */}
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
