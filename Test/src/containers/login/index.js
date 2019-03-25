import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {backgroundImage, logoWhite} from '../../assets/images/images'
export default class Login extends Component {
  componentWillMount () {
    let arrUsers = [
      1,2,3,4,5
    ]
    // arrUsers.forEach(test)

    function test() {
     alert('1')
    }
}


    render() {
      return (
        <ImageBackground source={backgroundImage} style={styles.image}>
         <View style={styles.innerContent}>
          <Image source={logoWhite} style={styles.innerLogo}/>
          <TouchableOpacity style={styles.buttonBackground1}><Text style={styles.button1}>CREATE AN ACCOUNT</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonBackground2}><Text style={styles.button2}>LOG IN</Text></TouchableOpacity>
          </View>
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
      innerContent:{
        height:300,
        // backgroundColor:'white',
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,
        alignItems:'center'
      },
      innerLogo:{
        width:'50%',
        height:'53%',
        marginBottom:40,
        resizeMode: 'contain'
      },
      buttonBackground1:{
        backgroundColor:'#096B76',
        width:160,
        height:35,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 2,
      },
      buttonBackground2:{
        width:160,
        height:35,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 2,
      },
      button1:{
        color:'white',
        fontFamily:'Rajdhani-Semibold',
        fontSize:16
      },
      button2:{
        color:'#096B76',
        fontFamily:'Rajdhani-Semibold',
        fontSize:16
      },
      image : {
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        resizeMode: 'contain'
      }
  })