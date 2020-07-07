# Be My Hero
O Be The Hero é um projeto que visa um meio de conectar ONG'S que necessitam de algum tipo de ajuda a pessoas que podem contribuir.
Esse projeto foi desenvolvido com base na Semana OmniStack 11.0, um evento da @Rocketseat, onde foi construida uma aplicação completa com Node.js no back-end e ReactJS no front-end.

## Features
* A ONG pode fazer login na aplicação por meio de um ID.
* A ONG pode cadastrar os Casos que ela atende bem como adicionar detalhes sobre esse caso, uma descrição e o custo de cada caso separadamente.
* A ONG pode disponibilizar o seu contato através de e-mail e/ou whatsapp.

## Screenshots
<table>
	<tr>
		<th width="100%">
			Web Interface<br>
		</th>
	</tr>
	<tr>
		<td width="50%">
			<img width="49.5%" src="https://raw.githubusercontent.com/danielalves96/be-my-hero/master/screenshots/Login.jpeg">
			<img width="49.5%" src="https://raw.githubusercontent.com/danielalves96/be-my-hero/master/screenshots/Register.jpeg">
			<img width="49.5%" src="https://raw.githubusercontent.com/danielalves96/be-my-hero/master/screenshots/Home.jpeg">
			<img width="49.5%" src="https://raw.githubusercontent.com/danielalves96/be-my-hero/master/screenshots/Incident.jpeg">
		</td>
	</tr>
</table>



## Tecnologias utilizadas
Para executar o projeto, será necessário instalar/usar os seguintes programas:
* [Node.js](https://nodejs.org/en/download/)
* [NPM](https://www.npmjs.com/)
* [React](https://pt-br.reactjs.org/)
* [Express](http://www.react.express/)
* [Visual Studio Code](https://code.visualstudio.com/download)

## Desenvolvimento

* **Backend**: Uma API RESTful foi criada usando Node.js, Express, Cors. Essa API foi integrada a um banco de dados SQLite usando Knex. Ao final do processo de desenvolvimento, a validação de dados nas rotas foi implementada usando a biblioteca Celebrate. Os testes de unidade e integração foram desenvolvidos usando as bibliotecas Jest, Supertest e entre ambientes.

* **Website**: O frontend do site foi criado usando o ReactJS.

## Instalação 

Para executar esse repositório baixe-o para sua maquina ou de um `Git Clone`.

### Backend 

- `$ npm install` esse comando ira instalar todos os módulos necessários ao Node.JS
-  `$ npm start` Ira iniciar o servidor backend na `localhost:3333\` 

### Frontend | Web

- `$ npm install` esse comando ira instalar todos os módulos necessários ao React
-  `$ npm start` Ira iniciar o servidor Frontend na `localhost:3000\` 

