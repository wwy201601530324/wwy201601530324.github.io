function showPic(whichpic){
var source =whichpic.getAttribute("href");
var wwy =document.getElementById("wwy");
wwy.setAttribute("src",source);
 }