// tic tac toe

//   set X and O


//     get all boxes
//     attach click event
//     set value to X
var input = "X";
var grids = document.querySelectorAll('.grid');
grids.forEach(function(grid) {
  console.log(grid);
  grid.addEventListener('click', function(event) {
    console.log(event);
    event.target.innerHTML = input;
      if (input == "X") {
        input = "O";
      } else {
        input = "X";
      }
  })
});




// grids.addEventListener('click', grids);



  // alternate X and O
  // prevent input in same grid
  // get winner


  // display winner
  // look pretty
  // isnert player NAME
  // reset game
