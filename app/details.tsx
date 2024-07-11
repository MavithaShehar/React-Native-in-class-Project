import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';


    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '4fc78b0d-42f2-4e7e-88ef-ec17ab77e34d',
          title: 'Fourth Item',
        },
        {
          id: 'e2e35b53-3fca-4d85-aad6-13c59c6711e5',
          title: 'Fifth Item',
        },
        {
          id: 'e4c8b1a2-1876-44e2-b3b1-1f3e03b5e1a4',
          title: 'Sixth Item',
        },
        {
          id: 'b4a8f9e7-60c6-4e13-8a8b-9f4b64f4b329',
          title: 'Seventh Item',
        },
        {
          id: 'c1e4c536-7a13-4914-9e2f-7a283fd9efc0',
          title: 'Eighth Item',
        },
        {
          id: '27e2f870-ee95-4b08-81bf-7a9f396e7e9e',
          title: 'Ninth Item',
        },
        {
          id: 'd907ef21-6ef7-4c6a-94e8-64e431f18364',
          title: 'Tenth Item',
        },
      ];
      
  

  const handleSubmit = () => {
    console.log('Form submitted:');
  };

const Details = () => {
  return (
    <View style={styles.container}>

        <View>
        <Text style={styles.text}>Hello</Text>
        <Text style={styles.text}>Details Screen</Text>
        </View>
      
       <View style={styles.list}>
       <FlatList
        data={DATA}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
       </View> 
      

    <Button 
        title="Submit" 
        onPress={handleSubmit} 
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 24,
  },
  image: {
    width: 200,
    height: 200,
   
  },
  item: {
    width:350,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
   
  },
list:{
    height:600,

    backgroundColor:"#FFDB00",
    padding:20,
    marginBottom:20
    
}
});

export default Details;
