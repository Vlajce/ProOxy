import React, { createContext, useState, useContext, useCallback } from "react";

const StatusBarContext = createContext({
	statusBarColor: "dark-content",
	updateStatusBarColor: () => {},
});

export const StatusBarProvider = ({ children }) => {
	const [statusBarColor, setStatusBarColor] = useState("dark-content");

	const updateStatusBarColor = useCallback(
		(color) => setStatusBarColor(color),
		[]
	);

	return (
		<StatusBarContext.Provider value={{ statusBarColor, updateStatusBarColor }}>
			{children}
		</StatusBarContext.Provider>
	);
};

export const useStatusBar = () => {
	const context = useContext(StatusBarContext);
	if (!context) {
		throw new Error("useStatusBar must be used within a StatusBarProvider");
	}
	return context;
};
