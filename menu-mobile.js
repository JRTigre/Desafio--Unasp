function Click(){
    const Moblie=document.getElementById("menu")
    if (Moblie.className === "menu-active"){
        Moblie.className = "menu"
    }
    else{
        Moblie.className = "menu-active"
    }
}