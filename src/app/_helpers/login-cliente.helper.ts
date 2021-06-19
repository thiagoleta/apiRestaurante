const DADOS_CLIENTE = "dados_cliente";

export const adicionarCliente = (dados) => {
    localStorage.setItem(DADOS_CLIENTE, dados);
}

export const removerCliente = () => {
    localStorage.removeItem(DADOS_CLIENTE);
}

export const obterCliente = () => {
    return JSON.parse(
        localStorage.getItem(DADOS_CLIENTE)
    );
}

