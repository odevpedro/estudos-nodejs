# Node.js

## Módulos

### Módulos Internos

Módulos que nós desenvolvemos, estão presentes nas pastas do nosso projeto e precisamos exportá-los.

- `module.exports`: Importamos onde precisamos usar.
- Para importar usamos o comando `require`.

### Core Modules

Módulos internos ao Node.js. Os principais core modules são:

- `url`
  - Serve para decompor uma URL que passamos para o método `parser`.
  - Componentes retornados: `host`, `path`, `search`, `query`.
  - Mudamos a lógica da nossa aplicação a partir desses retornos.
  - O parse seria buscar dentro da URL.

- `http`
  - Nos permite criar um servidor HTTP, recebe uma requisição e devolve um HTML como resposta.
  - Métodos: `createServer` - inicializa o servidor, `listen` para determinar a porta.
  - StatusCode.

- `fs`
- `path`

Importante conhecê-los para conciliar com módulos de terceiros.

### Módulos Externos

Podem ser instalados via NPM.

- Para inicializar o gerenciador no projeto, use: `npm init`.
- São salvos no `node_modules`.
- Fazemos a instalação desses módulos através do comando `npm install`.

### Exports

Também podemos utilizar o `export` e o `import` do ES6 (importação e exportação).

- `.mjs`: Tanto na exportação como no uso.

## Argumentos

- `process.argv`

## Console

Utilize a ferramenta `chalk` para melhorar a visualização da saída, fornecendo feedback baseado em cores.

## Entrada de Dados

Utilize o módulo `readline`.

## Event Loop

## Event Emitter

Se comporta como eventos do navegador. Para usar, instânciamos a classe `EventEmitter`.

## Method Execution

### Síncrono

Síncrono: o código espera ser totalmente executado para prosseguir.

### Assíncrono

Forma assíncrona: o código continua progredindo e em um ponto futuro obtém a resposta de execução assíncrona.

## Erros

- `try catch`
- `throw`

## Middleware

Função que fica entre nosso request e response. Validação de token, verificar status do usuário de modo a liberar ou não certos recursos.


Mapa mental dos estudos feitos até o presente momento
[https://whimsical.com/git-R1qE3VeAtc7PQXKS42kR1t](https://whimsical.com/node-js-UmSbjxgy7QpUDFD74WVenS)https://whimsical.com/node-js-UmSbjxgy7QpUDFD74WVenS
