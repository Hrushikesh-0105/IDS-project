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

//getting section tag of question and options
let question_section=document.querySelector("#questions");
let options_section=document.querySelector("#options");

//getting the question and options from html
let question=document.querySelector("#question");
let option_1=document.querySelector("#label1");
let option_2=document.querySelector("#label2");
let option_3=document.querySelector("#label3");
let option_4=document.querySelector("#label4");

//accessing radiobuttons(options)
const radiobutton1 = document.querySelector('#option_1');
const radiobutton2 = document.querySelector('#option_2');
const radiobutton3 = document.querySelector('#option_3');
const radiobutton4 = document.querySelector('#option_4');

//accessing buttons
let nextbtn=document.querySelector("#next_btn");
let backbtn=document.querySelector("#back_btn");
let answer_feedbackbtn=document.querySelector("#Answer_Feedback");

//accesing table section for visibility after submission
let table_section=document.querySelector("#time_table")

//accessing scorebar
let score_container=document.querySelector("#score_container");
let display_score=document.querySelector("#score");
let inner_score_bar=document.querySelector("#inner_score_bar");
let percentage=document.querySelector("#percentage");
score_container.classList.add("hidden")

//random questions generator
let random_question=[];
let correct_answers=[0,0,0,0,0];
let user_answers=[0,0,0,0,0];
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
    let current_difficulty=myobj.difficulty;
    let question_object=Qdata[current_category][current_difficulty];
    
    //displaying first question
    if(question_index===0){
        question.innerText=`Q ${question_index+1}) `+question_object[current_question]["q"];
        option_1.children[0].nextSibling.textContent=question_object[current_question][1];
        option_2.children[0].nextSibling.textContent=question_object[current_question][2];
        option_3.children[0].nextSibling.textContent=question_object[current_question][3];
        option_4.children[0].nextSibling.textContent=question_object[current_question][4];
        correct_answers[question_index]=question_object[current_question]["ans"];
    }
    //adding functionality to next button
    nextbtn.addEventListener("click",()=>{
        if(nextbtn.innerText==="submit"){
            //hiding questions and options
            question_section.classList.add("hidden");
            options_section.classList.add("hidden");
            backbtn.classList.add("hidden");
            exit_btn.classList.remove("hidden");
            nextbtn.classList.add("hidden");
            table_section.classList.remove("hidden");
            document.querySelector("#time_left").classList.add("hidden");
            answer_feedbackbtn.classList.remove("hidden");
            let total_score=calculatescore();
            display_score.innerText+=" "+String(total_score)+"/5";
            percentage.innerText=" "+String(total_score*100/5)+"%";
            inner_score_bar.style.width=String(total_score*100/5)+'%'; 
            score_container.classList.remove("hidden");

            return;
        }
        ++question_index;
        if(question_index===1){
            exit_btn.classList.add("hidden");
            backbtn.classList.remove("hidden");
        }
        else if(question_index===4){
            nextbtn.innerText="submit";
        }
        current_question=random_question[question_index];
        question.innerText=`Q ${question_index+1}) `+question_object[current_question]["q"];
        option_1.children[0].nextSibling.textContent=question_object[current_question][1];
        option_2.children[0].nextSibling.textContent=question_object[current_question][2];
        option_3.children[0].nextSibling.textContent=question_object[current_question][3];
        option_4.children[0].nextSibling.textContent=question_object[current_question][4];
        correct_answers[question_index]=question_object[current_question]["ans"];
    })
    //adding functionality to back button
    backbtn.addEventListener("click",()=>{
        if(question_index==4){
            nextbtn.innerText="next";
        }
        --question_index;
        current_question=random_question[question_index];
        if(question_index===0){
            exit_btn.classList.remove("hidden");
            backbtn.classList.add("hidden");
        }
        question.innerText=`Q ${question_index+1}) `+question_object[current_question]["q"];
        option_1.children[0].nextSibling.textContent=question_object[current_question][1];
        option_2.children[0].nextSibling.textContent=question_object[current_question][2];
        option_3.children[0].nextSibling.textContent=question_object[current_question][3];
        option_4.children[0].nextSibling.textContent=question_object[current_question][4];
        correct_answers[question_index]=question_object[current_question]["ans"];
    })

    //adding functionality to radio buttons(options)
    radiobutton1.addEventListener('click',(evt)=>{
        user_answers[question_index]=1;
    })
    radiobutton2.addEventListener('click',(evt)=>{
        user_answers[question_index]=2;
    })
    radiobutton3.addEventListener('click',(evt)=>{
        user_answers[question_index]=3;
    })
    radiobutton4.addEventListener('click',(evt)=>{
        user_answers[question_index]=4;
    })

    //adding functionality to answer feedback btn
    answer_feedbackbtn.addEventListener("click",()=>{
        myobj.correct_answers=correct_answers;
        myobj.user_answers=user_answers;
        myobj.question_sequence=random_question;
        sessionStorage.setItem("mysessionstorage",JSON.stringify(myobj));
        window.location.href = "/page4/index4.html";
    })

    calculatescore=()=>{
        let count=0;
        for(let i=0;i<5;i++){
            if(user_answers[i]===correct_answers[i]){
                ++count;
            }
        }
        return count;
    };
});

