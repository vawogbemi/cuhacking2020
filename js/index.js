
//Opens Navigation
function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginLeft = "500px";
}

//Closes Navigation
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


obj = $.getJSON("Murder-on-the-2nd-Floor-Raw-Data.json")obj = $.getJSON("Murder-on-the-2nd-Floor-Raw-Data.json")
var jsonHtmlTable = ConvertJsonToTable(obj, 'jsonTable', null, 'Download');