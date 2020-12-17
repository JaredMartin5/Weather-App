import React from 'react';
import { Text, View } from 'react-native';
import Constant from 'expo-constants';


export default function Header() {
  return (
    <View style={{
        marginTop:Constant.statusBarHeight,
        alignSelf: 'stretch',
        backgroundColor:"lightblue",
        textAlign: 'center',
    }}>

     <View>
         <Text style={{
           fontWeight: 'bold'
         }}> This is a test. </Text>
     </View>
    </View>
  );
}

