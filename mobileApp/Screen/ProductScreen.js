import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Header from '../Components/Header';
import {useSelector, useDispatch} from 'react-redux';
import * as CartAction from '../Store/Action/AddToCartAction';

const ProductScreen = props => {
  const AllProduct = useSelector(state => state.product.product);
  const dispatch = useDispatch();

  const AllProductList = itemData => {
    return (
      <View style={styles.container}>
        <View style={styles.tile}>
          <TouchableOpacity
            style={{width: '60%', height: 200}}
            onPress={() => props.navigation.navigate('Cart')}>
            <ImageBackground
              source={{uri: itemData.item.imageUrl}}
              style={{width: '100%', height: 200}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '50%',
                }}>
                <Text
                  style={{
                    color: 'red',
                    backgroundColor: 'lightblue',
                    fontSize: 15,
                  }}>
                  Go To CartScreen
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View
            style={{
              width: '40%',
              height: 198,
              alignItems: 'center',

              margin: 5,
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>Name: {itemData.item.productName}</Text>
            <Text style={styles.text}>Price: {itemData.item.price}</Text>
            <View style={{height: 10}}></View>
            <Button
              title="ADD TO CARD"
              color="red"
              onPress={() => {
                dispatch(CartAction.AddToCart(itemData.item));
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header />
      <FlatList
        data={AllProduct}
        keyExtractor={(item, index) => index.toString()}
        renderItem={AllProductList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  tile: {
    width: '98%',
    height: 200,
    marginVertical: 5,
    flexDirection: 'row',
    elevation: 1,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
});
export default ProductScreen;
