import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header  from '../Components/Header';

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <StatusBar style="auto" />
      <View style={styles.container}>
      <Text> Enter your city name:</Text>
      </View>
    </View>

    
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});

