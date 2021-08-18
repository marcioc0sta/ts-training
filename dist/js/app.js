import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
const importButton = document.querySelector('#importaDados');
if (importButton) {
    importButton.addEventListener('click', event => {
        event.preventDefault();
        controller.importData();
    });
}
else {
    throw Error('Botão de importação de dados não encontrado');
}
