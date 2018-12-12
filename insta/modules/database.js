'use strict';
require('dotenv').config();
const mysql = require('mysql2');

const connect = () => {
  // create the connection to database
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
  });
  return connection;
};

/*
const select = (connection, callback, res) => {
  // simple query
  connection.query(
      'SELECT * FROM bc_media',
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback(results, res);
      },
  );
};
*/

const register = (data, connection, callback) => {
  // simple query
  connection.execute(
      'INSERT INTO User (username, email, password) VALUES (?, ?, ?);',
      data,
      (err, results, fields) => {
        console.log('register', results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback();
      },
  );
};


const login = (data, connection, callback) => {
  // simple query
  connection.execute(
      'SELECT * FROM User WHERE username = ? AND password = ?;',
      data,
      (err, results, fields) => {
        console.log('login', results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback(results);
      },
  );
};


//======================================================================================================
// Profile stuff

const userDescription = (data, connection, callback) => {
  // simple query
  connection.execute(
      'UPDATE User (description) VALUES (?) WHERE ID = ?;',
      data,
      (err, results, fields) => {
        console.log('register', results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback();
      },
  );
};


const insert = (data, connection, callback) => {
  // simple query
  connection.execute(
      'INSERT INTO Media (file, description, timeadded, userID) VALUES (?, ?, ?, ?);',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback();
      },
  );
};

const select = (connection, callback, res) => {
  // simple query
  connection.query(
      'SELECT * FROM Media',
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback(results, res);
      },
  );
};


const selectByUser = (connection, data, callback, res) => {
  // simple query
  connection.execute(
      'SELECT * FROM Media WHERE userID = ?;',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback(results, res);
      },
  );
};

const selectByName = (connection, data, callback, res) => {
  // simple query
  connection.execute(
      'SELECT * FROM Media WHERE username = ?;',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback(results, res);
      },
  );
};

const search = (connection, data, callback, res) => {
  // simple query
  connection.execute(
      'SELECT * FROM User WHERE name LIKE ?;',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback(results, res);
      },
  );
};


const getUser = (connection, data, callback, res) => {
  // simple query
  connection.execute(
      'SELECT * FROM User WHERE ID = ?;',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback(results, res);
      },
  );
};


const changePic = (data, connection, callback) => {
  // simple query
  connection.execute(
      'UPDATE User SET picture = ? WHERE ID = ?;',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback();
      },
  );
};


//======================================================================================================

/*
const update = (data, connection) => {
  // simple query
  return connection.execute(
      'UPDATE bc_media SET category = ?, title = ?, details = ? WHERE mID = ?;',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
      },
  );
};

const del = (data, connection) => {
  // simple query
  return connection.execute(
      'DELETE FROM bc_media WHERE mID = ?;',
      data,
      (err, results, fields) => {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
      },
  );
};
*/

module.exports = {
  connect: connect,
  register: register,
  login: login,
  userDescription: userDescription,
  insert: insert,
  select: select,
  selectByUser: selectByUser,
  search: search,
  getUser: getUser,
  selectByName: selectByName,
  changePic: changePic,
};



