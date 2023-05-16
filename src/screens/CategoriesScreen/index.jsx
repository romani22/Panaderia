import { View, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../../data/categories';
import CategoriesItem from '../../components/CategoriesItem';
import styles from './styles';

const CategoriesScreen = ({ navigation }) => {
	const handleSelectedCategory = (item) => {
		navigation.navigate('Product', {
			categoryId: item.id,
			name: item.title,
		});
	};

	const rendeerCategoriesItem = ({ item }) => (
		<View style={styles.categoriesContainer}>
			<CategoriesItem item={item} onSelected={handleSelectedCategory} />
		</View>
	);

	return (
		<View style={styles.container}>
			<FlatList data={CATEGORIES} renderItem={rendeerCategoriesItem} keyExtractor={(item) => item.id} />
		</View>
	);
};

export default CategoriesScreen;
