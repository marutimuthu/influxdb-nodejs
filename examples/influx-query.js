// Refer this: https://vicanso.github.io/influxdb-nodejs/
// Cheat Sheet: https://gist.github.com/tomazursic/6cc217e2644c619ceceefb8ce824925b
// Query Documentation: https://docs.influxdata.com/influxdb/v1.8/query_language/explore-data/

const Influx = require('influxdb-nodejs');
const client = new Influx('http://10.0.0.198:8086/new');

client.showFieldKeys('payload')

client.query('payload')
    .then(data => console.log(data.results[0].series[0].values[0]))
    .catch(console.error);