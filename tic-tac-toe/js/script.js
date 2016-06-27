//selects grid and alternates input X and O
var input = "X";
var grids = document.querySelectorAll('.grid'); //array
var grid0, grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8;
var reset = document.querySelector('button');
var player = document.querySelector('p');

//reads current value of grid
var updateValue = function() {
  // column1
  grid0 = grids[0].innerHTML;
  grid1 = grids[1].innerHTML;
  grid2 = grids[2].innerHTML;

  // column2
  grid3 = grids[3].innerHTML;
  grid4 = grids[4].innerHTML;
  grid5 = grids[5].innerHTML;

  // column3
  grid6 = grids[6].innerHTML;
  grid7 = grids[7].innerHTML;
  grid8 = grids[8].innerHTML;
};

var columnWin = function (letter) {
updateValue(); //get value of grid

  if (grid0 == letter && grid1 == letter && grid2 == letter) {
    alert(letter + " is the winner!");
  }
  else if (grid3 == letter && grid4 == letter && grid5 == letter) {
    alert(letter + " is the winner!");
  }
  else if (grid6 == letter && grid7 == letter && grid8 == letter) {
    alert(letter + " is the winner!");
  }
};

var rowWin = function (letter) {
updateValue();

  if (grid0 == letter && grid3 == letter && grid6 == letter) {
    alert(letter + " is the winner!");
  }
  else if (grid1 == letter && grid4 == letter && grid7 == letter) {
    alert(letter + " is the winner!");
  }
  else if (grid2 == letter && grid5 == letter && grid8 == letter) {
    alert(letter + " is the winner!");
  }
};


var diagonalWin = function (letter) {
updateValue();
  if (grid0 == letter && grid4 == letter && grid8 == letter) {
    alert(letter + " is the winner!");
  }
  else if (grid6 == letter && grid4 == letter && grid2 == letter) {
    alert(letter + " is the winner!");
  }
};

//looping through array
grids.forEach(function(grid) {
  // console.log(grid);
  grid.addEventListener('click', function(event) {
      console.log(event);
      //checks if space is available
      if (event.target.innerHTML !== "&nbsp;") {
        return;
      }
      //code for alternating X and Os
      event.target.innerHTML = input;
      if (input == "X") {
        input = "O";
      } else {
        input = "X";
      }
      //changes current player display
      player.innerHTML = ("Current player: " + input);

      //calling win functions and inputing X and O
      columnWin("X");
      columnWin("O");
      rowWin("X");
      rowWin("O");
      diagonalWin("X");
      diagonalWin("O");
  })
});

//function for reset button
reset.addEventListener('click', function(e) {
  grids.forEach(function(grid) {
    grid.innerHTML = "&nbsp;"
  })
});



