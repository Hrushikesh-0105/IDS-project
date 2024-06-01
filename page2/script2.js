let easy_btn=document.querySelector("#page2_easy");
let med_btn=document.querySelector("#page2_med");
let hard_btn=document.querySelector("#page2_hard");
let start_btn=document.querySelector("#start_btn");
let heading=document.querySelector("#page2_heading");
//getting myobj from sessionStorage
let myobj=JSON.parse(sessionStorage.getItem("mysessionstorage"));
heading.innerText+=" "+myobj.category;

easy_btn.addEventListener("click",()=>{
    myobj.difficulty="Easy";
    easy_btn.style.backgroundColor="#0EAD69";
    med_btn.style.backgroundColor="";
    hard_btn.style.backgroundColor="";
    easy_btn.style.color="white";
    med_btn.style.color="black";
    hard_btn.style.color="black";
})

med_btn.addEventListener("click",()=>{
    myobj.difficulty="Medium";
    easy_btn.style.backgroundColor="";
    med_btn.style.backgroundColor="#0EAD69";
    hard_btn.style.backgroundColor="";
    med_btn.style.color="white";
    easy_btn.style.color="black";
    hard_btn.style.color="black";
})

hard_btn.addEventListener("click",()=>{
    myobj.difficulty="Hard";
    easy_btn.style.backgroundColor="";
    med_btn.style.backgroundColor="";
    hard_btn.style.backgroundColor="#0EAD69";
    hard_btn.style.color="white";
    easy_btn.style.color="black";
    med_btn.style.color="black";
})

start_btn.addEventListener("click",()=>{
    if(myobj.difficulty==="NULL"){
        alert("Please select difficulty, then click on start")
    }
    else{
    sessionStorage.setItem("mysessionstorage",JSON.stringify(myobj));
    window.location.href = "/page3/index3.html";
    }
})