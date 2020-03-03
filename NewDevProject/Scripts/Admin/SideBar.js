import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default class SideBar extends Component {
        
    render(){        
        return (
            <View style={[ styles.container, { backgroundColor: '#fff' } ]}>                    
                <Button title="Login" onPress= {() => this.props.navigation.navigate('Login') }></Button>                                                                    
            </View>
        );
    } 
};

const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#68072F',
    },
    iconeImage: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: 50
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
    btnArea:{
      flexDirection: 'row',
      marginTop: 50,
      height: 0
    },
    btnArea2:{
      flexDirection: 'row',
      marginTop: 150,
      height: 0
    },
    btnArea3:{
      flexDirection: 'row',
      marginTop: 150,
      height: 0
    },
  
    botao:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      margin: 35,
      borderRadius: 9
    },
    botaoColor1:{
      backgroundColor: '#8A007E',
    },
    btnTexto:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffffff'
    }
  });