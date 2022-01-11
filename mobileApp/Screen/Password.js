import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Input from '../Components/Input';
import PrimaryColor from '../assets/Color';
const Password = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Text style={{fontSize: 30, color: 'black'}}>Change Password</Text>
          <View style={{height: 20}}></View>
          <Input name="lock" title="Enter 6 Digit Code" />
          <Input name="lock" title="Enter New Password" />
          <Input name="lock" title="Confirm Password" />
          <Text style={{fontSize: 15, color: 'blue'}}>
            Send Via Message Or Email
          </Text>
        </View>
        <View style={{height: 35}}></View>
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
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
export default Password;
