import React, { Component } from "react";
import { View,Text,Button } from "react-native";

class PaginaRegistroProduto extends Component
{
    render()
    {
        return(
            <View>
                <Text style={{color:"black"}}>Registre um produto</Text>
                <Button title="VOLTAR" onPress={this.props.irParaPaginaInicial}/>
            </View>
        );
    }
}

export default PaginaRegistroProduto;