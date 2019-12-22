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
      state.artista = snapshot.val();      
      this.setState(state);
    })
  }
  static navigationOptions = {
    title: 'Artistas'
    
  };

  render() {
    let image
    return (
      <View style={styles.container}>

       {/* <View class="" style={styles.bgImage}>
          <Image source={img}/>
        </View> */}

        <View>
        <ScrollView>  

            <View style={styles.btnArea2}>              
            
              {
                
                
                this.state.artista.map((artista, key) => {
                                                   
                  return (                  
                  <TouchableOpacity key={artista.id} style={[styles.botao , styles.botaoColor1]} onPress= {() => this.props.navigation.navigate('Artista')}>
                    <View class="" style={styles.bgImage}>
                      <Image 
                        source={{uri: artista.url}} 
                        style={{width: 200, height: "100%"}}
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
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  
    bgImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: 150,
    width: '50%'
    
  },

  btnArea:{
    flexDirection: 'row',
    //marginTop: 50,
    //height: 0

  },
  btnArea2:{
    flexDirection: 'row',
    //marginTop: 150,
    //height: 0
    height: 150,
    width: 400,
    margin: 5

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
    width: 420,
    //margin: 0,
    //borderRadius: 2,
    //opacity: 0.5
  },
  botaoColor1:{
    backgroundColor: 'black',
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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    justifyContent: 'center',
    //position: 'absolute',
    paddingTop: 100
  }
 
});