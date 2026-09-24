const BASE_URL = 'http://localhost:3000/api/';

async function getData(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (response.ok == false) {
            throw new Error(`Link do erro: ${response.statusText}`);
        }
        console.log(response);
        const data = await response.json();
        return data;
    } catch (error) {
        alert(`mermão, rodar o código deu não. (Erro em ${error})`);
    }
}

async function getJogos() {
    return getData('jogos');
}

async function getTimes() {
    return getData('times');
}

async function getCompetidores() {
    return getData('competidores');
}

async function getConfrontos() {
    return getData('confrontos');
}