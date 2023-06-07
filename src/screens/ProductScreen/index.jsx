import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
// import { PRODUCTS } from '../../data/products.js';
import ProductsItem from '../../components/ProductsItem';
import styles from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { filteredProduct, selectedProduct } from '../../store/actions/products.action';
const ProductScreen = ({ navigation, route }) => {
	const filteredProducts = useSelector((state) => state.products.filteredProduct);

	const categorySelected = useSelector((state) => state.categories.selected);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(filteredProduct(categorySelected.id));
	}, []);

	// const breads = PRODUCTS.filter((bread) => bread.category === route.params.categoryId);

	const handleSelectedProduct = (item) => {
		dispatch(selectedProduct(item.id));
		navigation.navigate('Details', {
			name: item.name,
		});
	};
	const renderProductItem = ({ item }) => (
		<View style={styles.itemContainer}>
			<ProductsItem item={item} onSelected={handleSelectedProduct} />
		</View>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={filteredProducts}
				renderItem={renderProductItem}
				keyExtractor={(item) => item.id}
				numColumns={2}
			/>
		</View>
	);
};

export default ProductScreen;
