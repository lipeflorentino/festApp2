import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img from './BG/BG3.png'
import img2 from './BG/Hotel1.jpg'
import firebase from 'firebase'

export default class OndeFicar extends Component {

  constructor(props){
    super(props)

    this.state = {
      hospedagem: []
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

    firebase.database().ref("hospedagem").on("value", (snapshot) => {
      console.log('buscando...');
      let state = this.state;  
      state.hospedagem = [];          
      snapshot.forEach((item) => {
        state.hospedagem.push({
          key: item.key,
          nome: item.val().nome,
          instrucoes: item.val().instrucoes,
          mapaUrl: item.val().mapaUrl,
          endereco: item.val().endereco,
          email: item.val().email, 
          telefone: item.val().telefone, 
          imageUrl: item.val().imageUrl, 
          descricao: item.val().descricao
        })
      })
      this.setState(state);
    })
  }
  static navigationOptions = {
    title: 'Onde Ficar'
  };

  handleSubmit(id) {
    this.props.navigation.navigate('Local', {hospedagemId: id})
  }

  render() {
    if(this.state.hospedagem != '' && this.state.hospedagem){
      console.log('entrou!')            
      return (
        <View style={styles.container}>

          <View class="" style={styles.bgImage}>
          <Image source={img}/>
          </View>

            <ScrollView>
              <View style={styles.btnArea}>
              {                  
                  this.state.hospedagem.map((hospedagem, key) => {
                    return ( 
                      <TouchableOpacity key={key} onPress= {this.handleSubmit.bind(this, hospedagem.key)}>  
                        <View class="" style={styles.infoImage}>
                          <Image 
                            source={{uri: hospedagem.imageUrl}} 
                            style={{width: 440, height: 300}}
                          />
                        </View>
                        <View>
                          <Text style={styles.txtTitulo}>{hospedagem.nome}</Text>
                        </View>
                        <View>
                          <Text style={styles.txtInfo}>{hospedagem.descricao}</Text>
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