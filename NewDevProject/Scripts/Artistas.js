import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img from './BG/BG3.png'
import img2 from './BG/ArtistaJazz.jpg'
import firebase from 'firebase'

export default class Artistas extends Component {
  constructor(props){
    super(props)

    this.state = {
      artista: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)

    let firebaseConfig = {
      apiKey: "AIzaSyDq95dRzVvYD6IUHNC_pb6dnFG7FfqGumI",
      authDomain: "fmlanapp.firebaseapp.com",
      databaseURL: "https://fmlanapp.firebaseio.com",
      projectId: "fmlanapp",
      storageBucket: "fmlanapp.appspot.com",
      messagingSenderId: "1045348850059",
      appId: "1:1045348850059:web:eba6952933fbc1cfb8378e",
      measurementId: "G-S7RRR1CLFR"
    };

    // Initialize Firebase
    if (!firebase.apps.length) {      
      firebase.initializeApp(firebaseConfig);
    }    
    //let id = 1    

    firebase.database().ref("artistas").on("value", (snapshot) => {
      console.log('buscando...');
      let state = this.state;  
      state.artista = [];          
      snapshot.forEach((item) => {
        state.artista.push({
          key: item.key,
          nome: item.val().nome,
          descricao: item.val().descricao,
          url: item.val().url 
        })
      })
      this.setState(state);
    })
  }
  static navigationOptions = {
    title: 'Artistas'
    
  };

  handleSubmit(id) {
    this.props.navigation.navigate('Artista', {artistaId: id})
  }

  render() {        
    if(this.state.artista != '' && this.state.artista){
      console.log('entrou!')      
      return (
        <View style={styles.container}>
  
         {/* <View class="" style={styles.bgImage}>
            <Image source={img}/>
          </View> */}
  
            <ScrollView>
              <View style={styles.btnArea}>                              
                {                  
                  this.state.artista.map((artista, key) => {
                                                     
                    return (                  
                    <TouchableOpacity key={key} onPress= {this.handleSubmit.bind(this, artista.key)}>
                     <View class="" style={styles.infoImage}>
                        <Image 
                          source={{uri: artista.url}} 
                          style={{width: 440, height: 300}}
                        />
                      </View>
    
                      <View>
                        <Text style={styles.btnTexto}>{artista.nome}</Text>
                      </View>
                    </TouchableOpacity> 
                    );
                  })                  
                }                           
              </View>          
            </ScrollView>
          </View>                
      );
    }else{
      return(
        <View>

        </View>
      );
    }
    
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