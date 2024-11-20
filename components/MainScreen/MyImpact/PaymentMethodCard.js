import React from "react";
import { View, Text, StyleSheet } from "react-native";

function PaymentMethodCard({ iconComponent, iconStyle }) {
	return (
		<View style={styles.container}>
			{iconComponent && <View style={iconStyle}>{iconComponent}</View>}
		</View>
	);
}

export default PaymentMethodCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
