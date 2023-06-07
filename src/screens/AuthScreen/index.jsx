import { Alert, Button, KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { singUp } from '../../store/actions/auth.action';
import Input from '../../components/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
	if (action.type === FORM_INPUT_UPDATE) {
		const updatedValues = {
			...state.inputValues,
			[action.input]: action.value,
		};
		const updatedValidities = {
			...state.inputValidities,
			[action.input]: action.isValid,
		};
		let updatedFormIsValid = true;
		for (const key in updatedValidities) {
			updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
		}
		return {
			inputValues: updatedValues,
			inputValidities: updatedValidities,
			formIsValid: updatedFormIsValid,
		};
	}
	return state;
};

const AuthScreen = () => {
	const dispatch = useDispatch();
	const [error, setError] = useState(null);

	useEffect(() => {
		if (error) {
			Alert.alert('A ocurrido un error', error, [{ text: 'ok' }]);
		}
	}, [error]);

	const [formState, dispatchFormState] = useReducer(formReducer, {
		inputValues: {
			email: '',
			password: '',
		},
		inputValidities: {
			email: false,
			password: false,
		},
		formIsValid: false,
	});

	const handleSingUp = () => {
		if (formState.formIsValid) {
			dispatch(singUp(formState.inputValues.email, formState.inputValues.password));
		} else {
			Alert.alert('Formulario invalido', 'Ingrese email y password validos', [{ text: 'OK' }]);
		}
	};

	const onInputChangeHandler = useCallback(
		(inputIdentifier, inputValue, inputValidity) => {
			dispatchFormState({
				type: FORM_INPUT_UPDATE,
				value: inputValue,
				isValid: inputValidity,
				input: inputIdentifier,
			});
		},
		[dispatchFormState]
	);

	return (
		<KeyboardAvoidingView
			style={styles.mainContainer}
			behavior="padding"
			keyboardVerticalOffset={50}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Panaderia</Text>
				<Text style={styles.title}>Create account</Text>
				<View>
					<Input
						id="email"
						label="Email"
						keyboardType="email-address"
						autoCorrect={false}
						required
						email
						autoCapitalize="none"
						errorText={'Por Favor ingrese un email valido'}
						initialValue=""
						onInputChange={onInputChangeHandler}
					/>

					<Input
						id="password"
						label="Password"
						keyboardType="default"
						required
						password
						secureTextEntry
						autoCapitalize="none"
						errorText="Por favor ingrese una contrasena valida"
						onInputChange={onInputChangeHandler}
						initialValue=""
					/>
				</View>
				<View style={styles.footer}>
					<Button title="registrarse" onPress={handleSingUp} />
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

export default AuthScreen;
