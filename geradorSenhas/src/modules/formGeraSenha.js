import geraSenha from "./geradores.js"

const senhaGerada = document.querySelector(".senha-gerada")

const quantCaracteres = document.querySelector(".quant-senha")
const chkNumeros = document.querySelector(".chk-numeros")
const chkMaiusculas = document.querySelector(".chk-maiusculas")
const chkMinusculas = document.querySelector(".chk-minusculas")
const chkSimbolos = document.querySelector(".chk-simbolos")

const btnGerador = document.querySelector(".gera-senha")

export default () => {
    btnGerador.addEventListener('click', () => {
        senhaGerada.innerHTML = gerar()
    })
}

function gerar() {
    const senha = geraSenha(
        quantCaracteres.value,
        chkNumeros.checked,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkSimbolos.checked
    )

    return senha || 'Nada Selecionado!'
}