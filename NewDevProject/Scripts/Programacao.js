import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img from './BG/BG3.png'
import firebase from 'firebase'

export default class Programacao extends Component {

  constructor(props){
    super(props)

    this.state = {
      programacao: []
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

    firebase.database().ref("programacao").on("value", (snapshot) => {
      console.log('buscando...');
      let state = this.state;            
      state.programacao = snapshot.val();      
      this.setState(state);
    })
  }
  static navigationOptions = {
    title: 'Programação'
    
  };

  handleSubmit(id) {
    this.props.navigation.navigate('Agenda', {progId: id})
  }

  render() {
    return (
      <View style={styles.container}>

        <View class="" style={styles.bgImage}>
          <Image source={img}/>
        </View>
      
     
      <View style={styles.btnArea}>
        <ScrollView>            
          {
            this.state.programacao.map((programacao, key) => {
              return(
                <TouchableOpacity key={programacao.id} style={[styles.botao , styles.botaoColor1]} onPress= {this.handleSubmit.bind(this, programacao.id)}>
            <Text style={styles.btnTexto}>{programacao.titulo} - {programacao.data}</Text>
                </TouchableOpacity>      
              );
            })     
          }
        
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