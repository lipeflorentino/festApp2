import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img2 from './BG/Agenda1.jpg'

export default class Agenda extends Component {

  static navigationOptions = {
    title: 'Agenda'
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.txtTitulo}>PROGRAMAÇÃO 1 - LOCAL 1 </Text>
        <Text style={styles.bordered}></Text>
        </View>  
        
          <View class="" style={styles.bgImage}>
          <Image source={img2}/>
          </View>

          <View style={styles.blocoTxt}>
          <Text style={styles.btnTexto}>Data: </Text>
          <Text style={styles.txtInfo}>00/00/0000</Text>
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
    backgroundColor: 'white',
  },
  bordered: {
    borderTopColor: 'red',
    borderTopWidth: 2,
    marginLeft: 20,
    marginRight: 20
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
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20
  },
  blocoTxt: {
    flexDirection: 'row'  
  },
  txtInfo:{
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20
  },
  btnTexto:{
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'justify',
    //justifyContent: 'flex-start',
    //alignItems: 'flex-start', 
    marginLeft: 20,
    marginRight: 20
  }
 
});