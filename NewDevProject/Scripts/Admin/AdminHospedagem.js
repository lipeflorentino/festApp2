import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler';



export default class AdminHospedagem extends Component {
  constructor(props){
    super(props)

    this.state = {
      descricao: '',
      email: '', 
      nome: '',
      mapaUrl: '',
      imageUrl: '',
      telefone: '',
      instrucoes: '',
      endereco: '',
    }

    this.cadastrarHospedagem = this.cadastrarHospedagem.bind(this);

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

cadastrarHospedagem(e){
    e.preventDefault();
    console.log('entrou!')
    if(this.state.nome != '' && this.state.descricao != '' && this.state.mapaUrl != '' && this.state.imageUrl != '' && this.state.endereco != '' && this.state.email != '' && this.state.telefone != '' && this.state.instrucoes != ''){
        console.log('preparando...')
        let hospedagem = firebase.database().ref("hospedagem");
        let chave = hospedagem.push().key;
        console.log('inserindo...')
        hospedagem.child(chave).set({ 
            nome: this.state.nome,
            descricao: this.state.descricao,
            imageUrl: this.state.imageUrl,
            mapaUrl: this.state.mapaUrl,            
            telefone: this.state.telefone,
            endereco: this.state.endereco,
            email: this.state.email,
            instrucoes: this.state.instrucoes,

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
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(imageUrl) => {this.setState({imageUrl})}}/>

            <Text style={styles.texto}>Url do mapa</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(mapaUrl) => {this.setState({mapaUrl})}}/>

            <Text style={styles.texto}>Email</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(email) => {this.setState({email})}}/>

            <Text style={styles.texto}>Endereço</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(endereco) => {this.setState({endereco})}}/>

            <Text style={styles.texto}>Telefone</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(telefone) => {this.setState({telefone})}}/>

            <Text style={styles.texto}>Instruções</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(instrucoes) => {this.setState({instrucoes})}}/>                        
            
            <Button title="Nova hospedagem" onPress={this.cadastrarHospedagem}></Button>
        </View>
    );

}

}

const styles = StyleSheet.create({





})