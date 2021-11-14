window.addEventListener('load', onLoad);

function onLoad(){

    let button = document.querySelector('button');
    button.addEventListener('click', getIp);

}

function getIp(){

    var httpReq = new XMLHttpRequest();

    httpReq.open('GET', 'https://api.ip2loc.com/5hA7zKcaP4EQJimIcG45S4i1ehxBrhsz/detect?', true);
    
    httpReq.send();

    httpReq.onreadystatechange = function() {

        if(httpReq.readyState == 4 && httpReq.status == 200) {

            let risposta = JSON.parse(httpReq.response);
            console.log(risposta);

            let ip = risposta.connection.ip;
            // console.log(ip);

            console.log(risposta.location.country.name);

            let input = document.querySelector('#ip-content');
            // console.log(input);

            input.value = ip;
            // console.log(input.value);

            let citta = risposta.location.city;
            let cap = risposta.location.country.zip_code;
            let regione = risposta.location.country.subdivision;
            let stato = risposta.location.country.name;
            let continente = risposta.location.continent.name;      

            let long = risposta.location.longitude;
            // console.log(long);

            let lat = risposta.location.latitude;
            // console.log(lat);            

            document.getElementById('ip-content').innerText = ip;
            

            let pCity = document.getElementById('city');

            pCity.innerHTML =(`You are connecting from ${citta} (${cap}), ${regione}, ${stato} - ${continente}`+`<br>`+`<a href="https://www.google.it/maps/@`+ lat +`,`+ long +`,16z" target="_blank">SEE WHERE YOU ARE ON GOOGLE MAPS</a>`);
        
        
        }
    }
    
}

// chiave Api: 5hA7zKcaP4EQJimIcG45S4i1ehxBrhsz
// base url: https://api.ip2loc.com/5hA7zKcaP4EQJimIcG45S4i1ehxBrhsz/detect?
// documentation: https://ip2loc.com/documentation

