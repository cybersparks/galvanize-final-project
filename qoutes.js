// ALWAYS INCLUDE document.addEventListener('DOMContentLoaded', function () {}) FUNCTION WHEN STARTING ANY JS FUNCTION ON THIS FILE. 
//THIS FIRST LINE OF CODE IS NEEDED TO TELL THE DOM TO RUN THIS JS BEFORE RENDIRING THE PAGE
//ITS ONE OF THOSE RULES YOU HAVE TO LIVE WITH
document.addEventListener('DOMContentLoaded', function () {

//Step #1 You need to code an event listener when the div3 button is pressed
//Step #2 It needs to randomly select one of the quotes in the array
//Step #3 it needs to display the qoute in div4


//Step #1 
//Twitter re-direct
var x = document.getElementById("qoutesBtn");
    x.addEventListener("click", tfunction);
        
        function tfunction() {
            const qoutes = ["If you don't Have TIME, You Don't Have PRIORITIES -Tim Ferris",
             "Anger is fear shown publicly -Tim Ferris", 
             "Discipline will set you free -Jacko Williams", 
             "5 P's Proper, Preperation, Prevents, Poor, Performance -Vicente R.", 
             "May", 
             "June", 
             "July", 
             "August", 
             "September", 
             "October", 
             "November", 
             "December"];
            const randomQoute = qoutes[Math.floor(Math.random() * qoutes.length)];

            console.log("ponder... =>", randomQoute);

//Source for above code, starting from "const qoutes =" ending at randomQoute console.log (https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array)
            //window.location.href = 'https://twitter.com/HumbleVet';
        
        }     
    


    


}) 