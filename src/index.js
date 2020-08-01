const fetchData = require("../utils/fetchData");
const API = "https://pokeapi.co/api/v2/pokemon/"

console.log('before')
fetchData(API)
    .then( data => {
        console.log(data.count)
        return fetchData(`${API}${data.results[0].name}`)
    })
    .then( data => {
        console.log("Whose that Pokemon? " + "IS => " + data.name)
        return fetchData(`${API}${data.id}`)
    })
    .then( data => {
        console.log("He is " + data.types[0].type.name + " type")
    })
    .catch( err => console.error(err));
console.log('after');