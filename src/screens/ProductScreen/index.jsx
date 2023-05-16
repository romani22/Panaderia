import { View, Text, Button } from 'react-native';
import React from 'react';

const ProductScreen = ({ navigation, route }) => {
	return (
		<View>
			<Text>{route.params.name}</Text>
			<Button title="Home" onPress={() => navigation.navigate('Home')} />
			<Button title="Details" onPress={() => navigation.navigate('Details')} />
		</View>
	);
};

export default ProductScreen;
