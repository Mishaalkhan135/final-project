import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import Header from '../Components/Header';
import {catogeryData} from '../Dummy-data/data';

const Home = props => {
  const CatList = itemData => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ProductScreen')}
        style={{
          height: 200,
          width: '100%',
          margin: 3,
        }}>
        <View style={{width: '100%', height: 200}}>
          <ImageBackground
            source={{uri: itemData.item.imageUrl}}
            style={{
              width: '100%',
              height: 185,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
              }}>
              <Text style={styles.text}>{itemData.item.name}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Header />
      <View style={{height: 10}}></View>
      <View style={styles.Mvcontainer}>
        <View style={styles.container}>
          <FlatList
            data={catogeryData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={CatList}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Mvcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '98%',
  },
  text: {
    color: 'lightblue',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default Home;
