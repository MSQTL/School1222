const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '(local)/SQLEXPRESS',
    // user: 'sergm',
    // password: '',
    database: 'Школа1222'
})

connection.connect((error) => {
    if(error){
        return console.log('Ошибка подключения к базе данных!');
    } else {
        return console.log('Подключение успешно!');
    }
})

module.exports = connection