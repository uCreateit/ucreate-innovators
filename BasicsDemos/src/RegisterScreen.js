import React,{Component} from 'react';
import {Platform, StyleSheet, Text,View,Button,ImageBackground, TextInput, TouchableOpacity} from 'react-native'



export default class RegisterScreen extends React.Component{
    static navigationOptions={
        header: null
    };

    onFocus(){
        this.setState({
            backgroundColor:'#fff'
        })
    }
    render(){
        const {navigation} = this.props;
        const items = navigation.getParam('itemValue', 'Nothing');
        const titles = navigation.getParam('titleValue', 'No');
        return(
            <View style={styles.container}>
         <ImageBackground source={require('./assets/global_bg.png')} style={styles.container}>
         <Text style={styles.text}>{JSON.stringify(titles)}</Text>
         <TextInput style={styles.textInputs}
         onFocus={()=>this.onFocus()}
         placeholder='FirstName'
         underlineColorAndroid="#fff"
         selectionColor="#fff"
         placeholderTextColor="#fff">

         </TextInput>

         <TextInput style={styles.textInputs}
         onFocus={()=>this.onFocus()}
         placeholder='LastName'
         underlineColorAndroid="#fff"
         selectionColor="#fff"
         placeholderTextColor="#fff">

         </TextInput>

         <TextInput style={styles.textInputs}
         onFocus={()=>this.onFocus()}
         placeholder='Email'
         underlineColorAndroid="#fff"
         selectionColor="#fff"
         placeholderTextColor="#fff">

         </TextInput>

         <TextInput style={styles.textInputs}
         onFocus={()=>this.onFocus()}
         placeholder='Date Of Bitrh'
         underlineColorAndroid="#fff"
         selectionColor="#fff"
         placeholderTextColor="#fff">

         </TextInput>

         <TextInput style={styles.textInputs}
         onFocus={()=>this.onFocus()}
         placeholder='Password'
         underlineColorAndroid="#fff"
         selectionColor="#fff"
         placeholderTextColor="#fff">

         </TextInput>

<TouchableOpacity style={styles.buttonView}>
  <View style={styles.button}>
      <Text style={styles.buttonText}>REGISTER</Text>
  </View>

</TouchableOpacity>
         
         </ImageBackground>
            </View>
        )
    }
}

// const AppNavigator = createStackNavigator(
//   {
//     lists: ListScreen,
//     search: SearchBar,
//   },
//   {
//   initialRoute : "lists"
//   }
// );

//export default ListScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // flexDirection:"column",
      width:"100%",
      height:"100%",
     // justifyContent:"center",
     alignItems:"center",
      backgroundColor: '#F5FCFF',
     
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    text: {
     fontSize: 20,
     padding: 10,
     height:70,
     fontWeight:"bold"
    },
    textInputs:{
        width: 320,
        height:40,
        padding:10,
       // backgroundColor:"#fff",
       color:"#fff",
        marginLeft:0,
        marginTop:10,
      
    },
    text:{
      
        color:"#fff",
        alignItems:"center",
        fontSize:20,
        marginTop:10,
        fontWeight:"bold"
    }, 
    buttonView:{
       marginTop:20
    },
    button:{
        width: 130,
        height:45,
        color: "#fff",
        backgroundColor:"#06878A",
        marginTop:30
    },
    buttonText:{
        fontSize:15,
        color:"#fff",
        textAlign:"center",        
        fontWeight:"bold",
        marginTop:10,
    }
    
  });