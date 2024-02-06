import { StyleSheet, Text, View, Image, Button ,SafeAreaView,
  ScrollView,
  StatusBar } from 'react-native';
import React, { Component, useState } from 'react'

export default class HomeScreen extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
      <View style={styles.header}>
        <Text style={styles.logo} onPress={() =>
        navigation.navigate('Profile', {name: 'Reniel'})
      }>
            Logo
        </Text>
        <View>
        </View>
      </View>
      <View style={{width: "100%", position: "relative", paddingBottom: 30}}>
      <Image style={{height: 200, width: "100%",}} source={require("../assets/images/banner.jpg")}/>
      </View>
      <Image style={{marginHorizontal: 40,marginVertical: 10, maxWidth:  "80%", height: 80, }}  source={require("../assets/images/olfu-brand.png")}/>
      <Text style={{color: "#121212", fontSize: 20, textAlign: 'center', marginHorizontal: 20}}>Welcome to the Home of the Topnotchers</Text>
      <View style={{position: "relative", width: "100%", backgroundColor: "green", padding: 20, top: 20}}>
      <Text style={{color: "#f1f1f1", fontSize: 20, marginBottom: 5, fontWeight: 800}}>Why study at OLFU?</Text>
      <View style={{backgroundColor: "#f1f1f1", padding: 15, borderRadius: 5}}>
      <Text style={{textAlign: 'justify'}}>
      With over 50 years of successfully developing Achievers
Incomparable value-for-money for the high quality of education provided
An Inclusive University with open doors to anyone with a thirst for learning: No entrance exams and down payment as low as Php 1,500 to enroll
Multiple options on flexible payment terms and financial aid
Affordable fees
Flexible Tuition Payment Terms
Track record of top-notchers and top performing school citations in the licensure examinations
      </Text>
      </View>
      </View>
      <View>

      </View>
      </ScrollView>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      justifyContent: "start",
      alignItems: "center",
    },
    header:{
    width: "100%",
    padding: 20,
    backgroundColor: "green",
    position: "sticky",
    top: 0,
    zIndex: 10
    },
    logo:{
      fontFamily: "",
      color: "#f1f1f1",
      fontSize: 20,
    }
  });
  