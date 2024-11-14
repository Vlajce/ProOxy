import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, StyleSheet, Animated, Dimensions } from "react-native";

import ProjectCard from "./Projects/ProjectCard";
import { Colors } from "../../constants/Colors";

const { width } = Dimensions.get("window");

function Carousel({ data, horizontal }) {
	const navigation = useNavigation();
	const scrollX = useRef(new Animated.Value(0)).current;
	const [activeIndex, setActiveIndex] = useState(0);

	const handleScroll = (event) => {
		const index = Math.round(event.nativeEvent.contentOffset.x / (width / 1.5));
		setActiveIndex(index);
	};

	const renderItem = ({ item }) => (
		<ProjectCard
			imageUrl={item.imageUrl}
			title={item.title}
			style={{ width: 220, height: 300, flex: 0 }}
			onPress={() =>
				navigation.navigate("ProjectDetails", {
					project: item,
				})
			}
		/>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				horizontal={horizontal}
				//pagingEnabled
				showsHorizontalScrollIndicator={false}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false, listener: handleScroll }
				)}
				renderItem={renderItem}
				keyExtractor={(item) => item.title}
				contentContainerStyle={{ paddingLeft: 24 }}
			/>
			<View style={styles.indicatorContainer}>
				{data.map((_, index) => {
					const size = scrollX.interpolate({
						inputRange: [
							((index - 1) * width) / 2,
							(index * width) / 2,
							((index + 1) * width) / 2,
						],
						outputRange: [8, 16, 8],
						extrapolate: "clamp",
					});

					return (
						<Animated.View
							key={index}
							style={[styles.dot, { width: size, height: 8 }]}
						/>
					);
				})}
			</View>
		</View>
	);
}

export default Carousel;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	indicatorContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 6,
		marginBottom: 26,
	},
	dot: {
		height: 8,
		borderRadius: 4,
		backgroundColor: Colors.blue200,
		marginHorizontal: 4,
	},
});
