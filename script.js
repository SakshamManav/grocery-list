let input = document.querySelector(".input");
let list = document.querySelector(".list");
let pencil = document.querySelector(".pencil");

pencil.addEventListener("click", (event)=>{
    list.innerHTML="";
})

input.addEventListener("keydown", (event)=>{
    if(event.key == "Enter"){
        
        getlist();
    }
})
getlist=()=>{
    var products = document.createElement("h2");
    products.className = "products";
    products.innerHTML = "- " + input.value;
    products.onclick=()=>{
        products.style.textDecoration = "line-through";
    }
    input.value = "";
    list.insertAdjacentElement("beforeend", products);

}
