import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, Header} from "@react-navigation/stack";

import PaginaInicial from './src/paginas/paginaInicial';
import PaginaRegistroProduto from './src/paginas/paginaRegistro';
import conectorbancoDeDados from './src/Controladores/BancoDeDados';
import controladorProdutos from './src/Controladores/ControladorProdutos';//PENDENTE...

const Stack = createStackNavigator();

class App extends Component
{

  constructor()
  {
    super();
    
    this.state = {carregando: true, Produtos:[]};
    this.acessoBD;

    this.atualizaProdutos = this.atualizaProdutos.bind(this);
  }

  render()
  {
    if(this.state.carregando)
    {
      return (
        <View style={{justifyContent:'center',flex:1}}>
          <Text style={{textAlign:'center',fontSize:36}} >CARREGANDO...</Text>
        </View>
      );
    }
    else
    {
      return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='paginaInicial' screenOptions={{headerShown: false}}>

          <Stack.Screen name='paginaInicial'>
            {({navigation})=>
            (<PaginaInicial controladorProdutos={this.state.Produtos} 
                            irParaPaginaRegistro={()=>{navigation.navigate("paginaRegistro")}}/>)}
          </Stack.Screen>
          
          <Stack.Screen name='paginaRegistro'>
          {({navigation})=>
          (<PaginaRegistroProduto  irParaPaginaInicial={()=>{navigation.navigate("paginaInicial")}} 
                                   registrarProduto={(novoProduto)=>{this.acessoBD.insereNovoProduto(novoProduto).then(this.atualizaProdutos)}}/>)}
          </Stack.Screen>
          
        </Stack.Navigator>
      </NavigationContainer>
      );
    }
  }

  componentDidMount()
  {
    this.acessoBD =  new conectorbancoDeDados(this.atualizaProdutos);
  }

  atualizaProdutos()
  {
    if(!this.state.carregando){this.setState({carregando: true, Produtos:[]});}
    this.acessoBD.CarregaProdutos().then((produtosAtualizados)=>{this.setState({carregando: false, Produtos: produtosAtualizados});});
  }

  componentWillUnmount()
  {
    this.acessoBD.fechaBancoDeDados();
  }
}

export default App;