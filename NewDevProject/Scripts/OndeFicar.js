import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img from './BG/BG3.png'
import img2 from './BG/Hotel1.jpg'

export default class OndeFicar extends Component {

  static navigationOptions = {
    title: 'Onde Ficar'
  };

  render() {
    return (
      <View style={styles.container}>

        <View class="" style={styles.bgImage}>
        <Image source={img}/>
        </View>

          <ScrollView>
            <View style={styles.btnArea}>
              <TouchableOpacity onPress= {() =>
                                        this.props.navigation.navigate('Local')}>  
                <View class="" style={styles.infoImage}>
                <Image source={img2}/>
                </View>
                <View>
                <Text style={styles.txtTitulo}>Local 1</Text>
                </View>
                <View>
                <Text style={styles.txtInfo}>Lorem ipsum dolor sit amet, consectetur.</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.btnArea}>
              <TouchableOpacity onPress= {() =>
                                        this.props.navigation.navigate('Local')}>  
                <View class="" style={styles.infoImage}>
                <Image source={img2}/>
                </View>
                <View>
                <Text style={styles.txtTitulo}>Local 2</Text>
                </View>
                <View>
                <Text style={styles.txtInfo}>Lorem ipsum dolor sit amet, consectetur.</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.btnArea}>
              <TouchableOpacity onPress= {() =>
                                        this.props.navigation.navigate('Local')}>  
                <View class="" style={styles.infoImage}>
                <Image source={img2}/>
                </View>
                <View>
                <Text style={styles.txtTitulo}>Local 3</Text>
                </View>
                <View>
                <Text style={styles.txtInfo}>Lorem ipsum dolor sit amet, consectetur.</Text>
                </View>
              </TouchableOpacity>
            </View>
          
          </ScrollView>
          
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  infoImage:{
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //marginTop: 10,
    //marginBottom: 10,
    //height: 100,
    //width: 100
 
  },
  txtTitulo:{
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10  
  },

  btnArea:{
    backgroundColor: 'white',
    marginRight: 10,
    marginBottom : 10
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 17,
    borderRadius: 9
  },
  txtInfo:{
    fontSize: 16,
    color: 'black',
    //justifyContent: 'center',
    textAlign: 'justify',
    //paddingLeft: 10,
    //paddingRight: 10,   
    marginLeft: 10,
    marginRight: 10  
  }
 
});