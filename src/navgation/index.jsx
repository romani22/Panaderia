import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';
const index = () => {
	const userId = useSelector((state) => state.auth.userId);
	console.log(userId);
	return (
		<NavigationContainer>
			{userId ? <BottomTabNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default index;
