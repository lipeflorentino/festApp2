import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import firebase from 'firebase'

export default class Noticia extends Component {

  constructor(props){
    super(props)        
    this.state = {
      noticia: [], 
      noticiaId: this.props.navigation.getParam('noticiaId', null)        
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

    firebase.database().ref("noticias/"+this.state.noticiaId).on("value", (snapshot) => {
      console.log('buscando...');
      let state = this.state;            
      state.noticia = snapshot.val();      
      this.setState(state);
    })
  }

  static navigationOptions = {
    title: 'Notícia'
  };

  render() {
    const noticia = this.state.noticia
    return (
      <View style={styles.container}>

          <View>
           <Text style={styles.txtTitulo}>{noticia.titulo}</Text>
          </View>

          <View class="" style={styles.bgImage}>
            <Image 
              source={{uri: noticia.url}} 
              style={{width: '100%', height: 200}}            
            />
          </View>

          <View>
            <Text style={styles.btnTexto}>{noticia.descricao}</Text>
          </View>

          <Button title="Nova notícia" onPress= {() => this.props.navigation.navigate('AdminNoticia')}></Button>
          
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