import {loadOptions} from '@babel/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

import Input from '../components/Input';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginHandler = () => {
    if (email === 'Maqtab301' && password === '12345') {
      props.navigation.navigate('Drawer');
    } else {
      Alert.alert('Invalid email and Password');
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.header}>
        <Image
          resizeMode="stretch"
          source={require('../assets/Images/masjid.png')}
          style={{height: 190, width: '100%'}}
        />
      </View>
      <View style={{height: 18}}></View>
      <View style={styles.input}>
        <Input
          placeholder="Maqtab Id Login"
          icon="email"
          name="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Enter Password"
          icon="lock"
          name="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          onChange={value => setPassword(value)}
        />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Password')}>
        <Text style={styles.text}>Forget Password?</Text>
      </TouchableOpacity>
      <View style={{height: 30}}></View>
      <TouchableOpacity onPress={LoginHandler}>
        <View style={styles.button}>
          <Text style={{color: 'black'}}>Login</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scroll: {
    height: '100%',
    width: '100%',
  },
  header: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'blue',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 20,
  },
});
export default Login;
