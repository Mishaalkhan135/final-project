import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const Confirmation = props => {
  const route = useRoute();
  console.log('confimation', route.params.data);
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Detail', {data: route.params.data})
      }>
      <View style={styles.container}>
        <Text style={styles.text}>Name: {route.params.data.Name}</Text>

        <View style={{height: 10}}></View>
        <Button
          title="Back"
          onPress={() => props.navigation.navigate('Registration')}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
  },
});
export default Confirmation;
