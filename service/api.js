// BASE_URL aponta para o JSON local enquanto a API não está integrada.
// Quando a API estiver pronta, basta trocar para: 'http://localhost:3000/api'
const BASE_URL = 'http://localhost:3000/api/';

// Retorna todos os jogos
async function getData(endpoint) {
    try{
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if(response.ok == false){
        throw new Error(`Link do erro: ${response.statusText}`);
    }
    console.log(response);
    const data = await response.json()
    return data;
    }catch(error){
        alert(`mermão, rodar o código deu não. (Erro em ${error})`);
    }
}
async function getJogos() {
    return getdata('Jogos')
}


// Retorna todos os times
async function getTimes() {
    return getdata('Times')
}

// Retorna todos os competidores
async function getCompetidores() {
    return getdata('competidores')
}

// Retorna todos os confrontos
async function getconfrontos() {
    return getdata('confrontos')
}