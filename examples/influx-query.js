// Refer this: https://vicanso.github.io/influxdb-nodejs/
// Cheat Sheet: https://gist.github.com/tomazursic/6cc217e2644c619ceceefb8ce824925b
// Query Documentation: https://docs.influxdata.com/influxdb/v1.8/query_language/explore-data/

const Influx = require('influxdb-nodejs');
const client = new Influx('http://localhost:8086/new');

// Timestamp for which returns current date and time
var noww = new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
console.log(`[ INITIATING INFLUX QUERY: ${noww} ]`)

// Assigning variable as per array loacation
// let batch = fruits.indexOf("Apple");
let ejnavg = 2
let mainavg = 3
let p1ejn = 4
let p1main = 5
let p1pre = 6
let p1status = 7
let p2ejn = 8
let p2main = 9
let p2pre = 10
let p2status = 11
let p3ejn = 12
let p3main = 13
let p3pre = 14
let p3status = 15
let p4ejn = 16
let p4main = 17
let p4pre = 18
let p4status = 19
let p5ejn = 20
let p5main = 21
let p5pre = 22
let p5status = 23
let p6ejn = 24
let p6main = 25
let p6pre = 26
let p6status = 27
let p7ejn = 28
let p7main = 29
let p7pre = 30
let p7status = 31
let p8ejn = 32
let p8main = 33
let p8pre = 34
let p8status = 35
let preavg = 36
let rotation = 37

//select * from "payload" where "batch" = 7 and "rotation" = 7
// client.query('payload')
//     .where('batch', 4)
//     // .where('rotation', 9)
//     .then(data => {
//         let payload = Object.values(data.results[0].series[0].values[0])
//         console.log(`[ RESPONSE:  ${payload[rotation]} ]`)
//     })
//     .catch(console.error);

var previousbatch
var previousoperator
var previousmachineid
var previousrecipieid

// client.showMeasurements()
//     .then(data => {
//         var newww = Object.values(data)
//         previousbatch = newww[newww.length - 1]
//         console.log(previousbatch)
//     })
//     .catch(console.error);


client.showFieldKeys(previousbatch)
    .then(data => {
        var fieldkeys = Array(data[0].values[0])
        var result = fieldkeys.filter(obj => {
            return obj.key == 'batch'
        })
        console.log(result[0].type)
    })
    .catch(console.error);


// client.showDatabases()
//     .then(console.info)
//     .catch(console.error);



