import React, { Component } from 'react';
import {createStackNavigator, Header} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import PaginaInicial from './src/paginas/paginaInicial';
import PaginaRegistroProduto from './src/paginas/paginaRegistro';
import controladorProdutos from './src/Controladores/ControladorProdutos';

const Stack = createStackNavigator();
const ctrlProdutos = new controladorProdutos();

class App extends Component
{

  constructor(props)
  {
    super(props);

    this.state = {
      Produtos: ctrlProdutos.Produtos
    }
  }

  render()
  {
    return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name='paginaInicial'>
          {({navigation})=>(<PaginaInicial controladorProdutos={this.state.Produtos} irParaPaginaRegistro={()=>{navigation.navigate("paginaRegistro")}}/>)}
        </Stack.Screen>
        
        <Stack.Screen name='paginaRegistro'>
        {({navigation})=>(<PaginaRegistroProduto irParaPaginaInicial={()=>{navigation.navigate("paginaInicial")}}/>)}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>

    );
  }
}

export default App;