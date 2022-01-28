import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  Image,
  Touchable,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../components/Header';
const Home = props => {
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/Images/images.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Header name="DashBoard" />
          <View
            style={{
              width: '100%',
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 15}}>pewered By</Text>
            <Text
              style={{
                color: 'white',
                fontSize: 35,
                textDecorationLine: 'underline',
              }}>
              One Alif Global
            </Text>
          </View>
          <View style={{width: '100%', height: 150, marginBottom: 150}}>
            <Image
              source={{
                uri: 'https://tse2.mm.bing.net/th?id=OIP.f2D7Qusxz66Q9Qh19R1WGwAAAA&pid=Api&P=0&w=362&h=187',
              }}
              style={{width: '100%', height: 180}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Maqtab')}
                style={{
                  width: 150,
                  height: 80,
                  backgroundColor: 'blue',
                  marginRight: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                }}>
                <Text style={{color: 'white'}}>Maqtab</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}
                style={{
                  width: 150,
                  height: 80,
                  backgroundColor: 'blue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                }}>
                <Text style={{color: 'white'}}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
