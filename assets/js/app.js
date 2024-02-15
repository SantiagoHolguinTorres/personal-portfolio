let check = document.querySelector(".navbar__toggle--language-input");
check.addEventListener('click', idioma);

function idioma(){

    let id = check.checked;
    if(id=== true){
        location.href = "assets/english/index.html";
    }else {
        location.href = "/portafolio_guia/index.html";
    }   
}

let toggle = document.getElementById("darkmode-toggle");
toggle.addEventListener('change',(event)=>{
    let checked = event.target.checked;
    document.body.classList.toggle('dark');

})