let Qdata;

//accessing heading

//accessing aession storage
let myobj=JSON.parse(sessionStorage.getItem("mysessionstorage"));

let user_answers=myobj.user_answers;
let correct_answers=myobj.correct_answers;
let question_sequence=myobj.question_sequence;

let category_name=document.querySelector("#category_name");
category_name.innerText+=" "+ myobj.category;
let difficulty_name=document.querySelector("#difficulty_level");
difficulty_name.innerText+=" "+ myobj.difficulty;

//accessing question and options
let question=document.querySelector("#question");
let option_1=document.querySelector("#option_1");
let option_2=document.querySelector("#option_2");
let option_3=document.querySelector("#option_3");
let option_4=document.querySelector("#option_4");

//accessing buttons
let nextbtn=document.querySelector("#next_btn");
let backbtn=document.querySelector("#back_btn");
let homebtn=document.querySelector("#home");


//
let question_index=0;
let current_question=question_sequence[question_index];


function fetchdata() {
    return fetch("./quizquestions.json")
        .then(res => res.json())
        .then(data => {
            return data;
        });
}
fetchdata().then(data => {
    Qdata = data; 
    let current_category=myobj.category;
    let current_difficulty=myobj.difficulty;
    let question_object=Qdata[current_category][current_difficulty];

    //function to change color;
    colorchange=()=>{
            switch(correct_answers[question_index]){
                case 1:option_1.style.backgroundColor=="#83f28f";
                    break;
                case 2:option_2.style.backgroundColor="#83f28f";
                    break;
                case 3:option_3.style.backgroundColor="#83f28f";
                    break;
                case 4:option_4.style.backgroundColor="#83f28f";
                    break;    
            }
        if(user_answers[question_index]!==correct_answers[question_index]){
            switch(user_answers[question_index]){
                case 1:option_1.style.backgroundColor="#FF4F4B";
                    break;
                case 2:option_2.style.backgroundColor="#FF4F4B";
                    break;
                case 3:option_3.style.backgroundColor="#FF4F4B";
                    break;
                case 4:option_4.style.backgroundColor="#FF4F4B";
                    break;    
            }
        }
    }

    if(question_index===0){
        question.innerText=`Q ${question_index+1}) `+question_object[current_question]["q"];
        option_1.innerText=question_object[current_question][1];
        option_2.innerText=question_object[current_question][2];
        option_3.innerText=question_object[current_question][3];
        option_4.innerText=question_object[current_question][4];
        colorchange();
    }

    nextbtn.addEventListener("click",()=>{
        ++question_index;
        if(question_index===1){
            backbtn.classList.remove("hidden");
        }
        else if(question_index===4){
            nextbtn.classList.add("hidden");
        }
        current_question=question_sequence[question_index];
        question.innerText=`Q ${question_index+1}) `+question_object[current_question]["q"];
        option_1.innerText=question_object[current_question][1];
        option_2.innerText=question_object[current_question][2];
        option_3.innerText=question_object[current_question][3];
        option_4.innerText=question_object[current_question][4];
        colorchange();
    })

    backbtn.addEventListener("click",()=>{
        if(question_index==4){
            nextbtn.classList.remove("hidden");
        }
        --question_index;
        current_question=question_sequence[question_index];
        if(question_index===0){
            backbtn.classList.add("hidden");
        }
        question.innerText=`Q ${question_index+1}) `+question_object[current_question]["q"];
        option_1.innerText=question_object[current_question][1];
        option_2.innerText=question_object[current_question][2];
        option_3.innerText=question_object[current_question][3];
        option_4.innerText=question_object[current_question][4];
        colorchange();
    })

    homebtn.addEventListener("click",()=>{
        myobj.category="NULL";
        myobj.difficulty="NULL";
        sessionStorage.setItem("mysessionstorage",JSON.stringify(myobj));
        window.location.href = "/index.html"
    })

    
});