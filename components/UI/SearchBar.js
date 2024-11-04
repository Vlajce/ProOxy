import { View, Text, TextInput, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { Colors } from "../../constants/Colors";

function SearchBar({ label, textInputConfig, icon, inputStyle, textStyle }) {
	return (
		<View style={inputStyle}>
			{label && <Text style={styles.labelStyle}>{label}</Text>}
			<View style={styles.inputWrapper}>
				<TextInput
					style={[styles.input, textStyle]}
					{...textInputConfig}
				/>
				{icon && (
					<Feather
						name={icon}
						size={25}
						color={Colors.gray200}
						style={{ marginLeft: "auto" }}
					/>
				)}
			</View>
		</View>
	);
}

export default SearchBar;

const styles = StyleSheet.create({
	inputWrapper: {
		height: 60,
		position: "relative",
		backgroundColor: Colors.gray50,
		borderRadius: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 16,
		paddingVertical: 14,
	},
	labelStyle: {
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
		color: Colors.gray100,
	},
	input: {
		flex: 1,
		color: Colors.gray200,
		fontSize: 16,
	},
});
