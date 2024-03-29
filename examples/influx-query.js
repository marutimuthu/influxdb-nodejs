// Refer this: https://vicanso.github.io/influxdb-nodejs/
// Cheat Sheet: https://gist.github.com/tomazursic/6cc217e2644c619ceceefb8ce824925b
// Query Documentation: https://docs.influxdata.com/influxdb/v1.8/query_language/explore-data/

const Influx = require('influxdb-nodejs');
const client = new Influx('http://localhost:8086/new');

// Timestamp for which returns current date and time
var noww = new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
console.log(`[ INITIATING INFLUX QUERY: ${noww} ]`)

//select * from "payload" where "batch" = 7 and "rotation" = 7
// client.query('payload')
//     .where('batch', 4)
//     // .where('rotation', 9)
//     .then(data => {
//         let payload = Object.values(data.results[0].series[0].values[0])
//         console.log(`[ RESPONSE:  ${payload[rotation]} ]`)
//     })
//     .catch(console.error);




