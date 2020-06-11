/*Carl wrote the below function to test to see if we can hit an end point. */
/*This has an anonymous function, thats why the function inside the parantheses*/
/*The .then makes the jS run asynchrousn instead of Syncrhones*/
// wait till HTML loads then run this { } JavaScript
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
//DUDE look at your CONSOLE.LOG for whats happening.
//End of hitting Pokemon API and code//