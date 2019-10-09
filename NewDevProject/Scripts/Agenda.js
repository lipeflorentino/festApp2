import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img2 from './BG/Agenda1.jpg'
import img3 from './BG/Maps1.jpg'

export default class Agenda extends Component {

  static navigationOptions = {
    title: 'Agenda',
    opacity: 0.5
  };

  render() {
    return (
      <View style={styles.container}>

      <ScrollView>    
        <View>
        <Text style={styles.txtTitulo}>PROGRAMAÇÃO 1 - LOCAL 1 </Text>
        <Text style={styles.bordered}></Text>
        </View>  
        
          <View class="" style={styles.titleImage}>
          <Image source={img2}/>
          </View>

          <View style={styles.blocoTxt}>
          <Text style={styles.txtId}>Data: </Text>
          <Text style={styles.txtInfo}>00/00/0000</Text>
          </View>

          <View style={styles.blocoTxt}>
          <Text style={styles.txtId}>Horário: </Text>
          <Text style={styles.txtInfo}>00:00</Text>
          </View>

          <View style={styles.blocoTxt}>
          <Text style={styles.txtId}>Endereço: </Text>
          <Text style={styles.txtInfo}>Endereço do Local 1</Text>
          </View>

          <Text style={styles.bordered}></Text>

          <View>
          <Text style={styles.txtTitulo}>Como chegar: </Text>
          <Text style={styles.txtInfo}></Text>
          </View>

          <View class="" style={styles.titleImage}>
          <Image source={img3}/>
          </View>

      </ScrollView>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#68072F',
  },
  bordered: {
    borderTopColor: '#68072F',
    borderTopWidth: 3,
    marginLeft: 20,
    marginRight: 20
  },
  bgImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    position: 'absolute',
    height: 100,
    width: 100,
    opacity: 0.3 
  },
  titleImage:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10 
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtId: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'justify',
    marginLeft: 20,
    marginRight: 20
  }
 
});