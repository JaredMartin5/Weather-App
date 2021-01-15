import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import  Header  from '../Components/Header';
import customData from '../keys.json';
import * as Location from 'expo-location';


export default function HomeScreen() {

  const [info, setInfo] = useState({
    name: "loading",
    temp: "loading",
    humidity: "loading",
    weather: "loading",
    icon:"loading"
  })

  const {icon} = info.icon

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
          weather:results.weather[0].main,
          icon:results.weather[0].icon
        })
      })
    })
  }


  const iconUrl =  "http://openweathermap.org/img/wn/" + info.icon + "@2x.png"

  return (
    <View style={styles.container}>
      <Header /> 
      <StatusBar style="auto" />
      <Text>{info.name}</Text>
        <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text>Temperature: {info.temp}℉ {"\n"}Humidity: {info.humidity}% {"\n"}Description: {info.weather} </Text>
    </View>

    
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

    weatherIcon: {
      width: 100,
      height: 100
    }
});


