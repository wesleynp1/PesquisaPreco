import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);


const nomeBD = "BancoDeDadosPesquisaPreco";
const versaoBD = 1.0;
const displayNameBD = "Banco de Dados de Pesquisa Preços";
const tamanhoBD = 200000;

class conectorbancoDeDados
{
    constructor(AtualizaProdutos)
    {
        this.bancoDeDados;

        this.IniciarBancoDeDados()
            .then(AtualizaProdutos);
    }

    IniciarBancoDeDados()
    {
        return new Promise ((resolve)=>{SQLite.openDatabase(nomeBD,versaoBD,displayNameBD,tamanhoBD)
            .then(BD=>{
                this.bancoDeDados=BD;
                this.bancoDeDados.executeSql("SELECT 1 FROM Produtos;") //Testa para saber se o banco de dados existe
                .then(resolve(this.bancoDeDados))
                .catch(()=>{
                    this.bancoDeDados.executeSql("CREATE TABLE IF NOT EXISTS Produtos(idProd INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,preco DECIMAL(6,2),nome VARCHAR(255), loja VARCHAR(255));")                    
                })                    
            })
        })                   
    }

    CarregaProdutos()
    {
        let produtosAtualizados = [];

        return new Promise ((resolve)=>{this.bancoDeDados.transaction((tx)=>{tx.executeSql("SELECT * FROM Produtos;")
                         .then(([tx,results])=>{
                            for(let i=0;i<results.rows.length;i++)
                            {
                                var novoId = results.rows.item(i).idProd;
                                var novoNome = results.rows.item(i).nome;
                                var novoPreco = results.rows.item(i).preco;
                                var novoLoja = results.rows.item(i).loja;

                                produtosAtualizados.push({id:novoId,nome:novoNome,preco:novoPreco,loja:novoLoja})
                            }

                            resolve(produtosAtualizados);
                            })
                        })
                    })                        
    }

    insereNovoProduto(novoProduto)
    {
        return new Promise(((resolve)=>{
            this.bancoDeDados.executeSql("INSERT INTO Produtos(nome, loja, preco)values('"+ novoProduto.nome +"','"+ novoProduto.loja +"',"+ novoProduto.preco+");")
            .then(()=>{resolve();});
        }));
    }

    fechaBancoDeDados()
    {
        this.bancoDeDados.close();
    }
}

export default conectorbancoDeDados;