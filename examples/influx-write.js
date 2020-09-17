// API Guide: https://vicanso.github.io/influxdb-nodejs/
// Cheat Sheet: https://gist.github.com/tomazursic/6cc217e2644c619ceceefb8ce824925b

const Influx = require('influxdb-nodejs');
const client = new Influx('http://10.0.0.198:8086/new');
client.createDatabase()
    .then(() => console.info('[ create database success ]'))
    .catch(err => console.error(`[ create database fail ], ${err.message}`));

// i --> integer    // s --> string
// f --> float      // b --> boolean
const fieldSchema = {
    name: 's',
    rotation: 'i',
    batch: 'i',
    p1pre: 'f',
    p2pre: 'f',
    p3pre: 'f',
    p4pre: 'f',
    p5pre: 'f',
    p6pre: 'f',
    p7pre: 'f',
    p8pre: 'f',
    p8pre: 'f',
    p1main: 'f',
    p2main: 'f',
    p3main: 'f',
    p4main: 'f',
    p5main: 'f',
    p6main: 'f',
    p7main: 'f',
    p8main: 'f',
    p8main: 'f',
    p1ejn: 'f',
    p2ejn: 'f',
    p3ejn: 'f',
    p4ejn: 'f',
    p5ejn: 'f',
    p6ejn: 'f',
    p7ejn: 'f',
    p8ejn: 'f',
    p8ejn: 'f',
    preavg: 'f',
    mainavg: 'f',
    ejnavg: 'f',
    p1status: 'b',
    p2status: 'b',
    p3status: 'b',
    p4status: 'b',
    p5status: 'b',
    p6status: 'b',
    p7status: 'b',
    p8status: 'b',
    p8status: 'b',
};

// Timestamp for which returns current date and time
var noww = new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
console.log('[ Starting INFLUX WRITE: ', noww, ' ]')

const tagSchema = {
    
};

client.schema('payload', fieldSchema, tagSchema, {
    // default is false
    stripUnknown: false,
});

writePayload = () => {
    client.write('payload')
        .tag({
        })
        .field({
            batch: generateRandomInteger(0, 20),    // 1
            ejnavg: generateRandomInteger(0, 100),  // 2
            mainavg: generateRandomInteger(0, 100), // 3
            
            p1ejn: generateRandomInteger(0, 100),   // 4
            p1main: generateRandomInteger(0, 100),  // 5
            p1pre: generateRandomInteger(0, 100),   // 6
            p1status: true,                         // 7
            
            p2ejn: generateRandomInteger(0, 100),   // 8
            p2main: generateRandomInteger(0, 100),  // 9
            p2pre: generateRandomInteger(0, 100),   // 10
            p2status: true,                         // 11
            
            p3ejn: generateRandomInteger(0, 100),   // 12
            p3main: generateRandomInteger(0, 100),  // 13
            p3pre: generateRandomInteger(0, 100),   // 14
            p3status: true,                         // 15
            
            p4ejn: generateRandomInteger(0, 100),   // 16
            p4main: generateRandomInteger(0, 100),  // 17
            p4pre: generateRandomInteger(0, 100),   // 18
            p4status: true,                         // 19
            
            p5ejn: generateRandomInteger(0, 100),   // 20
            p5main: generateRandomInteger(0, 100),  // 21
            p5pre: generateRandomInteger(0, 100),   // 22
            p5status: true,                         // 23
            
            p6ejn: generateRandomInteger(0, 100),   // 24
            p6main: generateRandomInteger(0, 100),  // 25
            p6pre: generateRandomInteger(0, 100),   // 26
            p6status: true,                         // 27
            
            p7ejn: generateRandomInteger(0, 100),   // 28
            p7main: generateRandomInteger(0, 100),  // 29
            p7pre: generateRandomInteger(0, 100),   // 30
            p7status: true,                         // 31
            
            p8ejn: generateRandomInteger(0, 100),   // 32
            p8main: generateRandomInteger(0, 100),  // 33
            p8pre: generateRandomInteger(0, 100),   // 34
            p8status: true,                         // 35
            
            preavg: generateRandomInteger(0, 100),  // 36
            rotation: generateRandomInteger(1, 10), // 37
            name: "MARUTI"
        })
        
        .then(() => console.info('[ WRITE SUCESSFUL ]'))
        .catch(console.error);
    }
    
    
setInterval(() => {
    writePayload();
}, 1000);

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}