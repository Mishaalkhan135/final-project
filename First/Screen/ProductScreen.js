import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {CategoryData} from '../Dummy_data/data';

const ProductScreen = props => {
  const StudentList = itemData => {
    const PresFunc = () => {
      props.navigation.navigate('Category', {catId: itemData.item.id});
    };
    return (
      <TouchableOpacity
        onPress={PresFunc}
        style={{
          width: '100%',
          heightL: 150,
          marginVertical: 5,
        }}>
        <ImageBackground
          source={{uri: itemData.item.ImageUrl}}
          style={{width: '100%', height: 150}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'red',
              alignSelf: 'center',
              marginTop: 50,
              backgroundColor: 'lightblue',
            }}>
            {itemData.item.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '96%', height: '95%'}}>
        <FlatList
          data={CategoryData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={StudentList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default ProductScreen;
