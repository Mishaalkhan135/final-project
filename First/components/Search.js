import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Search = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '15%',
          height: 50,

          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
        }}>
        <Icon
          name="search"
          size={18}
          color="grey"
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}
        />
      </View>
      <View
        style={{
          width: '85%',
          height: 50,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <TextInput placeholder={props.name} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Search;
