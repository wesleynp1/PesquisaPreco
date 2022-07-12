import React, { Component } from "react";
import { View,Text,Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Produto from "../Componentes/Produto";


const PaginaInicial = ({irParaPaginaRegistro,controladorProdutos})=>
{
        return(
            <View style={{flex:1}}>
                <Text style={{color:"#FFFFFF", textAlign:"center",fontSize: 36,flex:1,backgroundColor:"green"}}>Pesquisa Preço</Text>
                
                <SafeAreaView style={{flex:8}}>
                    <FlatList 
                        data={controladorProdutos}
                        renderItem={({item})=>(<Produto nome={item.nome} preco={item.preco} loja={item.loja}/>)}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>

                <Button style={{flex:1}} color={"red"} title="REGISTRAR PRODUTOS" onPress={irParaPaginaRegistro}/>               
            </View>
        );
    }

export default PaginaInicial;