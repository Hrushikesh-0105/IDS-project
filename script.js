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



let category_names=["NULL","Mathematics","Physics","Electrical","Mechanics","Biology","Chemistry","History","General Knowledge","Space and Astronomy"];

show_hide_category=(value)=>{
    if(value!==""){
        for(let i=0;i<10;i++){
            console.log(i)
            let id=category_names[i];
            if(category_names[i].includes(value)){
                if(document.getElementById(id).classList.contains("hidden")){
                document.getElementById(id).classList.remove("hidden")
                }
            }
            else{
                document.getElementById(id).classList.add("hidden")
            }
        }
    }
    else{
        for(let i=0;i<10;i++){
            document.getElementById(category_names[i]).classList.remove("hidden");
        }
    }
}

searchbar.addEventListener("input",()=>{
    show_hide_category(searchbar.value);
    console.log(searchbar.value);
})