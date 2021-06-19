//nome utilizado para gravar / ler os dados da cesta..
const CESTA_DE_COMPRAS = "cesta_de_compras";

//variavel para armazenar informações
var dados = {
    itens : [], //array para armazenar os produtos da cesta..
    total : 0 //valor total da cesta de compras
};

//função para adicionar 1 item na cesta de compras
export const adicionarItem = (produto) => {
    
    //verificar se já existe uma cesta de compras com itens adicionados..
    if(localStorage.getItem(CESTA_DE_COMPRAS) != null){
        //ler o conteudo da cesta de compras ja existente..
        dados = JSON.parse(localStorage.getItem(CESTA_DE_COMPRAS));
    }
    else{
        //inicializar os valores da cesta de compras..
        dados.itens = new Array(); //array vazio
        dados.total = 0; //total zero
    }

    //verificar se o item (produto) já foi adicionado na cesta de compras..
    var itemJaExiste = false;
    for(var i = 0; i < dados.itens.length; i++){
        //verificar se o item da cesta possui o mesmo id do produto selecionado

        console.log(dados.itens[i]);
        console.log(produto);

        if(dados.itens[i].id == produto.id){
            dados.itens[i].quantidade++; //incrementar a quantidade..
            itemJaExiste = true;
            break;
        }
    }

    //verificando se o item não existe na cesta de compras
    if(!itemJaExiste){
        //adicionando um novo item na cesta de compras
        produto.quantidade = 1;
        dados.itens.push(produto);
    }

    //atualizando o total da cesta de compras
    dados.total += produto.precoDecimal;

    //gravar os dados da cesta de compras na localstorage
    localStorage.setItem(CESTA_DE_COMPRAS, JSON.stringify(dados));
}

//função para remover 1 item da cesta de compras
export const removerItem = (produto) => {
    
    //recuperando os itens da cesta de compras..
    var dados = JSON.parse(localStorage.getItem(CESTA_DE_COMPRAS));

    //percorrer a cesta, procurando o produto..
    for(var i = 0; i < dados.itens.length; i++){
        //verificar se o produto foi encontrado..
        if(dados.itens[i].id == produto.id){
            //diminuir 1 unidade na quantidade do produto..
            dados.itens[i].quantidade--;
            break;
        }
    }

    //atualizar o total da cesta..
    dados.total -= produto.precoDecimal;

    //removendo da cesta de compras itens com quantidade = 0
    dados.itens = dados.itens.filter(
        function(item){
            return item.quantidade > 0;
        }
    );

    //armazenar na localstorage
    localStorage.setItem(CESTA_DE_COMPRAS, JSON.stringify(dados));
}

//função para retornar todos os items da cesta
export const obterItens = () => {
    //obter os dados da localstorage
    var result = localStorage.getItem(CESTA_DE_COMPRAS);
    
    if(result != null){
        //retornando os dados em JSON..
        return JSON.parse(result);
    }

    return null;
}

//função para apagar todos os itens do carrinho
export const removerItens = () => {
    //verificar se o usuario deseja realmente excluir todos os itens
    if(window.confirm('Deseja realmente excluir todos os itens?')){
        localStorage.removeItem(CESTA_DE_COMPRAS);
    }
}