import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {StudentDetails} from '../Dummy_data/data';
import Header from '../components/Header';

const MaqtabDetails = props => {
  const catId = props.route.params.catId;
  console.log(catId);
  const filterData = StudentDetails.filter(item => item.catId === catId);
  console.log(filterData, 'Mishaal');
  const Details = itemData => {
    const Pres = () => {
      props.navigation.navigate('Details', {CatId: itemData.item.catId});
    };
    return (
      <TouchableOpacity
        onPress={Pres}
        style={{
          width: '100%',
          height: 250,
          marginVertical: 5,
          flexDirection: 'row',
          borderRadius: 15,
          elevation: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: '35%',
            height: 150,
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image
            bor
            resizeMode="cover"
            source={{uri: itemData.item.ImageUrl}}
            style={{width: '80%', height: 100, marginTop: 15, borderRadius: 50}}
          />
        </View>
        <View
          style={{
            width: '65%',
            height: 100,
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 15}}>
            Name: {itemData.item.name}
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            FatherName: {itemData.item.fatherName}
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            Class: {itemData.item.Class}
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            StudentCode: {itemData.item.StudentCode}
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            RegistrationNo: {itemData.item.RegistrationNo}
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            AdmissionDate: {itemData.item.AdmissionDate}
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            Code: {itemData.item.Code}
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>
            Attendance: {itemData.item.Attendance}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: '98%', height: '98%'}}>
        <Header name="Detail" />
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={Details}
        />
      </View>
    </View>
  );
};
export default MaqtabDetails;
