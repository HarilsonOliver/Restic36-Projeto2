# Sistema de Login com Dashboard de Usuário

## Descrição do Projeto
O **Sistema de Login com Dashboard de Usuário** é uma aplicação web onde os usuários podem se cadastrar, fazer login e acessar um painel de controle personalizado (dashboard). Cada usuário logado tem acesso a dados ou funcionalidades específicas, como um perfil ou informações personalizadas. O sistema também inclui navegação protegida por autenticação e um design responsivo utilizando Angular Material.

## Instruções para Executar

### Pré-requisitos:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Angular CLI](https://angular.io/cli)
- [json-server](https://github.com/typicode/json-server) para simulação de backend

### Passos:
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/HarilsonOliver/Restic36-Projeto2.git
   cd Restic36-Projeto2
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o json-server:**
   Em um terminal separado, execute o seguinte comando para simular o backend:
   ```bash
   json-server --watch db.json
   ```

4. **Execute a aplicação Angular:**
   ```bash
   ng serve
   ```
   A aplicação estará disponível em `http://localhost:4200/`.

## Tecnologias Utilizadas
- **Angular**: Framework JavaScript para construção de interfaces de usuário dinâmicas.
- **Angular Material**: Biblioteca de componentes de UI prontos, usados para criar um design responsivo e moderno.
- **json-server**: Ferramenta para simular um backend RESTful, permitindo simular cadastro e autenticação de usuários.
- **HTML5, CSS3, TypeScript**: Tecnologias padrão para criação de páginas web dinâmicas e interativas.

## Funcionalidades
- **Cadastro e Login**: Permite que novos usuários se registrem e façam login.
- **Dashboard Personalizado**: Após o login, o usuário acessa um painel com informações personalizadas.
- **Proteção de Rotas**: Apenas usuários autenticados podem acessar o dashboard.
- **Logout**: Usuários podem sair de suas contas a qualquer momento.

## Melhorias Futuras
- **Integração com um Backend Real**: Migrar a lógica de autenticação para um backend real, usando Node.js, Django ou outro framework.
- **Sistema de Recuperação de Senha**: Adicionar a funcionalidade para recuperação de senha via e-mail.
- **Controle de Acessos por Níveis**: Implementar diferentes níveis de acesso com base no tipo de usuário.
- **Integração com APIs Externas**: Adicionar integração com APIs de terceiros para enriquecer os dados exibidos no dashboard.

---

**Autor**: Harilson Pires
