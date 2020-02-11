import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img2 from './BG/ArtistaJazz3.png'
import firebase from 'firebase'

export default class Noticias extends Component {

  constructor(props){
    super(props)

    this.state = {
      noticia: []
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

    firebase.database().ref("noticias").on("value", (snapshot) => {
      console.log('buscando...');
      let state = this.state;  
      state.noticia = [];          
      snapshot.forEach((item) => {
        state.noticia.push({
          key: item.key,
          titulo: item.val().titulo,
          descricao: item.val().descricao,
          url: item.val().url, 
          data: item.val().data 
        })
      })
      this.setState(state);
    })
  }
  static navigationOptions = {
    title: 'Notícias'
  };

  handleSubmit(id) {
    this.props.navigation.navigate('Noticia', {noticiaId: id})
  }

  render() {
    if(this.state.noticia != '' && this.state.noticia){
      console.log('entrou!')      
      return (
        <View style={styles.container}>
          <View>
            <ScrollView>
            {                  
              this.state.noticia.map((noticia, key) => {
                                              
              return (                
                
                    <TouchableOpacity key={key} onPress= {this.handleSubmit.bind(this, noticia.key)}>  
                      <View class="" style={styles.bgImage}>
                        <Image 
                          source={{uri: noticia.url}}        
                          style={{width: "100%", height: 200}}                   
                        />
                      </View>
                      <View>
                        <Text style={styles.txtTitulo}>{noticia.titulo}</Text>
                      </View>
                      <View>
                        <Text style={styles.txtInfo}>{noticia.descricao}</Text>
                      </View>
                      <Text style={styles.btnTexto}>{noticia.data}</Text>
                    </TouchableOpacity>                                  
                                                         
              );
            })
          }
         </ScrollView>     
        </View>   
      </View>
      );
    }else{
      return(
        <View>
          <Text style={styles.txtInfo}>Ainda não há noticias cadastradas.</Text>
        </View>
      );
    }
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