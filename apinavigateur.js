let tlat = document.getElementById("lat");
let tlong = document.getElementById("long");
let thist = document.getElementById("nbpages");
let tcop = document.getElementById("textecopie");
let tcol = document.getElementById("textecolle");

let blat = document.getElementById("latitude").addEventListener('click', showLat);
let blong = document.getElementById("longitude").addEventListener('click', showLong);
let bhist = document.getElementById("reculer").addEventListener('click', showHist);
let bcopie = document.getElementById("copier").addEventListener('click', copier);
let bcoller = document.getElementById("coller").addEventListener('click', coller);

function showLat(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            tlat.innerHTML = "Latitude : " + position.coords.latitude;
        });
    }
}


function showLong(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            tlong.innerHTML = "Longitude : " + position.coords.longitude;
        });
    }
}


function showHist(){
    window.history.go(-parseInt(thist.value));
}

function copier(){
    navigator.clipboard.writeText(tcop.value);
}

function coller(){
    navigator.clipboard.readText().then(clipText => tcol.value = clipText);
}