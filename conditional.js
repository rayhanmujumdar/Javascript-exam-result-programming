// var isFoodReady = true;
// jodi khabar ready hoi taile ami khamu..
//if food is ready i will eat;
// make a calculation exam result;
 var bangla = parseFloat(prompt("enter your bangla subject Marks"));
 var english = parseFloat(prompt("enter your english subject Marks"));;
 var math = parseFloat(prompt("enter your math subject Marks"));;
 var islam = parseFloat(prompt("enter your islam subject Marks"));;
 var totalNumber = (bangla+english+math+islam);
 console.log("Your Total Number = "+totalNumber)
var parsentige = (totalNumber*100)/400;
console.log("Marks Parsentige = "+parsentige+"%")
if(parsentige>=90 && bangla>=40 && english>=40 && math>=40 && islam>=40)
{
    console.log("Golden A+");
}
else if(parsentige>=80 && parsentige<90 && bangla>=40 && english>=40 && math>=40 && islam>=40)
{
    console.log("A+");
}
else if(parsentige>=60 && parsentige<80 && bangla>=40 && english>=40 && math>=40 && islam>=40)
{
    console.log("A-")
}
else if(parsentige>=40 && parsentige<60 && bangla>=40 && english>=40 && math>=40 && islam>=40)
{
    console.log("B")
}
else{
    if(bangla<40 || english<40 || math<40 || islam<40){
        if(bangla<40){
            console.log("You fail bangla,Marks = "+bangla);
            if(english<40){
                console.log("You fail english,Marks = "+english);
            }
            else if(math<40){
                console.log("You fail english,Marks = "+math);
            }
            else if(islam<40){
                console.log("You fail english,Marks = "+islam);
            }
        }
        else if(english<40){
            console.log("You fail english,Marks = "+english);
            if(bangla<40){
                console.log("You fail english,Marks = "+bangla);
            }
            else if(math<40){
                console.log("You fail english,Marks = "+math);
            }
            else if(islam<40){
                console.log("You fail english,Marks = "+islam);
            }
        }
        else if(math<40){
            console.log("You fail math,Marks = "+math);
            if(english<40){
                console.log("You fail english,Marks = "+english);
            }
            else if(bangla<40){
                console.log("You fail english,Marks = "+bangla);
            }
            else if(islam<40){
                console.log("You fail english,Marks = "+islam);
            }
        }
        else if(islam<40){
            console.log("You fail islam,Marks = "+islam);
            if(english<40){
                console.log("You fail english,Marks = "+english);
            }
            else if(math<40){
                console.log("You fail english,Marks = "+math);
            }
            else if(bangla<40){
                console.log("You fail english,Marks = "+bangla);
            }
        }
        console.log("Your result is = 'GOlDEN F'")       
    }
    else{
        console.log("please enter your exam number")
    }
}