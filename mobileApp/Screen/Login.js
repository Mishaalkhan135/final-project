import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Input from '../Components/Input';
import PrimaryColor from '../assets/Color';
const Login = props => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Images/logo.png')}
          style={{height: 230, width: '100%'}}
        />
      </View>
      <View style={{height: 35}}></View>

      <View style={styles.input}>
        <Input name="envelope-o" title="Enter Your Email" />
        <Input name="lock" title="Enter Your Password" />
        <View style={{height: 15}}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.text}>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Password')}>
          <Text style={styles.text}>Forget Password</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 30}}></View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={{
            width: '90%',
            height: 60,
            backgroundColor: PrimaryColor.button,
            borderRadius: 18,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 18,
              color: 'black',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    height: 230,
    width: '100%',
  },
  input: {width: '100%', justifyContent: 'center', alignItems: 'center'},
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
});
export default Login;
