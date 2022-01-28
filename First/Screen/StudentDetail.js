import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {Student} from '../Dummy_data/data';

const StudentDetail = props => {
  const CatId = props.route.params.CatId;
  const filterData = Student.filter(item => item.CatId === CatId);
  console.log(filterData, 'Record');

  const Details = itemData => {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          marginVertical: 5,
        }}>
        <View
          style={{
            width: '70%',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={{uri: itemData.item.ImageUrl}}
            style={{width: '100%', height: 150, borderRadius: 50}}
          />
          <View
            style={{width: '30%', height: 150, backgroundColor: 'red'}}></View>
        </View>
      </View>
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
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={Details}
        />
      </View>
    </View>
  );
};
export default StudentDetail;
