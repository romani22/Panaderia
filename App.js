import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import MainNavigator from './src/navgation';
import { Provider } from 'react-redux';
import store from './src/store';

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
		<Provider store={store}>
			<MainNavigator />
		</Provider>
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
