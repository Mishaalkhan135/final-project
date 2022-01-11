import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Input from '../Components/Input';
import PrimaryColor from '../assets/Color';

const SignUp = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 30, alignSelf: 'center', color: 'black'}}>
          SignUp
        </Text>
        <View style={{height: 15}}></View>
        <Input name="user" title="Enter Your Name" />
        <Input name="home" title="Enter Your Contact.no" />
        <Input name="envelope-o" title="Enter Your Email" />
        <Input name="lock" title="Enter Your Password" />
        <Input name="lock" title="Confirm Password" />
      </View>
      <View style={{height: 18}}></View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}
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
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SignUp;
