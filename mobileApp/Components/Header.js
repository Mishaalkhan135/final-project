import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <Icon
        name="chevron-back"
        size={30}
        color="red"
        style={{alignSelf: 'center', justifyContent: 'center'}}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    height: 100,
    backgroundColor: 'lightblue',
  },
});
export default Header;
