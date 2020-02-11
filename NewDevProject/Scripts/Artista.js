import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import firebase from 'firebase'

export default class Artista extends Component {

  constructor(props){
    super(props)        
    this.state = {
      artista: [], 
      artistaId: this.props.navigation.getParam('artistaId', null)        
    }

    //this.handleSubmit = this.handleSubmit.bind(this)

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

    firebase.database().ref("artistas/"+this.state.artistaId).on("value", (snapshot) => {
      console.log('buscando...');
      let state = this.state;            
      state.artista = snapshot.val();      
      this.setState(state);
    })
  }

  static navigationOptions = {
    title: 'Artista'
  };

  render() {
    const artista = this.state.artista
    console.log('artista: ', artista)
    return (
      <View style={styles.container}>

          <View>
            <Text style={styles.txtTitulo}>{artista.nome}</Text>
          </View>

          <View class="" style={styles.bgImage}>
            <Image 
              source={{uri: artista.url}} 
              style={{width: '100%', height: 200}}            
            />
          </View>

          <View>
            <Text style={styles.btnTexto}>{artista.descricao}</Text>
          </View>

          <Button title="Novo artista" onPress= {() => this.props.navigation.navigate('AdminArtista')}></Button>
          
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