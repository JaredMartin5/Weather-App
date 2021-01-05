import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header  from '../Components/Header';
import customData from '../keys.json';
import * as Location from 'expo-location';


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
    var currentLocation = Location.getCurrentPositionAsync({});
    currentLocation.then( position => {
      fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=" + customData.OpenWeatherMap + "&units=imperial")
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
    })
  }




  return (
    <View style={styles.container}>
      <Header /> 
      {/* <Text><CurrentPosition /></Text> */}
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


