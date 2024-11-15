import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";

import { projectsData } from "../../dummy_data/MyImpact/ProjectsData";
import ProjectCard from "../../components/MainScreen/Projects/ProjectCard";
import { useStatusBar } from "../../hooks/useStatusBar";

function Projects({ navigation }) {
	const { updateStatusBarColor, statusBarColor } = useStatusBar();

	console.log("Projects: ", statusBarColor);

	useEffect(() => {
		const subscribeFocus = navigation.addListener("focus", () => {
			updateStatusBarColor("dark-content");
		});

		const subscribeBlur = navigation.addListener("blur", () => {
			updateStatusBarColor("light-content");
		});

		return () => {
			subscribeFocus();
			subscribeBlur();
		};
	}, [navigation, updateStatusBarColor]);

	const renderItem = ({ item }) => (
		<ProjectCard
			title={item.title}
			imageUrl={item.imageUrl}
			style={{ marginRight: 0, height: 180 }}
			onPress={() =>
				navigation.navigate("ProjectDetails", {
					project: item,
				})
			}
		/>
	);

	return (
		<>
			<View style={styles.container}>
				<Text
					style={{ fontWeight: "600", fontSize: 30, alignSelf: "flex-start" }}>
					Projects
				</Text>
				<Text style={styles.info}>
					Lorem Ipsum is simply dummy text of printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since
					1500s
				</Text>
			</View>
			<View style={styles.listContainer}>
				<FlatList
					data={projectsData}
					keyExtractor={(item) => item.title}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 200 }}
				/>
			</View>
		</>
	);
}

export default Projects;

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		paddingTop: height * 0.1,
		paddingHorizontal: width * 0.08,
		backgroundColor: "white",
	},
	info: {
		marginTop: 24,
		marginBottom: 10,
		textAlign: "left",
		lineHeight: 22,
	},
	listContainer: {
		backgroundColor: "white",
		padding: 24,
	},
});
