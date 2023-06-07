import { Text, TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import styles from './styles';

const formatDay = (date) => {
	const newDate = new Date(date);
	return newDate.toLocaleDateString();
};

const OrderItem = ({ item, date, onDelete }) => {
	console.log(item);
	return (
		<View style={styles.order}>
			<View>
				<Text style={styles.date}>{formatDay(date)}</Text>
				<Text style={styles.total}>Total: {item.price}</Text>
			</View>
			<View>
				<TouchableOpacity onPress={() => onDelete(item.id)}>
					<Ionicons name="md-trash" color={'red'} size={22} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default OrderItem;
