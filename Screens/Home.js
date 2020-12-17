import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header  from '../Components/Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text> Weather App </Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
