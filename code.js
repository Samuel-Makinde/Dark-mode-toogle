const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
changeBody();

function changeBody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black";
    }else{
        bodyEl.style.backgroundColor = "white";
    }
}

inputEl.addEventListener("input", ()=>{
    changeBody();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}