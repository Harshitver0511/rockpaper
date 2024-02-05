let user_score=0;
let com_score=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usercore=document.querySelector("#user_score");
const compcore=document.querySelector("#comp_score");

const gencompchoice=()=>{
    let option=["rock","paper","scissors"];
    const ranidx=Math.floor(Math.random()*3);
    return option[ranidx];

}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game draw!";
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin)=>{
    if(userwin){
        console.log("You win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        user_score++;
        usercore.innerText=user_score;

    }
    else{
        console.log("computer win");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
        com_score++;
        compcore.innerText=com_score;


    }
}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice=",compchoice);
   

    if(userchoice==compchoice){
        drawgame();   

    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissors"?false:true;
        }
        else{
           userwin= compchoice=="rock"?false:true;
        }
        showwinner(userwin);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});