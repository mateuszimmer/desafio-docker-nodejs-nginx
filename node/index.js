const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sqlCriaTable = `create table if not exists people (id integer auto_increment primary key, name varchar(255))`;
connection.query(sqlCriaTable);

const sql = `insert into people (name) values ('Mateus'),('Marta'),('Lucas'),('Paulo'), ('Maria')`;
connection.query(sql);

const sqlPesquisa = `select * from people`;
let resultado;

let mensagem = '<h1>Full Cycle Rocks!!</h1>';
mensagem += '<br><hr><br><ul>';

connection.query(sqlPesquisa, function(err, result, fields) {
    if (err) throw err;
    result.forEach(r => {
        if (r)
            mensagem += `<li>${r.id} - ${r.name}</li>`;
    });
});

connection.end();

app.get('/', (req, res) => {
    res.send(mensagem)
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});