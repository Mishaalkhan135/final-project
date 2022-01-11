import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <View
        style={{
          width: '25%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Icon
          name="chevron-back"
          size={30}
          color="red"
          style={{alignSelf: 'center', justifyContent: 'center'}}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{width: '50%', height: 100}}>
        <Image
          source={require('../assets/Images/logo.png')}
          style={{width: '100%', height: 100}}
        />
      </View>
      <View
        style={{
          width: '25%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="ios-cart-outline"
          size={30}
          color="red"
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
export default Header;
