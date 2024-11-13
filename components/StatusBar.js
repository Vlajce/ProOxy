import React, { useEffect } from "react";
import { Platform, StatusBar as StatusBarNative } from "react-native";
import { useStatusBar } from "../hooks/useStatusBar";

export default function StatusBar() {
	const { statusBarColor } = useStatusBar();

	useEffect(() => {
		StatusBarNative.setBarStyle(statusBarColor);
		if (Platform.OS === "android") {
			StatusBarNative.setBackgroundColor(
				statusBarColor === "dark-content" ? "#fff" : "#000"
			);
		}
	}, [statusBarColor]);

	return (
		<>
			<StatusBarNative
				barStyle={statusBarColor === "dark" ? "light-content" : "dark-content"}
			/>
		</>
	);
}
