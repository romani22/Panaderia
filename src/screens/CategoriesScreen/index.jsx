import { View, FlatList } from 'react-native';
import React from 'react';
// import { CATEGORIES } from '../../data/categories';
import CategoriesItem from '../../components/CategoriesItem';
import styles from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { selectedCategory } from '../../store/actions/category.action';

const CategoriesScreen = ({ navigation }) => {
	const categoriesnew = useSelector((state) => state.categories.categories);
	const dispatch = useDispatch();

	const handleSelectedCategory = (item) => {
		dispatch(selectedCategory(item.id));
		navigation.navigate('Products', {
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
			<FlatList
				data={categoriesnew}
				renderItem={rendeerCategoriesItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default CategoriesScreen;
