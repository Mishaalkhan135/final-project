import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
const Detail = props => {
  const route = useRoute();
  console.log('Detail', route.params.data);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {route.params.data.Name}</Text>
      <Text style={styles.text}>Age: {route.params.data.Age}</Text>
      <Text style={styles.text}>Contact: {route.params.data.Contact}</Text>
      <Text style={styles.text}>Email: {route.params.data.Email}</Text>
    </View>
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
    elevation: 1,
  },
  text: {
    fontSize: 30,
  },
});
export default Detail;
