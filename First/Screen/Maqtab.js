import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../components/Search';
const Maqtab = props => {
  return (
    <View style={{flex: 1}}>
      <Header name="Home" />
      <View style={{height: 10}}></View>
      <Search name="Search All Maqtabs" />
      <View
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: 'black',
            textDecorationLine: 'underline',
          }}>
          MAQTAB
        </Text>
      </View>
      <View style={{width: '88%', height: 100, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('MaqtabStudents')}
          style={{
            width: '25%',
            height: 100,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            margin: 5,
          }}>
          <Icon name="home" size={50} color="red" />
          <Text style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
            MAqtab # 301
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '25%',
            height: 100,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            margin: 5,
          }}>
          <Icon name="home" size={50} color="red" />
          <Text style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
            MAqtab # 302
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '25%',
            height: 100,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            margin: 5,
          }}>
          <Icon name="home" size={50} color="red" />
          <Text style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
            MAqtab # 303
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '25%',
            height: 100,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            margin: 5,
          }}>
          <Icon name="home" size={50} color="red" />
          <Text style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
            MAqtab # 304
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Maqtab;
