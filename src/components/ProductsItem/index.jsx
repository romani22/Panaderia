import { View, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const ProductsItem = ({ item, onSelected }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => onSelected(item)}>
				<View style={styles.imageContainter}>
					<Image
						style={styles.image}
						source={{
							uri: 'https://www.informador.mx/__export/1659480883118/sites/elinformador/img/2022/08/02/pan_crop1659480086233.png_554688468.png',
						}}
					/>
				</View>
				<View style={styles.textContainer}>
					<Text>{item.name}</Text>
					<Text>{item.description}</Text>
					<Text>${item.price}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ProductsItem;
