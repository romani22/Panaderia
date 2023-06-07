import { FlatList, StyleSheet, View } from 'react-native';

import { ORDERS } from '../../data/orders';
import OrderItem from '../../components/OrderItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../store/actions/orders.actions';

const OrdersScreen = () => {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.orders.list);
	console.log(orders);
	useEffect(() => {
		dispatch(getOrders());
	}, []);

	const handeleDeleteOrder = () => {
		console.log('Eliminar orden');
	};
	const renderOrderItem = ({ item }) => (
		<OrderItem item={item.items} date={item.date} onDelete={handeleDeleteOrder} />
	);

	return (
		<View>
			<FlatList data={orders} keyExtractor={(item) => item.id} renderItem={renderOrderItem} />
		</View>
	);
};

export default OrdersScreen;

const styles = StyleSheet.create({});
