//receiving the category and difficulty object
let myobj=JSON.parse(sessionStorage.getItem("mysessionstorage"));
//
let exit_btn=document.querySelector("#exit_btn");
exit_btn.classList.remove("hidden");

//setting the category on screen
let category_name=document.querySelector("#category_name");
category_name.innerText+=" "+ myobj.category;
let difficulty_name=document.querySelector("#difficulty_level");
difficulty_name.innerText+=" "+ myobj.difficulty;

//getting the question and options from html
let question=document.querySelector("#question");
let option_1=document.querySelector("#option_1");
let option_2=document.querySelector("#option_2");
let option_3=document.querySelector("#option_3");
let option_4=document.querySelector("#option_4");

//random questions generator
let random_question=[];
{
    random_question.push(Math.floor(Math.random()*5)+1);
    let i=1;
    while(i<5){
        let random=Math.floor(Math.random()*5)+1
        if(!random_question.includes(random)){
            random_question.push(random);
            ++i;
        }
        else continue;
    }
}
let question_index=0;
let current_question=random_question[question_index];

let Qdata;

//fucntion for fetching data form json
function fetchdata() {
    return fetch("./quizquestions.json")
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

// Fetch data and set Qdata
fetchdata().then(data => {
    Qdata = data; 
    let current_category=myobj.category;
    console.log(current_category);
    // console.log(Qdata.myobj.category)
    //now we have accesssed qdata
    // if(question_index===0){
    //     question.innerText=
    // }

});
