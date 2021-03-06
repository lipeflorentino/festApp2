import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img2 from './BG/Video1.png'

export default class Videos extends Component {

  static navigationOptions = {
    title: 'Vídeos'
  };

  render() {
    return (
      <View style={styles.container}>

          <View class="" style={styles.bgImage}>
          <Image source={img2}/>
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'black',
  },
  bgImage:{
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    //height: 100,
    //width: 100
  },
  txtTitulo:{
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'justify',
    paddingLeft: 10,
    paddingRight: 10,    
  }
});