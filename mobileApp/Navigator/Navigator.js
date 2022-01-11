import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import Home from '../Screen/Home';
import Password from '../Screen/Password';
import CategoryScreen from '../Screen/CategoryScreen';
import Cart from '../Screen/Cart';
import ProductScreen from '../Screen/ProductScreen';
import DashBoardScreen from '../Screen/DashBoardScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
