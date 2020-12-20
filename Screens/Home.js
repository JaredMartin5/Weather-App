import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header  from '../Components/Header';
import customData from '../keys.json';

export default function HomeScreen() {

  const [info, setInfo] = useState({
    name: "loading!!",
    temp: "loading!!"
  })

  useEffect(() =>{
    getWeather()
  },[])
  
  const getWeather = () =>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Denham+Springs&APPID=" + customData.OpenWeatherMap + "&units=imperial")
    .then(data=>data.json())
    .then(results=>{
      console.log(results)
      setInfo({
        name:results.name,
        temp:results.main.temp
      })
    })
  }




  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <Text>{info.name}</Text>
      <Text>{info.temp}°</Text>
    </View>

    
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});


