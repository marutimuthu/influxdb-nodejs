// Refer this: https://vicanso.github.io/influxdb-nodejs/
// Cheat Sheet: https://gist.github.com/tomazursic/6cc217e2644c619ceceefb8ce824925b
// Query Documentation: https://docs.influxdata.com/influxdb/v1.8/query_language/explore-data/

const Influx = require('influxdb-nodejs');
const client = new Influx('http://localhost:8086/new');

// Timestamp for which returns current date and time
var noww = new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
console.log(`[ INITIATING INFLUX QUERY: ${noww} ]`)


function filterItems(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

function removeWord(arr, word) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(word, '');
    }
}

// Returns Batch Count and names
var response = {
    batchcount: 0,
    batchnames: {
    }
}


var batchList = function () {
    client.showMeasurements()
        .then(data => {
            var originalList = Object.values(data)
            var filteredList = filterItems(originalList, 'machine')
            response.batchcount = filteredList.length;
            removeWord(filteredList, '.machine')
            response.batchnames = filteredList

            console.log(response)

        })
        .catch(console.error);
}

batchList()