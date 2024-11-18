import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";

import GradientButton from "../../UI/GradientButton";
import ProjectInfoSection from "./ProjectInfoSection";

function ProjectBottomSection({ onPress }) {
	return (
		<View
			style={{
				paddingHorizontal: 32,
				paddingVertical: 20,
			}}>
			<GradientButton
				onPress={onPress}
				style={{ marginBottom: 30 }}>
				Contribute for $2
			</GradientButton>
			<ProjectInfoSection
				IconComponent={Foundation}
				iconProps={{
					name: "trees",
					size: 30,
					color: "black",
				}}
				iconStyle={{ marginRight: 8, marginLeft: -2 }}
				itemIcon={false}
				label="Projekt Erklarung"
				text="Neki mnogo dugacak tekst koji se prelama kada predje odredjeni deo u vise redova se prenosi i treba da bude veci razmak izmedju redova kao sto je na dizajnu"
			/>
			<ProjectInfoSection
				IconComponent={AntDesign}
				iconProps={{
					name: "warning",
					size: 26,
					color: "black",
				}}
				iconStyle={{ marginRight: 8, marginLeft: -2 }}
				label="Problem"
				itemIcon={true}
				itemsText={[
					"Prva stavka teksta",
					"Druga stavka teksta",
					"Treca stavka teksta",
					"Cetvrta stavka teksta",
					"Peta stavka teksta",
				]}
			/>
			<ProjectInfoSection
				IconComponent={Fontisto}
				iconProps={{
					name: "lightbulb",
					size: 28,
					color: "black",
				}}
				iconStyle={{ marginRight: 8 }}
				itemIcon={false}
				label="Losung"
				text="Neki mnogo dugacak tekst koji se prelama kada predje odredjeni deo u vise redova se prenosi i treba da bude veci razmak izmedju redova kao sto je na dizajnu"
			/>
			<ProjectInfoSection
				IconComponent={Foundation}
				iconProps={{
					name: "target",
					size: 30,
					color: "black",
				}}
				iconStyle={{ marginRight: 8, marginLeft: -2 }}
				itemIcon={true}
				itemsText={[
					"Prva stavka teksta",
					"Druga stavka teksta",
					"Treca stavka teksta",
					"Cetvrta stavka teksta",
					"Peta stavka teksta",
				]}
				label="Ziel"
			/>
			<ProjectInfoSection
				IconComponent={Ionicons}
				iconProps={{
					name: "diamond-outline",
					size: 26,
					color: "black",
				}}
				iconStyle={{ marginRight: 8, marginLeft: -4 }}
				itemIcon={false}
				label="Mehrwert"
				text="Neki mnogo dugacak tekst koji se prelama kada predje odredjeni deo u vise redova se prenosi i treba da bude veci razmak izmedju redova kao sto je na dizajnu"
			/>
			<ProjectInfoSection
				IconComponent={AntDesign}
				iconProps={{
					name: "pushpino",
					size: 28,
					color: "black",
				}}
				iconStyle={{ marginRight: 8, marginLeft: -4 }}
				itemIcon={false}
				label="Lage"
				text="Serbien, Kopaonik"
			/>
			{/* OVDE TREBA MAPA DA SE DODA */}
			<GradientButton style={{ marginTop: 24 }}>
				Contribute for $2
			</GradientButton>
		</View>
	);
}

export default ProjectBottomSection;
