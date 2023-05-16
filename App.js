import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ShopNavigator from './src/navgation/ShopNavigator';

export default function App() {
	// const [isPortrait, setIsPortrait] = useState(true);
	// const statePortrait = () => setIsPortrait(onPortrait);

	// //con esta funcion podemos saber si la vista es horizontal o vertical
	// const onPortrait = () => {
	// 	const dim = Dimensions.get('screen');
	// 	return dim.height > dim.width;
	// };
	// useEffect(() => {
	// 	Dimensions.addEventListener('change', statePortrait);
	// 	return () => {
	// 		Dimensions.removeEventListener('change', statePortrait);
	// 	};
	// }, []);
	const [loaded] = useFonts({
		AntonRegular: require('./src/assets/font/Anton-Regular.ttf'),
	});

	if (!loaded) return null;

	return (
		<ShopNavigator />
		// ---------------------EJEMPLO DE CAMBIO DE ORIENTACION DE PANTALLA
		// <View style={styles.container}>
		// 	{isPortrait ? <Text style={styles.texto}>VERTICAL</Text> : <Text style={styles.texto}>HORIZONTAL</Text>}
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	texto: {
		fontFamily: 'AntonRegular',
		fontSize: 25,
	},
});
