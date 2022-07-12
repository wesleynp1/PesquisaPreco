import React from "react";
import { View,Text } from "react-native";


//REPRESENTAÇÃO GRÁFICA DE UM PRODUTO

const Produto = ({nome, loja, preco})=>
    {
        return(
            <View style={{  margin:10,backgroundColor: "cyan"}}>
                <Text style={estiloTexto}>{nome} está sendo a venda por R$ {preco} em {loja}</Text>
            </View>
        );
    }


let estiloTexto = {
    fontSize: 30,
    color:"black",
    textAlign:"center",
    borderColor:"black",
    borderStyle:"solid",
    borderWidth:2,
    margin:2,
    padding: 2
    };

export default Produto;