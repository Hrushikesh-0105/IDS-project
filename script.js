let searchbar=document.querySelector("#searchbar");
let body=document.querySelector("body");
let ok_btn=document.querySelector("#ok-btn");

let category="NULL";
dropdown.addEventListener("change",()=>{
    category=document.querySelector("#dropdown").value;
    searchbar.value=category;
})

ok_btn.addEventListener("click",()=>{
    startquiz(category);
});

let myobj={
    category:"NULL",
    difficulty:"NULL"
};

let startquiz=(category)=>{
    if(category==="NULL"){
        alert("select a category other than null");
    }
    else {
        myobj.category=category;
        sessionStorage.setItem("mysessionstorage",JSON.stringify(myobj));
        window.location.href = "/page2/index2.html";
    }
}

//change category name for gk and space and astronomy while sendint ot other page

