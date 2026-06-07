// Função de gerar número (código) aleatório para usar o ASCII do teclado e gerar o caractere selecionado
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

// Códigos de letras maiúsculas vão do 65 ao 90
const geraMaiuscula = () => String.fromCharCode(random(65, 91))

// Códigos de letras minúsculas vão do 97 ao 122
const geraMinuscula = () => String.fromCharCode(random(97, 123))

// Códigos de números vão do 48 ao 57
const geraNumeros = () => String.fromCharCode(random(48, 58))

// Códigos de símbolos são misturados, então vou gerar manualmente
const simbolos = "!@#$%¨&*()_-+=`[{ª~^]}º,.<>;:/?°|§"
const geraSimbolos = () => simbolos[random(0, simbolos.length)]

console.log(geraSimbolos())
