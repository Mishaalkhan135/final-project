import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = props => {
  return (
    <View style={styles.input}>
      <View
        style={{
          width: '20%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name={props.name} size={25} color="grey" />
      </View>
      <View style={{width: '80%', height: 50}}>
        <TextInput placeholder={props.title} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    backgroundColor: 'white',
    marginVertical: 5,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
});
export default Input;
