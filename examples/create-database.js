// API Guide: https://vicanso.github.io/influxdb-nodejs/
// Cheat Sheet: https://gist.github.com/tomazursic/6cc217e2644c619ceceefb8ce824925b

const Influx = require('influxdb-nodejs');
const client = new Influx('http://10.0.0.198:8086/new');

var newDB = 'MONTH-1'

const addDB = new Influx(`http://10.0.0.198:8086/${newDB}`);

addDB.createDatabase()
    .then(() => console.info('[ create database success ]'))
    .catch(err => console.error(`[ create database fail ], ${err.message}`));


client.showDatabases()
    .then(console.info)
    .catch(console.error);
