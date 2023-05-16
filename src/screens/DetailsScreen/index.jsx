import { View, Text, Button } from 'react-native';
import React from 'react';

const DetailsScreen = ({ navigation }) => {
	return (
		<View>
			<Button title="Home" onPress={() => navigation.navigate('Home')} />
			<Button title="Product" onPress={() => navigation.navigate('Product')} />
		</View>
	);
};

export default DetailsScreen;
