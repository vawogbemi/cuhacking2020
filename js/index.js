var data = require('./Murder-on-the-2nd-Floor-Raw-Data.json'); //with path
var valuesOnly = Object.values(data);


function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function openNav2(t) {
var text = t;
    
  document.getElementById("text").innerHTML = text;
  document.getElementById("data").innerHTML = valuesOnly;

    
   
  document.getElementById("mySidebar2").style.width = "500px";
  document.getElementById("main2").style.marginRight = "500px";
      
}

function closeNav2() {
  document.getElementById("mySidebar2").style.width = "0";
  document.getElementById("main2").style.marginRight= "0";
}

console.log(valuesOnly);