# AGENTS.md

## Visão geral
Esta aplicação é um projeto desenvolvido para conectar e ajudar pessoas que desejam aprender mais sobre música e teclado.
O objetivo é criar um ambiente onde os usuários possam aprender sobre música, testar a sua percepção musical e acompanhar a sua evolução através de um dashboard.
Além disso, ele centraliza em um só lugar a evolução do aprendizado, juntamente com uma jornada de aprendizado.
Os principais usuários são pessoas interessadas em aprender sobre música, teclado e teoria musical do zero ou aprimorar a sua percepção musical.

## Tecnologias

- Banco de dados: MySql
- Backend: Node.js
- Front-end: HTML, CSS, JS
- Bibliotecas: Chart-js


## Comandos

- npm i: Instala as dependências do projeto que estão no package.json
- npm start: Inicia o servidor.

## Arquitetura

O projeto segue a arquitetura padrão do projeto web-data-viz, estruturado em camadas.

- **Estrutura das principais pastas:**
  - public/: Contém todos os arquivos de front-end (HTML, CSS e JS) que o usuário visualiza e interage no navegador.
  - src/: Contém a lógica do back-end em Node.js, dividida em subpastas:
    - routes/: Define os caminhos (endpoints) da API por onde os dados são enviados e recebidos.
    - controllers/: Contém as regras de negócio e validações que os dados recebidos precisam passar antes de ir para o banco.
    - models/: Responsável por montar e executar as queries SQL (comandos do banco de dados).
    - database/: Contém o arquivo config.js com a configuração de conexão e credenciais com o MySQL.
  - app.js: Arquivo principal raiz que inicia o servidor Node.js.
  - .env: Armazena as variáveis de ambiente e credenciais de acesso.

- **Fluxo de uma requisição:**
  1. Passo 1 (Front-end): O usuário interage com uma página (ex: preenche um formulário em cadastro.html), e o JavaScript envia os dados via fetch.
  2. Passo 2 (Routes): A requisição chega no arquivo de rotas em /src/routes, que direciona a chamada para o controller correto.
  3. Passo 3 (Controllers): O controller em /src/controllers valida os dados recebidos e prepara a regra de negócio.
  4. Passo 4 (Models): O model em /src/models monta a query SQL (ex: INSERT, SELECT).
  5. Passo 5 (Database/MySQL): O arquivo de configuração em /src/database/config.js executa a query no MySQL e o resultado retorna pelo caminho inverso até a tela do usuário.

- **Onde criar novos arquivos:**
  - Telas, estilos e scripts visuais vão dentro da pasta public/.
  - Novas rotas vão em src/routes/.
  - Novas lógicas e validações vão em src/controllers/.
  - Novas consultas/comandos SQL vão em src/models/.

- **Como os diretórios se relacionam:**
  O Front-end (public) consome as rotas (routes), que chamam os controladores (controllers), que utilizam os modelos (models) para consultar o banco de dados (database/config.js), fechando o ciclo.


## Padrões de desenvolvimento

- Variáveis e atribuições: Utilizar const por padrão e let apenas quando houver necessidade de reatribuição.
- Nomenclatura (Variáveis, Funções e Arquivos): Utilizar o padrão camelCase para nomear tudo (ex: nomePessoa, calcularPontuacao, usuarioController.js).
- Padrão de commits: Utilizar Commits simplificado (ex: feat: adiciona quiz de percepcao, fix: corrige rota de cadastro, style: ajusta layout da home).

## Cuidados e restrições

- Credenciais e Segurança: Não expor senhas, credenciais do banco de dados ou chaves sensíveis diretamente no código-fonte público; utilizar sempre o arquivo .env para dados sensíveis.
- Estrutura de Pastas: Não alterar ou mover arquivos do modelo web-data-viz (como a estrutura de src/routes, src/controllers, src/models e public) sem seguir o fluxo padrão de requisição estabelecido.
- Tratamento de Erros: Garantir que todas as rotas e requisições tenham tratamento de erros adequado para evitar que a aplicação quebre caso ocorra uma falha de conexão com o banco.
- Validação de Dados: Nunca enviar dados de formulários diretamente para o banco sem antes realizar as validações necessárias no front-end e no controller.

## Regra geral: 

Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto.
