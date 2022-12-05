'use strict'

const response = require('./../response')
const db = require('./../settings/db')
exports.users = ( req, res ) => {

        db.query('SELECT * FROM `users`', (error, rows, fields) => {
            if(error){
                console.log(error);
            } else {
                response.status(rows, res)
            }
        })
}