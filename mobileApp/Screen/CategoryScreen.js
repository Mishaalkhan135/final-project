import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../Components/Header';
import {useSelector} from 'react-redux';
const CategoryScreen = props => {
  const allCategory = useSelector(state => state.product.allCategory);
  return (
    <View>
      <Header />
      <Text>Category Screen </Text>
      <Button
        title="products"
        onPress={() => props.navigation.navigate('ProductScreen')}
      />
    </View>
  );
};
export default CategoryScreen;
