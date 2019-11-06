import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase'

import Home from './Scripts/Home';
import Programacao from './Scripts/Programacao'
import Artistas from './Scripts/Artistas'
import OndeFicar from './Scripts/OndeFicar'
import OndeComer from './Scripts/OndeComer'
import Noticias from './Scripts/Noticias'
import Artista from './Scripts/Artista'
import Agenda from './Scripts/Agenda'
import Noticia from './Scripts/Noticia'
import Local from './Scripts/Local'
import LocalComer from './Scripts/LocalComer'
import Videos from './Scripts/Videos'


const Navegador = createStackNavigator ({
  Home: {
    screen: Home
  },
  Agenda: {
    screen: Agenda
  },
  Programacao: {
    screen: Programacao
  },
  Artistas: {
    screen: Artistas
  },
  OndeFicar: {
    screen: OndeFicar
  },
  Local: {
    screen: Local
  },
  LocalComer: {
    screen: LocalComer
  },
  OndeComer: {
    screen: OndeComer
  },
  Noticias: {
    screen: Noticias
  },
  Artista: {
    screen: Artista
  },
  Noticia: {
    screen: Noticia
  },
  Videos: {
    screen: Videos
  }
}); 

const AppContainer = createAppContainer(Navegador);
export default AppContainer;