import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import img2 from './BG/Agenda1.jpg'
import img3 from './BG/Maps1.jpg'
import firebase from 'firebase'

export default class Agenda extends Component {

  constructor(props){
    super(props)        
    this.state = {
      agenda: [], 
      progId: this.props.navigation.getParam('progId', null)        
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

    firebase.database().ref("programacao/"+this.state.progId).on("value", (snapshot) => {
      console.log('buscando...');
      let state = this.state;            
      state.agenda = snapshot.val();      
      this.setState(state);
    })
  }
  static navigationOptions = {
    title: 'Agenda',
    opacity: 0.5
  };

  render() {    
    const agenda = this.state.agenda
    return (
      <View style={styles.container}>

      <ScrollView>    
        <View>
      <Text style={styles.txtTitulo}>{agenda.titulo}</Text>
        <Text style={styles.bordered}></Text>
        </View>  
        
          <View class="" style={styles.titleImage}>
          <Image 
            source={{uri: agenda.progImg}}  
            style={{width: '100%', height: "100%"}}           
          />
          </View>

          <View style={styles.blocoTxt}>
          <Text style={styles.txtId}>Data: </Text>
          <Text style={styles.txtInfo}>{agenda.data}</Text>
          </View>

          <View style={styles.blocoTxt}>
          <Text style={styles.txtId}>Horário: </Text>
          <Text style={styles.txtInfo}>{agenda.horario}</Text>
          </View>

          <View style={styles.blocoTxt}>
          <Text style={styles.txtId}>Endereço: </Text>
          <Text style={styles.txtInfo}>{agenda.endereco}</Text>
          </View>

          <Text style={styles.bordered}></Text>

          <View style={styles.blocoSecTxt}>
          <Text style={styles.txtTitulo}>Como chegar: </Text>
          <Text style={styles.txtSecInfo}>{agenda.instrucoes}</Text>
          </View>

          <View class="" style={styles.titleImage}>
          <Image 
            source={{uri: agenda.url}} 
            style={{width: '100%', height: "100%"}}            
          />
          </View>

          <Button title="Nova programação" onPress= {() => this.props.navigation.navigate('AdminProgramacao')}></Button>

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
    marginBottom: 10,
    width: 400,
    height: 200
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
  blocoSecTxt: {
    flex: 1,
    justifyContent: 'center'    
  },
  txtInfo:{
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtSecInfo:{
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20
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