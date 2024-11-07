import React, { useEffect } from "react";
import { StatusBar as StatusBarNative } from "react-native";
import { useStatusBar } from "../hooks/useStatusBar";

export default function StatusBar() {
	const { statusBarColor } = useStatusBar();

	useEffect(() => {
		StatusBarNative.setBarStyle(statusBarColor);
	}, [statusBarColor]);

	return (
		<>
			<StatusBarNative
				barStyle={statusBarColor === "dark" ? "light-content" : "dark-content"}
			/>
		</>
	);
}
