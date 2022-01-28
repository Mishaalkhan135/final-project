import React from 'react';
import {View, Text, FlatList, Image, Button} from 'react-native';
import {Detail} from '../Dummy_data/data';
import Header from '../components/Header';
const Details = props => {
  const CatId = props.route.params.CatId;
  console.log(CatId, ' Detals');
  const filterData = Detail.filter(item => item.CatId === CatId);
  console.log(filterData);
  const detail = itemData => {
    return (
      <View
        style={{
          width: '100%',
          height: 500,
          backgroundColor: 'white',
          marginVertical: 5,
          borderRadius: 15,
        }}>
        <View style={{width: '100%', height: 200, alignItems: 'center'}}>
          <Image
            bor
            resizeMode="cover"
            source={{uri: itemData.item.ImageUrl}}
            style={{
              width: '50%',
              height: 180,
              marginTop: 15,
              borderRadius: 50,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 300,
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Name: {itemData.item.name}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>
            Deeniyat: {itemData.item.deeniyat}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>
            Manzil: {itemData.item.manzil}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>
            Deeniyat: {itemData.item.deeniyat}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>
            Sabki: {itemData.item.sabki}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>
            Tajveed: {itemData.item.tajveed}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>
            Qawaid: {itemData.item.qawaid}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>
            Remarks: {itemData.item.remarks}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>
            TotalMarks: {itemData.item.totalMarks}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '98%', height: '98%'}}>
        <Header name="Marks" />
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={detail}
        />
      </View>
    </View>
  );
};
export default Details;
