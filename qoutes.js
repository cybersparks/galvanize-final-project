//Carl said to create this qoute.js file, and all function classes(.) and ID(#)s would communicate.
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
            //Source for borrowed logic: starting from "const qoutes =" ending at randomQoute console.log (https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array)
            const qoutes = ["If you don't Have TIME, You Don't Have PRIORITIES -Tim Ferris",
             "Anger is fear shown publicly  -Tim Ferris", 
             "Discipline will set you free  -Jocko Williams", 
             "The 5 P's: Proper, Preperation, Prevents, Poor, Performance ", 
             "A life not examined is a life not worth living -Socrates", 
             "Lifes Purpose: Healthy Lifestyle, Loving Family, Financial Independence", 
             "Seneca: We suffer more often in imagination, then in reality", 
             "Anxiety is living in the future, Depression is living in the past, Breathe and remember to be PRESENT", 
             "How to combat Anxiety: Tap into your pre-frontal cortex by making lists, schedule time to work on whats importatn but not yet due", 
             "3 Rules of Life: Drive your own car. Drive around the next corner. Leave what's in the rear view mirror, in the rear view mirror.", 
             "The way you view other races, is a clear determinent to how successfull you will be - Dr. Paul", 
             "Thank you Carl and Justin and Vets In Tech for helping me learn to build this website!!"];
            const randomQoute = qoutes[Math.floor(Math.random() * qoutes.length)];

            //This console log shows you in dev tools the above is working.
            console.log("ponder... =>", randomQoute);

            //function to return randomQoute output from code above
            //Logic source: (https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_return_pi)
            function myFunction() {
                return randomQoute;
              }
              
              document.getElementById("qoutes-here").innerHTML = myFunction();
            //end of randomQoute function.


            
        
        }     
    


    


}) 
