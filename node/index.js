const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const { faker } = require('@faker-js/faker')

const config = {
	host: 'mysql',
	user: 'root',
	password: 'root',
	database: 'desafio'
}
const connection = mysql.createConnection(config)

connection.query(`CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`)
for (let i = 0; i < 10; i++) {
	connection.query(`INSERT INTO people (name) VALUES ("${faker.name.fullName()}")`)	
}

async function renderHTML(req, res) {
	connection.query('SELECT * FROM people', (err, result) => {
		if (err) throw err

		const html = [
		    '<h1>Full Cycle Rocks!</h1>',
		    '</br>',
		    '<p>Lista de nomes cadastrada no banco de dados:</p>',
		    '<ul>',
		]

		result.forEach(line => {
			html.push(`<li>${line.name}</li>`)
		});
  
		html.push('</ul>')
  
		res.send(html.join(''))
	})
}

// connection.end()

app.get('/', renderHTML)

app.listen(port, () => {
	console.log('Rodando na porta ' + port)
})
