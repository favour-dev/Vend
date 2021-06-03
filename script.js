const navicon = document.getElementById("dropdownmenu")
function dropitems(){
    if(navicon.className == "dropdown"){
        navicon.className = "hidden"; 
    }
    else{
        navicon.className = "dropdown";
    }
}
// const icon = document.getElementById("icon")
// icon.addEventListener("click",dropitems)