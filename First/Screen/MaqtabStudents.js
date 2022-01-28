import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Search from '../components/Search';
import {CategoryData} from '../Dummy_data/data';
import Header from '../components/Header';
const MaqtabStudents = props => {
  const StudentName = itemData => {
    const PresFunc = () => {
      props.navigation.navigate('MaqtabDetails', {catId: itemData.item.id});
    };
    return (
      <TouchableOpacity style={styles.tile} onPress={PresFunc}>
        <View style={{width: '35%', height: 100}}>
          <Image
            bor
            resizeMode="cover"
            source={{uri: itemData.item.ImageUrl}}
            style={{width: '80%', height: 110, borderRadius: 50, marginTop: 15}}
          />
        </View>
        <View
          style={{
            width: '65%',
            height: 100,
            marginTop: 30,
          }}>
          <Text style={{color: 'black', fontSize: 15}}>
            Name: {itemData.item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '98%', height: '98%'}}>
        <Header name="Students" />
        <View style={{height: 10}}></View>
        <Search name="Search All Students" />
        <FlatList
          data={CategoryData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={StudentName}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tile: {
    width: '100%',
    height: 130,
    marginVertical: 5,
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
export default MaqtabStudents;
