const nome = 'Arthur'
const idade = 18

const soma = (x, y) => x + y

const curso = 'Sistemas de Informação'

//      COMO EXPORTAR
//  1- Exportar pelo nome da variável ou função
export { nome, idade, soma }

// 2- Exportar direto na criação
export const sobrenome = 'Negromonte'

// 3- Exportar com apelidos
export { curso as faculdade }

// 4- Exportar de forma padrão (default), sem precisar de {}
// só posso ter um default por arquivo
export default function subtrair(x, y) {
    return x - y
}

