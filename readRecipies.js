import React, {Component} from "react";
import {Text, View, StyleSheet, TouchableOpacity, Button, Scroll, ToastAndroid, KeyboardAvoidingView, StatusBar, ImageBackground} from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config"
import { SafeAreaView } from "react-native/types";

export default class ReadRecipies extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      allRecipes: [],
      search: '',
      dataSource: [],
    }
  }
  componentDidMount(){
    this.retrieveRecipes()
  }
  updateSearch = search=>{
    this.setState({search})
  }
  retrieveRecipes= ()=>{
    try{
      var allRecipes = [];
      var recipes = db.collection("recipes").get().then((querySnapShot)=>{
        querySnapShot.forEach((doc )=>{allRecipes.push(doc.data())})
      })
      this.setState({allRecipes})
    }

  //closing rounded and curly bracket in 30 line
  catch(error){
    console.log(error)
  }}
} //1 error fixed by closing bracket in 35 after catch block
  searchFilterFunction(text,{})
  render();{
    return(
      <View styles={styles.container}>
        <ImageBackground source={require("../assets/background2.jpeg")} style ={styles.backgroundImageTwo}/>
        <SafeAreaView style = {styles.droidSafeArea}/>
        <Header backgroundColor = {"blue"} centerComponent = {{text: "Read Recipe.",style: {color: "white", fontSize: 20 }}}/>
      </View>
    )
  }
// removed 1 closing curly bracket in 46 line


const styles = StyleSheet.create({
  backgroundImageTwo:{
  flex: 1,
  reseizeMode: "cover"
  },
  container:{
    flex: 1,
    backgroundColor: "#b300b3"
  }

})
