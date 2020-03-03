import React, {Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Scripts/Home';
import Programacao from './Scripts/Programacao'
import Artistas from './Scripts/Artistas'
import AdminArtista from './Scripts/Admin/AdminArtista'
import AdminNoticia from './Scripts/Admin/AdminNoticia'
import AdminHospedagem from './Scripts/Admin/AdminHospedagem'
import AdminAlimentacao from './Scripts/Admin/AdminAlimentacao'
import AdminProgramacao from './Scripts/Admin/AdminProgramacao'
import OndeFicar from './Scripts/OndeFicar'
import OndeComer from './Scripts/OndeComer'
import Noticias from './Scripts/Noticias'
import Artista from './Scripts/Artista'
import Agenda from './Scripts/Agenda'
import Noticia from './Scripts/Noticia'
import Local from './Scripts/Local'
import LocalComer from './Scripts/LocalComer'
import Videos from './Scripts/Videos'
import Login from './Scripts/Login'
import Cadastro from './Scripts/Cadastro'


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
  AdminProgramacao: {
    screen: AdminProgramacao
  },
  Artistas: {
    screen: Artistas
  },
  AdminArtista: {
    screen: AdminArtista
  },
  
  OndeFicar: {
    screen: OndeFicar
  },
  AdminHospedagem: {
    screen: AdminHospedagem
  },
  AdminAlimentacao: {
    screen: AdminAlimentacao
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
  AdminNoticia: {
    screen: AdminNoticia
  },
  Artista: {
    screen: Artista
  },
  Noticia: {
    screen: Noticia
  },
  Videos: {
    screen: Videos
  },
  Login: {
    screen: Login
  },
  Cadastro: {
    screen: Cadastro
  },
}); 

const AppContainer = createAppContainer(Navegador);
export default AppContainer;