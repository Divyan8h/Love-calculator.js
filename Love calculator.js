var a = prompt("Enter your name");
var b = prompt("Enter your couple name");
var c = Math.floor(Math.random()*100)+1;
alert("Love percentage of " + a + " and " + b + " is " + c + "% .");       
if(c < 20)
{
    alert("Your love is at risk.");
}
else if(c<50 && c>20)
{
    alert("You should give some time to your relationship.");
}
else if(c>50 && c<80)
{
    alert("You have a good understanding with your mate.");
}
else if(c>80)
{
    alert("You should marry your mate.")
}
