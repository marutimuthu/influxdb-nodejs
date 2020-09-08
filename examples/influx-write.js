// API Guide: https://vicanso.github.io/influxdb-nodejs/
// Cheat Sheet: https://gist.github.com/tomazursic/6cc217e2644c619ceceefb8ce824925b

const Influx = require('influxdb-nodejs');
const client = new Influx('http://10.0.0.198:8086/new');

// i --> integer    // s --> string
// f --> float      // b --> boolean
const fieldSchema = {
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

const tagSchema = {
    rotation: [],
    batch: [],
};

client.schema('payload', fieldSchema, tagSchema, {
    // default is false
    stripUnknown: false,
});

writePayload = () => {
    client.write('payload')
        .tag({
            rotation: 1,
        })
        .field({
            rotation: generateRandomInteger(1, 10),
            batch: generateRandomInteger(0, 20),
            p1pre: generateRandomInteger(0, 100),
            p2pre: generateRandomInteger(0, 100),
            p3pre: generateRandomInteger(0, 100),
            p4pre: generateRandomInteger(0, 100),
            p5pre: generateRandomInteger(0, 100),
            p6pre: generateRandomInteger(0, 100),
            p7pre: generateRandomInteger(0, 100),
            p8pre: generateRandomInteger(0, 100),
            p8pre: generateRandomInteger(0, 100),

            p1main: generateRandomInteger(0, 100),
            p2main: generateRandomInteger(0, 100),
            p3main: generateRandomInteger(0, 100),
            p4main: generateRandomInteger(0, 100),
            p5main: generateRandomInteger(0, 100),
            p6main: generateRandomInteger(0, 100),
            p7main: generateRandomInteger(0, 100),
            p8main: generateRandomInteger(0, 100),
            p8main: generateRandomInteger(0, 100),

            p1ejn: generateRandomInteger(0, 100),
            p2ejn: generateRandomInteger(0, 100),
            p3ejn: generateRandomInteger(0, 100),
            p4ejn: generateRandomInteger(0, 100),
            p5ejn: generateRandomInteger(0, 100),
            p6ejn: generateRandomInteger(0, 100),
            p7ejn: generateRandomInteger(0, 100),
            p8ejn: generateRandomInteger(0, 100),
            p8ejn: generateRandomInteger(0, 100),

            preavg: generateRandomInteger(0, 100),
            mainavg: generateRandomInteger(0, 100),
            ejnavg: generateRandomInteger(0, 100),

            p1status: true,
            p2status: true,
            p3status: true,
            p4status: true,
            p5status: true,
            p6status: true,
            p7status: true,
            p8status: true,
            p8status: true,

        })
        .then(() => console.info('write point success'))
        .catch(console.error);
}

setInterval(() => {
    writePayload();
}, 1000);

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}


