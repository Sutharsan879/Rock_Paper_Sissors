const player=document.getElementById("Player");
const computer=document.getElementById("Computer");
const results=document.getElementById("Result");

const button=document.querySelectorAll('button');

button.forEach(button=>button.addEventListener('click',(e)=>{
    playerchoice=e.target.id;
    player.innerHTML=playerchoice;
    computerchoice();
    resultview();
}))

function computerchoice()
{
    const selection=Math.floor(Math.random()*3)+1;
    if(selection===1)
    {
        computerchoosen="Stone";
    }
    else if(selection===2)
    {
        computerchoosen="Paper";
    }
    else if(selection===3)
    {
        computerchoosen="Sissors";
    }
    computer.innerHTML=computerchoosen;
}

function resultview()
{
    if(computerchoosen===playerchoice)
    {
        result="Tie..";
    }
    else if(computerchoosen==="Stone"&&playerchoice==="Paper")
    {
        result="User Wins";
    }
    else if(computerchoosen==="Paper"&&playerchoice==="Sissors")
    {
        result="User Wins";
    }
    else if(computerchoosen==="Sissors"&&playerchoice==="Stone")
    {
        result="User Wins";
    }

    else if(computerchoosen==="Paper"&&playerchoice==="Stone")
    {
        result="Computer Wins";
    }
    else if(computerchoosen==="Sissors"&&playerchoice==="Paper")
    {
        result="Computer Wins";
    }
    else if(computerchoosen==="Stone"&&playerchoice==="Sissors")
    {
        result="Computer Wins";
    }
    results.innerHTML=result;
}