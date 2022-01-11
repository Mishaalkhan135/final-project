import React from 'react';
import {View, Text, Image, FlatList, Button} from 'react-native';
import Header from '../Components/Header';
import {useSelector} from 'react-redux';
const Cart = props => {
  const cartItem = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  console.log(totalAmount);
  const cartLists = itemData => {
    return (
      <View
        style={{
          height: 200,
          width: '48%',
          margin: 4,
          marginTop: 10,
          elevation: 1,
        }}>
        <View style={{width: '100%', height: 130}}>
          <Image
            source={{uri: itemData.item.imageUrl}}
            style={{
              height: 135,
              width: '100%',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'lightblue',
          }}>
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 15}}>
            Name: {itemData.item.productName}
          </Text>
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 15}}>
            Price: {itemData.item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: '98%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Header />
        <FlatList
          numColumns={2}
          data={cartItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={cartLists}
        />
        <View
          style={{
            width: '100%',
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Total Price: {totalAmount}
          </Text>
          <View style={{height: '5%'}}></View>
          <Button
            title="Back TO Product"
            onPress={() => props.navigation.navigate('ProductScreen')}
          />
        </View>
      </View>
    </View>
  );
};
export default Cart;
