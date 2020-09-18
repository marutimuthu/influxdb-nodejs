// Refer this: https://vicanso.github.io/influxdb-nodejs/
// Cheat Sheet: https://gist.github.com/tomazursic/6cc217e2644c619ceceefb8ce824925b
// Query Documentation: https://docs.influxdata.com/influxdb/v1.8/query_language/explore-data/

const Influx = require('influxdb-nodejs');
const client = new Influx('http://localhost:8086/new');

// Timestamp for which returns current date and time
var noww = new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
console.log(`[ INITIATING INFLUX QUERY: ${noww} ]`)

var batch = "payload"

client.showFieldKeys(batch)
    .then(data => {
        console.log(data[0].values)
    })
    .catch(console.error);