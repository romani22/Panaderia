import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		borderStartColor: 'gray',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		marginBottom: 10,
	},
	container: {
		width: '80%',
		maxWidth: 400,
		backgroundColor: 'white',
		height: '50%',
		padding: 12,
	},
	footer: {
		marginTop: 42,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

export default styles;
