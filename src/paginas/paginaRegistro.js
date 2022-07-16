import React, { Component } from "react";
import { View,Text,Button, TextInput,StyleSheet } from "react-native";

class PaginaRegistroProduto extends Component
{
    constructor(props)
    {
        super(props);
        this.state={nome:'nulo',loja:'nulo',preco:0};
    }

    render()
    {
        var novoProduto = {nome:this.state.nome, loja:this.state.loja, preco:this.state.preco};

        return(
            <View>
                <Text style={{color:"black"}}>Registre um produto</Text>

                <TextInput style={estiloTexto} placeholderTextColor="black" placeholder="Descreva o produto..." onChangeText={t=>{this.setState({nome:t})}}/>
                <TextInput style={estiloTexto} placeholderTextColor="black" placeholder="Diga onde ele esta a venda..." onChangeText={t=>{this.setState({loja:t})}}/>
                <TextInput style={estiloTexto} placeholderTextColor="black" placeholder="Digite quanto ele custa..." keyboardType="numeric" onChangeText={t=>{this.setState({preco:t})}}/>

                <Button title="REGISTRAR" color="red" onPress={()=>{this.props.registrarProduto(novoProduto)}}/>

                <Button title="VOLTAR" onPress={this.props.irParaPaginaInicial}/>
            </View>
        );
    }


}


let estiloTexto = StyleSheet.create({
    
    fontSize: 12,
    color:"black",
    textAlign:"center",
    borderColor:"black",
    borderStyle:"solid",
    borderWidth:2,
    margin:2,
    padding: 2
    })
;

export default PaginaRegistroProduto;