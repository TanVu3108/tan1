function on() {
    document.getElementById('myImage').src='bongdensang.jpg';
}
function off() {
    document.getElementById('myImage').src='bongden.jpg';
}
function nhietDo() {
    var x = Math.round(Math.random() * 101);
    document.getElementById("box1").innerHTML = x + "°C";
    if( x >=0 && x < 32) {
        document.getElementById("box1").style.backgroundColor = "lightgreen"; 
    }
    else if( x >= 32 && x < 60 ) {
        document.getElementById("box1").style.backgroundColor = "yellow";
    }
    else {
        document.getElementById("box1").style.backgroundColor = "orange";
    }
}
function luongMua() {
    var y = Math.round(Math.random() * 301);
    document.getElementById("box2").innerHTML = y + "ml";
    if( y >=0 && y < 100) {
        document.getElementById("box2").style.backgroundColor = "lightblue";
    }
    else if( y >= 100 && y < 200 ) {
        document.getElementById("box2").style.backgroundColor = "blue";
    }
    else {
        document.getElementById("box2").style.backgroundColor = "darkblue";
    }
}
function doAm() {
    var z = Math.round(Math.random() * 71);   
    document.getElementById("box3").innerHTML = z + "%";
    if( z >=0 && z < 20) {
        document.getElementById("box3").style.backgroundColor = "pink";
    }
    else if( z >= 20 && z < 50 ) {
        document.getElementById("box3").style.backgroundColor= "violet";
    }
    else {
        document.getElementById("box3").style.backgroundColor= "red";
    }
}

