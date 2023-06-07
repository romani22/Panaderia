import { View, Text, Button } from 'react-native';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { add_item } from '../../store/actions/cart.actions';
import styles from './styles';

const DetailsScreen = ({ route }) => {
	const dispatch = useDispatch();
	const bread = useSelector((state) => state.products.selected);
	const handleAddItem = () => {
		console.log(bread);
		dispatch(add_item(bread));
	};
	return (
		<View style={styles.container}>
			<Text>{bread.name}</Text>
			<Text>{bread.description}</Text>
			<Text>${bread.price}</Text>
			<Button title="Add to cart" onPress={handleAddItem} />
		</View>
	);
};

export default DetailsScreen;
