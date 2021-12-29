import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../Components/Header';
const Login = props => {
  return (
    <View>
      <Header />
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('SignUp')}
      />
    </View>
  );
};
export default Login;
