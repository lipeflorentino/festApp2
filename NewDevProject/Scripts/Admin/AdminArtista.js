import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import firebase from 'firebase'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'



export default class AdminArtista extends Component {
  constructor(props){
    super(props)

    this.state = {
      descricao: '',
      id: '', 
      nome: '',
      url: ''
    }

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

}

cadastrarArtista(){
    if(this.state.nome != '' && this.state.descricao != '' && this.state.url != ''){
        let artistas = firebase.database().ref("artistas");
        let chave = artistas.push().key;

        artistas.child(chave).set({ 
            nome: this.state.nome,
            descricao: this.state.descricao,
            url: this.state.url

        })
    }
}

render() {

    return (
        <View>
            <ScrollView>  
                <FormLabel>Name</FormLabel>
                <FormInput onChangeText={someFunction}/>
                <FormValidationMessage>Error message</FormValidationMessage>
            </ScrollView>    
        </View>
    );

}

}

const styles = StyleSheet.create({





})