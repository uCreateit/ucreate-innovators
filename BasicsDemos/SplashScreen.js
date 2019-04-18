
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground  } from 'react-native';
import { createStackNavigator , createAppContainer, Header} from 'react-navigation';
import BlinkApp from './BlinkApp';
import ListScreen from './ListScreen';
import SearchBar from './SearchBar';
import RegisterScreen from './src/RegisterScreen';
import {AsyncStorage} from 'react-native';


 class SplashScreen extends React.Component{

    constructor(props){
        super(props)
    setTimeout(()=>{
        let userId='N' ;
        console.log(userId);

        (async() =>{
        
            try{
            userId = await AsyncStorage.getItem('userId') || 'None';
            console.log(userId);
            if(userId!='None'){
                console.log(userId);
                this.props.navigation.navigate('List')
            }else{
                console.log(userId);
                this.props.navigation.navigate('Home')
            }
            }catch(error){
                console.log("SplashErrorS", error);
            }
            return userId;
        })();
       
       
       },3000);
    }

    static navigationOptions = {
        header: null
    };

    render(){
    return(
        <View style={styles.container}>
        <ImageBackground
        source = {require('./src/assets/global_bg.png')} style={styles.container}></ImageBackground>

        </View>
    );
    }
}

const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: BlinkApp,
    List: ListScreen,
    search: SearchBar,
    register: RegisterScreen,
  },
  {
  initialRoute : "Splash"
  }
);

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%'

    }
}) 