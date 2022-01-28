import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../Screen/Login';
import Password from '../Screen/Password';
import MaqtabStudents from '../Screen/MaqtabStudents';
import MaqtabDetails from '../Screen/MaqtabDetails';
import Maqtab from '../Screen/Maqtab';
import Details from '../Screen/Details';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerScr = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="ProductScreen" component={ProductScreen} />
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="StudentDetail" component={StudentDetail} /> */}
      <Drawer.Screen
        name="Maqtab"
        component={Maqtab}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MaqtabStudents"
        component={MaqtabStudents}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MaqtabDetails"
        component={MaqtabDetails}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
// const BottomScr = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//     </Tab.Navigator>
//   );
// };

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Drawer" component={DrawerScr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
