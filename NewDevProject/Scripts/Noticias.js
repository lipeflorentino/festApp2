import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img2 from './BG/ArtistaJazz3.png'

export default class Noticias extends Component {

  static navigationOptions = {
    title: 'Notícias'
  };

  render() {
    return (
      <View style={styles.container}>

          <ScrollView>

            <TouchableOpacity  onPress= {() =>
                                       this.props.navigation.navigate('Noticia')}>  
              <View class="" style={styles.bgImage}>
              <Image source={img2}/>
              </View>
              <View>
              <Text style={styles.txtTitulo}>Notícia sobre o evento 1</Text>
              </View>
              <View>
              <Text style={styles.txtInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress= {() =>
                                       this.props.navigation.navigate('Noticia')}>  
              <View class="" style={styles.bgImage}>
              <Image source={img2}/>
              </View>
              <View>
              <Text style={styles.txtTitulo}>Notícia sobre o evento 2</Text>
              </View>
              <View>
              <Text style={styles.txtInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress= {() =>
                                       this.props.navigation.navigate('Noticia')}>  
              <View class="" style={styles.bgImage}>
              <Image source={img2}/>
              </View>
              <View>
              <Text style={styles.txtTitulo}>Notícia sobre o evento 3</Text>
              </View>
              <View>
              <Text style={styles.txtInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
            </TouchableOpacity>
          
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
    backgroundColor: 'white',
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
    marginLeft: 10,
    marginRight: 10  
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 50,
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