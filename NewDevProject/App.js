import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Scripts/Home';
import Programacao from './Scripts/Programacao'
import Artistas from './Scripts/Artistas'
import OndeFicar from './Scripts/OndeFicar'
import OndeComer from './Scripts/OndeComer'
import Noticias from './Scripts/Noticias'
import Agenda from './Scripts/Agenda'
import Videos from './Scripts/Videos'

const Navegador = createStackNavigator ({
  Home: {
    screen: Home
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
  OndeComer: {
    screen: OndeComer
  },
  Noticias: {
    screen: Noticias
  },
  Agenda: {
    screen: Agenda
  },
  Videos: {
    screen: Videos
  }
});

const AppContainer = createAppContainer(Navegador); 

export default AppContainer;

