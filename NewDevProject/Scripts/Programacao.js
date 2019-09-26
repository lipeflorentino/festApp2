import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img from './BG/BG3.png'

export default class Programacao extends Component {

  static navigationOptions = {
    title: 'Programação'
    
  };

  render() {
    return (
      <View style={styles.container}>

       <View class="" style={styles.bgImage}>
          <Image source={img}/>
        </View>
        <Text style={styles.btnTexto}>Programação!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#68072F',
  },
  bgImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    position: 'absolute',
    height: 100,
    width: 100
 
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 50,
    height: 0

  },
  btnArea2:{
    flexDirection: 'row',
    marginTop: 150,
    height: 0

  },
  btnArea3:{
    flexDirection: 'row',
    marginTop: 150,
    height: 0

  },

  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 17,
    borderRadius: 9
  },
  botaoColor1:{
    backgroundColor: '#8A007E',
  },
  botaoColor2:{
    backgroundColor: '#915D44',
  },
  botaoColor3:{
    backgroundColor: '#BA007C',
  },
  botaoColor4:{
    backgroundColor: '#A49171',
  },
  botaoColor5:{
    backgroundColor: '#D68500',
  },
  botaoColor6:{
    backgroundColor: '#B5733C',
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  }
 
});