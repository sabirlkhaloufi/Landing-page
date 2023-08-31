$("#closemenu").click(function(){
    $(".menulink").removeClass("show-menu");
})

$("#showmenu").click(function(){
    $(".menulink").addClass("show-menu");
})




const darkmode = ()=>{
    $(".mode").addClass("darkmode");
    $(".fa-moon").addClass("d-none");
    $(".fa-lightbulb").removeClass("d-none");
    localStorage.setItem("mode","dark")
    $("#mode").addClass("dark")
    $("#mode").removeClass("light")
}

const lightmode = ()=>{
    $(".mode").removeClass("darkmode");
    $(".fa-moon").removeClass("d-none");
    $(".fa-lightbulb").addClass("d-none");
    localStorage.setItem("mode","light")
    $("#mode").removeClass("dark")
    $("#mode").addClass("light")
}

let mode = localStorage.getItem("mode");
if(mode == "dark"){
darkmode()
}

if(mode == "light"){
    lightmode()
}



$(".fa-moon").click(function(){
    darkmode();
})

$(".fa-lightbulb").click(function(){
    lightmode(); 
})


// dark mode


