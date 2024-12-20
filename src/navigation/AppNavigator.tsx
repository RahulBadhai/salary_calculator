// navigation/AppNavigator.tsx
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from '../app/Screen/DashboardScreen';
import { LoginScreen } from '../app/Screen/LoginScreen';
import { AuthContext } from '../app/context/AuthContext';


const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('AuthContext not found');

  const { user } = auth;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
