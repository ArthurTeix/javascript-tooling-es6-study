// Arquivo de configuração webPack (sempre deve estar na pasta raiz do meu projeto)

// Importando módulo path do node

const path = require('path') // O node utiliza o sistema de módulos CommonJS (como visto no package.json no "type") e não o padrão do JS que é o ES6

// Config de exportação do webpack
module.exports = {
    mode: 'development',
    entry: './src/index.js', // de onde é o arquivo de entrada para ser remodelado
    output:{ 
        path: path.resolve(__dirname, 'public', 'assets', 'js'),  // '__dirname': se refere a pasta atual | Após passo apenas o caminho cujo resolve deve seguir e jogar meus arquivos

        filename: 'bundle.js' // nome do arquivo que deve ser criado com o código já remodulado
    },

    module: {
        rules: [{ // Regras 
            exclude: /node_modules/, // excluir o node_modules da análise, muito grande e gasta tempo desnecessário

            test: /\.js$/, // os arquivos que terminam com .js

            type: 'javascript/auto',

            use: { // o que deve ser usado 

                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },

    devtool: 'source-map' // Mapeia os arquivos exatos no meu console, me indicando diretamente onde estão ocorrendo as execuções e os erros possíveis
}
