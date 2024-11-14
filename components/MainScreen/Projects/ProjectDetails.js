import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	useWindowDimensions,
	ScrollView,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { Colors } from "../../../constants/Colors";
import { useStatusBar } from "../../../hooks/useStatusBar";
import IconButton from "../../../components/UI/IconButton";
import CustomButton from "../../UI/CustomButton";
import CategoryTag from "./CategoryTag";
import ProjectBottomSection from "./ProjectBottomSection";

function ProjectDetails({ route, navigation, imageStyle }) {
	const { width, height } = useWindowDimensions();
	const { project } = route.params || {};
	const { updateStatusBarColor } = useStatusBar();

	useEffect(() => {
		updateStatusBarColor("light-content");
	}, []);

	if (!project) {
		return (
			<View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
				<Text>Project data is missing</Text>
			</View>
		);
	}

	const isLandscape = width > height;

	return (
		<ScrollView
			bounces={false}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 75 }}
			style={{
				flex: 1,
			}}>
			<ImageBackground
				source={{
					uri: project.imageUrl,
				}}
				resizeMode="cover"
				style={[
					styles.image,
					imageStyle,
					{
						paddingTop: isLandscape ? height * 0.15 : height * 0.07,
						// paddingHorizontal: isLandscape ? width * 0.1 : width * 0.07,
					},
				]}>
				<IconButton
					icon="chevron-back-circle"
					size={36}
					color={Colors.gray10}
					onPress={() => navigation.goBack()}
				/>
				<View>
					<CustomButton
						style={styles.button}
						textStyle={{ color: "white", fontWeight: "bold" }}>
						WaldSchutz
					</CustomButton>
					<Text style={styles.title}>{project.title}</Text>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<FontAwesome6
							name="location-dot"
							size={24}
							color="white"
						/>
						<Text style={styles.location}>{project.location}</Text>
					</View>
				</View>
			</ImageBackground>
			<View
				style={{
					paddingHorizontal: 32,
					paddingVertical: 24,
					backgroundColor: Colors.gray10,
				}}>
				<Text style={styles.label}>Projektkosten</Text>
				<Text style={[styles.detail, { fontWeight: "600", fontSize: 26 }]}>
					{project.price}
				</Text>
				<Text style={[styles.label, { marginBottom: 8 }]}>Zertifizierung</Text>
				<Text style={styles.detail}>{project.certification}</Text>
				<Text style={[styles.label, { marginBottom: 8 }]}>Projekt Benefit</Text>
				<Text style={styles.detail}>{project.projectBenefit}</Text>
				<View style={styles.divider}></View>
				<Text style={{ fontSize: 22, fontWeight: "600" }}>Kategorien</Text>
				<View style={styles.categories}>
					{project.categories.map((item, index) => (
						<CategoryTag key={index}>{item}</CategoryTag>
					))}
				</View>
			</View>
			<ProjectBottomSection />
		</ScrollView>
	);
}

export default ProjectDetails;

const styles = StyleSheet.create({
	image: {
		height: 320,
		padding: 16,
		justifyContent: "space-between",
		paddingHorizontal: 32,
		// paddingTop: 64,
	},
	button: {
		width: 110,
		height: 32,
		backgroundColor: Colors.primary50,
		marginBottom: 12,
		paddingHorizontal: 0,
		paddingVertical: 0,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		marginBottom: 12,
	},
	location: {
		marginLeft: 12,
		color: "white",
		fontWeight: "500",
		fontSize: 15,
	},
	label: {
		color: Colors.gray70,
		fontWeight: "bold",
		fontSize: 13,
		marginBottom: 6,
	},
	detail: {
		fontWeight: "bold",
		fontSize: 15,
		marginBottom: 20,
	},
	divider: {
		width: "100%",
		height: 1,
		backgroundColor: Colors.gray50,
		marginBottom: 24,
	},
	categories: {
		flexDirection: "row",
		flexWrap: "wrap",
		paddingTop: 12,
	},
});
