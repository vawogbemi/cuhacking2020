
function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function openNav2(index) {
  
  
    if(index == 1){
        document.getElementById("data").innerHTML = "woiwionasfoansfoa";
    }
     if(index == 3){
        document.getElementById("data").innerHTML = "woiwionasfoansfoa";
    }
    else{
        document.getElementById("data").innerHTML = "you passed";

    }
  document.getElementById("mySidebar2").style.width = "500px";
  document.getElementById("main2").style.marginRight = "500px";
      
}

function closeNav2() {
  document.getElementById("mySidebar2").style.width = "0";
  document.getElementById("main2").style.marginRight= "0";
}