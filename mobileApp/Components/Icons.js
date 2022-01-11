import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Icons = () => {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'lightblue'}}>
      <View
        style={{
          width: '25%',
          height: 100,

          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <Icon
          name="home"
          size={30}
          color="green"
          style={{alignSelf: 'center', justifyContent: 'center'}}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          width: '25%',
          height: 100,

          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <Icon
          name="home"
          size={30}
          color="green"
          style={{alignSelf: 'center', justifyContent: 'center'}}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          width: '25%',
          height: 100,

          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <Icon
          name="home"
          size={30}
          color="green"
          style={{alignSelf: 'center', justifyContent: 'center'}}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          width: '25%',
          height: 100,

          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <Icon
          name="home"
          size={30}
          color="green"
          style={{alignSelf: 'center', justifyContent: 'center'}}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};
export default Icons;
