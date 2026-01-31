var right_or_wrong=document.getElementById("rorw");
var usernumbers=document.getElementById("user_number");
var random_number=Math.floor(Math.random()*10)+1
console.log(random_number);
var score=document.getElementById("score");
var totalscores=10;
function checknumber(){
    var check_usernum=usernumbers.value;
    if(check_usernum==random_number)
    {
        right_or_wrong.textContent="you are right";
        alert("You are win!!!");
       

    }
    else{
        right_or_wrong.textContent="You are wrong";
        totalscores=totalscores-1;
        if(totalscores==-1)
        {
           alert("You Lose the Game!!!");
        }
        score.textContent="score:"+totalscores;
    }
}