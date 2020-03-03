import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase'

export default class Cadastro extends Component {

  constructor(props){
    super(props)

    this.state = {      
      email: '', 
      senha: '',      
    }

    this.cadastrar = this.cadastrar.bind(this);    

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

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        alert('Usúario logado com sucesso!')        
      }
    })    

  }

  cadastrar(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then(()=>{
        this.props.navigation.navigate('Home')
    })
    .catch(error => {
      if(error.code == 'auth/weak-password'){
        alert('senha deve ter ao menos 6 caracteres!')
      }else if(error.code == 'auth/invalid-email'){
        alert('Email inválido!')
      }else{
        alert('Ocorreu um erro! Tente novamente mais tarde.')
      }
    })
  }  

  sair(){
    this.props.navigation.navigate('Home')
  }

  static navigationOptions = {
    title: 'Cadastro'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30, textAlign: 'center'}}>Cadastrar</Text>
        <TextInput style={styles.input} placeholder='Email' underlineColorAndroid="transparent" onChangeText={(email)=>{this.setState({email})}}></TextInput>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Senha' underlineColorAndroid="transparent" onChangeText={(senha)=>{this.setState({senha})}}></TextInput>
          
        <Button title="Entrar" onPress={this.cadastrar} />

        <Button title="Sair" onPress={this.sair} />  
          
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