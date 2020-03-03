import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawer, Container, Header } from 'native-base';
import imgBG  from './BG/BG3.png'
import img1 from './BG/Botao1.png'
import img2 from './BG/Botao2.png'
import img3 from './BG/Botao3.png'
import img4 from './BG/Botao4.png'
import img5 from './BG/Botao5.png'
import img6 from './BG/Botao6.png'
import SideBar from './Admin/SideBar'

export default class Home extends Component {

  static navigationOptions = {
    header: null, 
    title: 'Home'
  };

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };    

  render() {
    return (
      <View style={styles.container}>

        {/* <Drawer
          ref={(ref) => { this.drawer = ref; }}          
          content={<SideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}>
          <Container>
            <Header>
                <Container style={{flexDirection: 'row'}}>
                        <Icon onPress={() => this.openDrawer()} name="bars" size={30} color="#fff" />
                </Container>
            </Header>                             
          </Container>
        </Drawer> */}

        <View class="" style={styles.bgImage}>
          <Image source={imgBG}/>
        </View>
             
      
        <View style={styles.btnArea}>
          
            <TouchableOpacity style = {styles.botao} onPress= {() => this.props.navigation.navigate('Programacao')}>
              
              <View class="" style={styles.iconeImage}>
              <Image source={img1}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.botao}  onPress= {() => this.props.navigation.navigate('Artistas')}>
              <View class="" style = {styles.iconeImage}>
              <Image source={img2}/>
              </View>
            </TouchableOpacity>
        </View>

        <View style={styles.btnArea2}>

            <TouchableOpacity style = {styles.botao} onPress= {() => this.props.navigation.navigate('OndeFicar') }>
              <View class="" style = {styles.iconeImage}>
              <Image source={img3}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.botao} onPress= {() => this.props.navigation.navigate('OndeComer') }>
              <View class="" style = {styles.iconeImage}>
              <Image source={img4}/>
              </View>
            </TouchableOpacity>
        </View>

        <View style={styles.btnArea3}>
            <TouchableOpacity style = {styles.botao} onPress= {() => this.props.navigation.navigate('Noticias') }>
              <View class="" style = {styles.iconeImage}>
              <Image source={img5}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.botao} onPress= {() => this.props.navigation.navigate('Login') }>
              <View class="" style = {styles.iconeImage}>
              <Image source={img6}/>
              </View>
            </TouchableOpacity>
        </View>      

        <View style={styles.btnArea3}>            
            <Button title="Login" onPress= {() => this.props.navigation.navigate('Login') }></Button>            
        </View>

      </View>
    );
  }
}

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