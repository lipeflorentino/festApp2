import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img2 from './BG/Hotel1.jpg'
import img3 from './BG/Maps1.jpg'
import firebase from 'firebase'

export default class LocalComer extends Component {

  constructor(props){
    super(props)        
    this.state = {
      alimentacao: [], 
      alimentacaoId: this.props.navigation.getParam('alimentacaoId', null)        
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

    firebase.database().ref("alimentacao/"+this.state.alimentacaoId).on("value", (snapshot) => {
      console.log('buscando...');
      let state = this.state;            
      state.alimentacao = snapshot.val();      
      this.setState(state);
    })
  }

  static navigationOptions = {
    title: 'Onde Comer',
    opacity: 0.5
  };

  render() {
    const alimentacao = this.state.alimentacao
    console.log('hospedagem: ', alimentacao)
    return (
      <View style={styles.container}>

      <ScrollView>    
        <View>
        <Text style={styles.txtTitulo}>{alimentacao.nome}</Text>
        <Text style={styles.bordered}></Text>
        </View>  
        
          <View class="" style={styles.titleImage}>
              <Image 
                source={{uri: alimentacao.imageUrl}} 
                style={{width: 440, height: 300}}
              />
          </View>

          <View style={styles.blocoTxt}>
          <Text style={styles.txtId}>Email: </Text>
          <Text style={styles.txtInfo}>{alimentacao.email}</Text>
          </View>

          <View style={styles.blocoTxt}>
          <Text style={styles.txtId}>Telefone 1: </Text>
          <Text style={styles.txtInfo}>{alimentacao.telefone}</Text>
          </View>          

          <View style={styles.blocoTxt}>
          <Text style={styles.txtId}>Endereço: </Text>
          <Text style={styles.txtInfo}>{alimentacao.endereco}</Text>
          </View>

          <Text style={styles.bordered}></Text>

          <View>
          <Text style={styles.txtTitulo}>Como chegar: </Text>
          <Text style={styles.txtInfo}></Text>
          </View>

          <View class="" style={styles.titleImage}>
            <Image 
              source={{uri: alimentacao.mapaUrl}} 
              style={{width: 440, height: 300}}
            />
          </View>

          <Button title="Novo local" onPress= {() => this.props.navigation.navigate('AdminAlimentacao')}></Button>

      </ScrollView>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#68072F',
  },
  bordered: {
    borderTopColor: '#68072F',
    borderTopWidth: 3,
    marginLeft: 20,
    marginRight: 20
  },
  bgImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    position: 'absolute',
    height: 100,
    width: 100,
    opacity: 0.3 
  },
  titleImage:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10 
  },
  txtTitulo:{
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20
  },
  blocoTxt: {
    flexDirection: 'row'  
  },
  txtInfo:{
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtId: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'justify',
    marginLeft: 20,
    marginRight: 20
  }
 
});