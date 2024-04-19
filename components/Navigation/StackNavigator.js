import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Whatsapp from '../Screens/Whatsapp';
import BottomNavigation from './BottomNavigator';
import Login from '../Screens/Whatsapp/Auth/Login';
import Register from '../Screens/Whatsapp/Auth/Register';

const StackNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Whatsapp' component={Whatsapp} />
            </Stack.Navigator> */}
            <BottomNavigation />
        </NavigationContainer>
    )
}

export default StackNavigator;