import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';
import {useNavigation} from '@react-navigation/native';

const Registration = props => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  let data = {
    Name: name,
    Age: age,
    Contact: contact,
    Email: email,
  };

  const destination = () => {
    navigation.navigate('Confirmation', {data});
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={{height: 30}}></View>
      <View style={styles.input}>
        <Input
          icon="rename-box"
          name="Enter Your Name"
          placeholder="Enter Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          icon="face-agent"
          name="Enter Your Age"
          placeholder="Enter Age"
          value={age}
          onChangeText={text => setAge(text)}
        />
        <Input
          icon="contacts"
          name="Enter Your Contact"
          placeholder="Enter Contact"
          value={contact}
          onChangeText={text => setContact(text)}
        />
        <Input
          icon="email"
          name="Enter Your mail"
          placeholder="Enter Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={{height: 30}}></View>
      <TouchableOpacity onPress={destination}>
        <View style={styles.button}>
          <Text style={{color: 'black'}}>Done</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scroll: {
    height: '100%',
    width: '100%',
  },
  header: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'blue',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 20,
  },
});
export default Registration;
