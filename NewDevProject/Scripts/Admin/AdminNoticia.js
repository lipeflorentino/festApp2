import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler';



export default class AdminNoticia extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: '',
      titulo: '', 
      descricao: '',
      url: ''
    }

    this.cadastrarNoticia = this.cadastrarNoticia.bind(this);

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

cadastrarNoticia(){
    console.log('entrou!')
    if(this.state.data != '' && this.state.titulo != '' && this.state.url != '' && this.state.descricao){
        console.log('preparando...')
        let noticias = firebase.database().ref("noticias");
        let chave = noticias.push().key;
        console.log('inserindo...')
        noticias.child(chave).set({ 
            data: this.state.data,
            titulo: this.state.titulo,
            url: this.state.url,
            descricao: this.state.descricao
        })

        alert('cadastrado com sucesso')
    }else{
        alert('digite todas as informações!')
    }
}

render() {

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Título</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(titulo) => {this.setState({titulo})}}/>

            <Text style={styles.texto}>Data</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(data) => {this.setState({data})}}/>
            
            <Text style={styles.texto}>Url da imagem</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(url) => {this.setState({url})}}/>

            <Text style={styles.texto}>Descrição</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(descricao) => {this.setState({descricao})}}/>

            <Button title="Nova noticia" onPress={this.cadastrarNoticia}></Button>
        </View>
    );

}

}

const styles = StyleSheet.create({





})