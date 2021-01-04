import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrentPosition from '../Components/Geolocation';
import  Header  from '../Components/Header';
import customData from '../keys.json';

export default function HomeScreen() {

  const [info, setInfo] = useState({
    name: "loading",
    temp: "loading",
    humidity: "loading",
    weather: "loading"
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
        temp:results.main.temp,
        humidity:results.main.humidity,
        weather:results.weather[0].main
      })
    })
  }




  return (
    <View style={styles.container}>
      <Header /> 
      <CurrentPosition /> 
      <StatusBar style="auto" />
      <Text>{info.name} {"\n"}Temperature: {info.temp}° {"\n"}Humidity: {info.humidity}% {"\n"}Weather: {info.weather} </Text>
    </View>

    
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});


