![Heroku Status]()
![Netlify Status]()

# Be The Hero
O Be The  Hero é um meio de conectar ONGS que necessitam de algum tipo de ajuda a pessoas que podem contribuir.
Esse projeto foi desenvolvimento durante a Semana OmniStack 11.0, um evento da @Rocketseat, onde construimos uma aplicação completa com Node.js no back-end, ReactJS no front-end e React Native no mobile.

**Versão online**
* [API Heroku]()
* [FrontEnd Netlify]()

## Features
* A ONG poderá fazer login na aplicação.
* A ONG poderá cadastrar os Casos que ela atende bem como adicionar detalhes sobre esse caso, bem como, uma descrição e o custo daquele caso.
* A ONG poderá disponibilizar o seu contato através de e-mail ou  whatsapp.
* O Usuário poderá ver os casos.
* O Usuário poderá entrar em contato com a ONG.

## Screenshots
<table>
	<tr>
		<th width="100%">
			<h2>Web Interface
		</th>
	</tr>
		<tr>
		<th>
			Login page:<br>
		</th>
	</tr>
	<tr>
		<td>
			<img width="1080" src="https://github.com/danielalves96/be-my-hero/blob/master/screenshots/Login.jpeg">
		</td>
	</tr>
	</tr>
		<tr>
		<th>
			Register page:<br>
		</th>
	</tr>
	<tr>
		<td>
			<img width="1080" src="https://github.com/danielalves96/be-my-hero/blob/master/screenshots/Register.jpeg">
		</td>
	</tr>
	<tr>
		<th>
			Home page:<br>
		</th>
	</tr>
	<tr>
		<td>
			<img width="1080" src="https://github.com/danielalves96/be-my-hero/blob/master/screenshots/Home.jpeg">
		</td>
	</tr>
	<tr>
		<th>
			New incident page:<br>
		</th>
	</tr>
	<tr>
		<td>
			<img width="1080" src="https://github.com/danielalves96/be-my-hero/blob/master/screenshots/Incident.jpeg?raw=true">
		</td>
	</tr>
</table>

<table>
	<tr>
		<th width="33.3%">
			App splash screen<br>
		</th>
		<th width="33.3%">
			App incident list
		</th>
    <th width="33.3%">
			App incident detail
		</th>
	</tr>
	<tr><!-- Prevent zebra stripes --></tr>
	<tr>
		<td>
			<img width="618" src="https://raw.githubusercontent.com/danielnegrisolibatista/be-the-hero/master/screenshots/splashScreen.jpg">
		</td>
		<td>
			<img width="618" src="https://raw.githubusercontent.com/danielnegrisolibatista/be-the-hero/master/screenshots/incidentList.jpg">
		</td>
    <td>
			<img width="618" src="https://raw.githubusercontent.com/danielnegrisolibatista/be-the-hero/master/screenshots/incidentDetail.jpg">
		</td>
	</tr>
</table>

## Tecnologias utilizadas
Para executar o projeto, será necessário instalar/usar os seguintes programas:
* [Node.js](https://nodejs.org/en/download/)
* [NPM](https://www.npmjs.com/)
* [React](https://pt-br.reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.io/)
* [Express](http://www.react.express/)
* [Visual Studio Code](https://code.visualstudio.com/download)

## Desenvolvimento
* **Backend**: Uma API RESTful foi criada usando Node.js, Express, Cors. Essa API foi integrada a um banco de dados SQLite usando Knex. Ao final do processo de desenvolvimento, a validação de dados nas rotas foi implementada usando a biblioteca Celebrate. Os testes de unidade e integração foram desenvolvidos usando as bibliotecas Jest, Supertest e entre ambientes.
* **Website**: O frontend do site foi criado usando o ReactJS.
* **Mobile**: o aplicativo mobile foi criado usando o React Native e o Expo.

## Instalação 

Para executar esse repositório baixe-o para sua maquina ou de um `Git Clone`.

### Backend 

- `$ npm install` esse comando ira instalar todos os módulos necessários ao Node.JS
-  `$ npm start` Ira iniciar o servidor backend na `localhost:3333\` 

### Frontend | Web

- `$ npm install` esse comando ira instalar todos os módulos necessários ao React
-  `$ npm start` Ira iniciar o servidor Frontend na `localhost:3000\` 

### Mobile 

- `$ npm install` esse comando ira instalar todos os módulos necessários ao React Native
-  `$ npm start` Ira iniciar o servidor  de desenvolvimento do Expo 
