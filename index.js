const  div1 = document.querySelector("main>div>div:first-of-type");
const divs = document.querySelectorAll("main>div>div");
const links = document.querySelectorAll("main>div>div p>a");

window.addEventListener("load", () =>{
    div1.style.backgroundColor = "#030347";
    div1.style.color = "#E6E6FA";
    div1.classList.add("activated");
    divs[1].classList.add("not-active");
})

const check = (event) =>{
    if (event.target == divs[0] || event.target == divs[1]){
        parent = event.target;
    } else if (event.target.parentNode == divs[0] || event.target.parentNode == divs[1]){
        parent = event.target.parentNode;
    } else if(event.target.parentNode.parentNode == divs[0] || event.target.parentNode.parentNode == divs[1]){
        parent = event.target.parentNode.parentNode;
    } else if(event.target.parentNode.parentNode.parentNode == divs[0] || event.target.parentNode.parentNode.parentNode == divs[1]){
        parent = event.target.parentNode.parentNode.parentNode;
    } else if (event.target.parentNode.parentNode.parentNode.parentNode == divs[0] || event.target.parentNode.parentNode.parentNode.parentNode == divs[1]){
        parent = event.target.parentNode.parentNode.parentNode.parentNode;
    } else if (event.target.parentNode.parentNode.parentNode.parentNode.parentNode == divs[0] || event.target.parentNode.parentNode.parentNode.parentNode.parentNode == divs[1]){
        parent = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    }
}


// const verifyScrn = (event) => {
//     // handleclick();
//     if (event.target.innerText == "Log in"){
//         divs[1].classList.remove("not-active");
//         divs[0].classList.add("not-active");
//     } else if(event.target.innerText == "Sign up"){
//         divs[0].classList.remove("not-active");
//         divs[1].classList.add("not-active");
//     }
// }

const changeCol = (event) => {
    check(event);
    if(parent == divs[0]){
        divs[0].style.backgroundColor = "#030347";
        divs[0].style.color = "#E6E6FA";
        divs[0].classList.add("activated");
        divs[0].classList.remove("not-active");
        divs[1].style.backgroundColor = "#E6E6FA";
        divs[1].style.color = "#030347";
        divs[1].classList.remove("activated");
        divs[1].classList.add("not-active");
    } else if (parent == divs[1]){
        divs[1].style.backgroundColor = "#030347";
        divs[1].style.color = "#E6E6FA";
        divs[1].classList.add("activated");
        divs[1].classList.remove("not-active");
        divs[0].style.backgroundColor = "#E6E6FA";
        divs[0].style.color = "#030347";
        divs[0].classList.remove("activated");
        divs[0].classList.add("not-active");
    } else if(parent == window) {
        console.log("Fuck")
    }
}
divs.forEach(addEventListener("click", changeCol));

// links.forEach(addEventListener("click" , verifyScrn));

