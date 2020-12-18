import React from 'react';
import { Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={{
        alignSelf: 'stretch',
        backgroundColor:"skyblue",
        height: 60,       
    }}>

         <Text style={{
           fontWeight: 'bold',
           textAlign: 'center',
           fontSize: '22',
           marginTop: 20,
         }}> Weather App </Text>
    </View>
  );
}

