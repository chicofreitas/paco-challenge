# Paco Conversor

## Teste de desenvolvimento Paco

### Regras para o desenvolvimento:

- Backend em PHP,  preferencialmente com utilização do Laravel
- Frontend: HTML5, desejável uso de bootstrap como css
- Banco de dados Mysql

Desenvolver um conversor de moedas consumindo a api https://exchangeratesapi.io/
As moedas disponíveis devem ser: BRL, USD e CAD
Podem ser feitas as conversões entre todas as moedas (BRL -> USD, CAD -> USD...) Salvar um histórico de cada conversão realizada e salvar o valor da cotação em um tabela. Essa tabela deve ficar exibida abaixo dos campos de input da conversão. Sempre que uma nova conversão é realizada uma nova linha é adicionada nessa tabela(paginação é uma boa ideia).

Necessário um sistema de login:
A criação de usuário pode ser manual, implementar apenas a autenticação e verificação de sessão. Após o desenvolvimento, gravar um vídeo de até 5 minutos mostrando o resultado final e disponibilizar o código através do github. Enviar essas informações para o email hiparco@cloudpaco.com.br com o assunto: “[nome-candidato] - Teste de desenvolvimento” O desenvolvedor tem liberdade para adicionar novas funcionalidade e desenvolver as já propostas da maneira que achar melhor, não existe certo ou errado nesse momento.
## Resumo

Esta aplicação foi desenvolvida utilizando o [Laravel 9.x](https://laravel.com/docs/9.x) com o starter kit [Breeze + InertiaJS](https://laravel.com/docs/9.x/starter-kits#breeze-and-inertia) (para renderizar páginas em [ReactJS](https://reactjs.org/docs/getting-started.html)). A instalação do Laravel 9.x já traz consigo o suporte ao [TailwindCSS](https://tailwindcss.com/) como alternativa ao **Bootstrap**.

## Instalação

### Clone o repositório

    git clone https://github.com/chicofreitas/paco-challenge.git

### Instalando as dependências do Laravel e NodeJS

    php artisan update

em seguida

    npm update

### Configurando o Banco e Executando as Migrações

Antes de executar as migrações, é preciso criar um arquivo *.env* e configurar o banco de dados. Também é necessário criar o banco de dados no **MySQL** como mesmo nome
disponível no *.env*. Na instalação do Laravel já existe um arquivo *.env.example*. Basta nomeá-lo para *.env* e modificar as linhas abaixo

    ...
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=paco
    DB_USERNAME=root
    DB_PASSWORD=fr31t45
    ...

Feito isto, agora podemos executar as migrações e alimentar o banco (opcional) com alguns registros de testes, incluindo o usuário Guest

    php artisan migrate --seed

desta forma é possível realizar o login com o usuário

    guest@paco.com

e a senha

    password

Case deseje apenas migrar as tabelas, basta remover o parâmetro *--seed* 

    php artisan migrate

## Executando a aplicação

Após realizada toda configuração acima, abra dois terminais (um para o servidor do artisan e outro para o vite) e execute os comandos abaixo em cada um deles

    php artisan serve

para iniciar o servidor local para acessar a aplicação no endereço *http://localhost:8000*. E

    npm run dev

para iniciar o servidor Node por meio do Vite. O endereço que o último comando exibe não é importante no momento, bastando apenas que seja acessado o *http://localhost:8000* no navegador.