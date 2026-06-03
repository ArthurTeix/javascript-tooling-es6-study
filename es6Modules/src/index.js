//   IMPORTANDO DE OUTRO ARQUIVO (modulo1.js)
import { nome, idade, soma } from './modulo1.js'

// importando com apelidos, caso já exista variável com mesmo nome
import { sobrenome as sobrenome2 } from './modulo1.js'

// importando já com apelido predefinido no export
import { faculdade } from './modulo1.js'

/*
Para importar todos os elementos com 'export' antes da declaração de variáveis de uma única vez, posso usar

import * as MeuModulo from './modulo1.js'

E depois acessar cada elemento como um objeto, ex: 'MeuModulo.nome' ou 'MeuModulo.sobrenome'
*/

// importando os default
import qualquerNome from './modulo1.js'

const sobrenome = 'Teixeira'

console.log(`Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos.`) // Arthur Teixeira
console.log(`Meu nome é ${nome} ${sobrenome2}, tenho ${idade} anos.`) // Arthur Negromonte

console.log(soma)
console.log(soma(3, 4))

console.log(`Meu nome é ${nome} e faço ${faculdade}.`)

console.log(qualquerNome)
console.log(qualquerNome(7, 2))
