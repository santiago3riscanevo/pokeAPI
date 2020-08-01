let XMLHttmRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttmRequest();
        xhttp.open('GET',url_api,true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error("There was an Error " + url_api))
            }
        })
        xhttp.send()
    });
}

module.exports = fetchData;