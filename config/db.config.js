'use strict'

import mysql from 'mysql';

const db = mysql.createPool({
  "connectionLimit" : 50,
  "waitForConnections" : true,
  "queueLimit" : 50,
  "acquireTimeout" : 17280,
  "host" : "localhost",
  "user" : "root",
  "port" : 3306,
  "password" : "",
  "database" : "memberRewards",
  "dateStrings" : "date"
})

export default db;
