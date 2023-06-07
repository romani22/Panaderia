import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 10,
		padding: 20,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 5,
		elevation: 3,
		backgroundColor: 'white',
	},
	imageContainter: {
		height: '50%',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	textContainer: {
		height: '50%',
	},
});

export default styles;
