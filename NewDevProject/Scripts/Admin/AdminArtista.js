import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler';



export default class AdminArtista extends Component {
  constructor(props){
    super(props)

    this.state = {
      descricao: '',
      id: '', 
      nome: '',
      url: ''
    }

    this.cadastrarArtista = this.cadastrarArtista.bind(this);

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

}

cadastrarArtista(e){
    e.preventDefault();
    console.log('entrou!')
    if(this.state.nome != '' && this.state.descricao != '' && this.state.url != ''){
        console.log('preparando...')
        let artistas = firebase.database().ref("artistas");
        let chave = artistas.push().key;
        console.log('inserindo...')
        artistas.child(chave).set({ 
            nome: this.state.nome,
            descricao: this.state.descricao,
            url: this.state.url            

        })

        alert('cadastrado com sucesso')
    }else{
        alert('digite todas as informações!')
    }
}

render() {

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nome</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(nome) => {this.setState({nome})}}/>

            <Text style={styles.texto}>Descrição</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(descricao) => {this.setState({descricao})}}/>
            
            <Text style={styles.texto}>Url da imagem</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(url) => {this.setState({url})}}/>

            <Button title="Novo artista" onPress={this.cadastrarArtista}></Button>
        </View>
    );

}

}

const styles = StyleSheet.create({





})