/*This has an anonymous function, thats why the function inside the parantheses*/
// ALWAYS INCLUDE document.addEventListener('DOMContentLoaded', function () {} FUNCTION WHEN STARTING ANY JS FUNCTION ON THIS FILE. 
//THIS FIRST LINE OF CODE IS NEEDED TO TELL THE DOM TO RUN THIS JS BEFORE RENDIRING THE PAGE
//ITS ONE OF THOSE RULES YOU HAVE TO LIVE WITH
//****Below code lets you ping the Pokemon API.
document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector('#search-button');
    let input = document.querySelector('#search-input');
    let pokePic = document.querySelector('#pokePic');
    let pokePic2 = document.querySelector('#pokePic2');
    button.addEventListener('click', function () {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/' + input.value)
        .then(function (result) {
          console.log(result.data.sprites.front_default);
          pokePic.src = result.data.sprites.front_default;
          pokePic2.src = result.data.sprites.back_default;
        })
        .catch(function(error){
          console.log(error)
          pokePic.src = 'https://vivianpetersoops.com/wp-content/uploads/2017/11/oops-orange.jpg'
        })
    });
  });
//DUDE check out the CONSOLE.LOG under the hood.
/* End of hitting Pokemon API and code */

/* Start of Event Listener Function FOR SOCIAL MEDIA */
//ALWAYS NEED THIS TOP CODE WHEN STARTING A NEW JS FUNCTION document.addEventListener('DOMContentLoaded', function () {}
//Added click event listener to open you tube. 
//Source How to open a website: https://stackoverflow.com/questions/1226714/how-to-get-the-browser-to-navigate-to-url-in-javascript
//Source How to use Event Handlers: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
document.addEventListener('DOMContentLoaded', function () {

var x = document.getElementById("Ybutton");
x.addEventListener("click", socialMedia);

    function socialMedia() {
        window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
        
}
})

//Added above function for LinkedIn button redirect.
//You'll need to learn how to build better functions to loop through this. 
//automate this
//THIS DID NOT WORK FOR SOME REASON
// Linked In re-direct//
document.addEventListener('DOMContentLoaded', function () {

var x = document.getElementById("LinkedButton");
 x.addEventListener("click", linkedInFunction);
    
    function linkedInFunction() {
        window.location.href = 'https://www.linkedin.com/in/jessiegonzalez1';
            
}
})

//Twitter re-direct
document.addEventListener('DOMContentLoaded', function () {

var x = document.getElementById("tbutton");
 x.addEventListener("click", twitterfunction);
    
        function twitterfunction() {
            window.location.href = 'https://twitter.com/HumbleVet';
            
}
})