import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>Details Screen</Text>
      <Image source={require('../assets/images/react-logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default details;
