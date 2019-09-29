import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
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
      
     
      <View style={styles.btnArea}>
        <ScrollView>  
         <TouchableOpacity style={[styles.botao , styles.botaoColor1]} onPress= {() =>
                                       this.props.navigation.navigate('Agenda')}>
          <Text style={styles.btnTexto}>PROGRAMAÇÃO 1 - Local 1</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.botao , styles.botaoColor1]}  onPress= {() =>
                                       this.props.navigation.navigate('Agenda')}>
          <Text style={styles.btnTexto}>PROGRAMAÇÃO 2 - Local 2</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.botao , styles.botaoColor1]} onPress= {() =>
                                       this.props.navigation.navigate('Agenda')}>
          <Text style={styles.btnTexto}>PROGRAMAÇÃO 3 - Local 3</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.botao , styles.botaoColor1]}  onPress= {() =>
                                       this.props.navigation.navigate('Agenda')}>
          <Text style={styles.btnTexto}>PROGRAMAÇÃO 4 - Local 4</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.botao , styles.botaoColor1]} onPress= {() =>
                                       this.props.navigation.navigate('Agenda')}>
          <Text style={styles.btnTexto}>PROGRAMAÇÃO 5 - Local 5</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.botao , styles.botaoColor1]}  onPress= {() =>
                                       this.props.navigation.navigate('Agenda')}>
          <Text style={styles.btnTexto}>PROGRAMAÇÃO 6 - Local 6</Text>
         </TouchableOpacity>
         </ScrollView>
       </View>
      
      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    //flexDirection: 'row',
    //marginTop: 50,
    //height: 0

  },
  btnArea2:{
    //flexDirection: 'row',
    //marginTop: 150,
    //height: 0

  },
  btnArea3:{
    //flexDirection: 'row',
    //marginTop: 150,
    //height: 0

  },

  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 400,
    margin: 4,
    borderRadius: 9,
    opacity: 0.5
  },
  botaoColor1:{
    backgroundColor: 'white',
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
    color: '#000000',
    justifyContent: 'flex-start',
  }
 
});