import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import styles from './style';

export default class Landing extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require('../assets/images/background.png')}>
        <Image style={styles.logoImage} source={require('../assets/images/logoWhite.png')} />
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styles.buttonLoginText}>LOG IN</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}