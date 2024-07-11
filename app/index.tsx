import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [telNo, setTelNo] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { name, address, telNo, email });
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.navbar}>
        <Link href="/index" style={styles.navLink}>Home</Link>
        <Link href="/details" style={styles.navLink}>Details</Link>
        <Link href="/picker" style={styles.navLink}>Gallery</Link>
        <Link href="/camara" style={styles.navLink}>Camara</Link>
      </View>

      <Text style={styles.centeredText}>Shehar Mavitha</Text>


      <Text style={styles.label}>Name</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Address</Text>
      <TextInput 
        style={styles.input} 
        value={address} 
        onChangeText={setAddress} 
        placeholder="Enter your address"
      />
      <Text style={styles.label}>Telephone Number</Text>
      <TextInput 
        style={styles.input} 
        value={telNo} 
        onChangeText={setTelNo} 
        placeholder="Enter your telephone number"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Button 
        title="Submit" 
        onPress={handleSubmit} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    backgroundColor:"FF8F00"
  },
  navLink: {
    fontSize: 18,
    color: 'blue',

  },
  centeredText: {
    color: "red",
    fontSize: 27,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default EmailForm;
