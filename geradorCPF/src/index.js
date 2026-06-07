// Já que o GeraCPF também importa o ValidaCPF, então um único import acaba englobando dois arquivos (GeraCPF e ValidaCPF)
import GeraCPF from './modules/GeraCPF.js'

import './assets/css/style.css'

// Função IIFE (auto executada)
(function(){
    const gerador = new GeraCPF()
    const cpfGerado = document.querySelector(".cpf-gerado")

    cpfGerado.innerHTML = gerador.geraNovoCpf()
})();
