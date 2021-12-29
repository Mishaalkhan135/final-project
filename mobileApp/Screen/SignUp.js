import React from 'react';
import {View, Text, Button} from 'react-native';

const SignUp = props => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};
export default SignUp;
