import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler';



export default class AdminProgramacao extends Component {
  constructor(props){
    super(props)

    this.state = {
      instrucoes: '',
      data: '', 
      endereco: '',
      url: '', 
      horario: '', 
      progImg: '', 
      titulo: ''

    }

    this.cadastrarProgramacao = this.cadastrarProgramacao.bind(this);

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

cadastrarProgramacao(e){
    e.preventDefault();
    console.log('entrou!')
    if(this.state.instrucoes != '' && this.state.data != '' && this.state.url != '' && this.state.endereco != '' && this.state.horario != '' && this.state.progImg != '' && this.state.titulo != ''){
        console.log('preparando...')
        let programacoes = firebase.database().ref("programacao");
        let chave = programacoes.push().key;
        console.log('inserindo...')
        programacoes.child(chave).set({ 
            instrucoes: this.state.instrucoes,
            data: this.state.data,
            url: this.state.url, 
            progImg: this.state.progImg, 
            endereco: this.state.endereco,
            titulo: this.state.titulo, 
            horario: this.state.horario


        })

        alert('cadastrado com sucesso')
    }else{
        alert('digite todas as informações!')
    }
}

render() {

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Titulo</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(titulo) => {this.setState({titulo})}}/>

            <Text style={styles.texto}>Instruções</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(instrucoes) => {this.setState({instrucoes})}}/>

            <Text style={styles.texto}>Endereço</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(endereco) => {this.setState({endereco})}}/>
            
            <Text style={styles.texto}>Url da imagem</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(progImg) => {this.setState({progImg})}}/>

            <Text style={styles.texto}>Geolocalização</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(url) => {this.setState({url})}}/>

            <Text style={styles.texto}>Data</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(data) => {this.setState({data})}}/>

            <Text style={styles.texto}>Horario</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(horario) => {this.setState({horario})}}/>


            <Button title="Nova programação" onPress={this.cadastrarProgramação}></Button>
        </View>
    );

}

}

const styles = StyleSheet.create({





})