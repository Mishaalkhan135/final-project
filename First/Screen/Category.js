import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {StudentDetails} from '../Dummy_data/data';

const Category = props => {
  const catId = props.route.params.catId;

  const filterData = StudentDetails.filter(item => item.catId === catId);
  console.log(filterData, 'Mishaal');
  const StudentInformation = itemData => {
    const Prees = () => {
      props.navigation.navigate('StudentDetail', {
        CatId: itemData.item.catId,
      });
    };
    return (
      <TouchableOpacity
        onPress={Prees}
        style={{
          height: 100,
          width: '100%',
          marginVertical: 5,
          flexDirection: 'row',
          elevation: 1,
          backgroundColor: 'lightblue',
        }}>
        <View style={{width: '35%', height: 100}}>
          <Image
            bor
            resizeMode="cover"
            source={{uri: itemData.item.ImageUrl}}
            style={{width: '80%', height: 100, borderRadius: 50}}
          />
        </View>
        <View
          style={{
            width: '65%',
            height: 100,
            marginTop: 30,
          }}>
          <Text style={styles.text}>Name: {itemData.item.name}</Text>
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
      <View
        style={{
          height: '95%',
          width: '96%',
        }}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={filterData}
          renderItem={StudentInformation}
          showsVerticalScrollIndicator={false}
        />
        <Button
          title="Back"
          onPress={() => props.navigation.navigate('ProductScreen')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
    padding: 3,
  },
});
export default Category;
