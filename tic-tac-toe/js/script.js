//selects grid and alternates input X and O
var input = "X";
var grids = document.querySelectorAll('.grid');
var grid0, grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8;
var reset = document.querySelector('button');
var player = document.querySelector('p');


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
updateValue();

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


grids.forEach(function(grid) {
  // console.log(grid);
  grid.addEventListener('click', function(event) {
      console.log(event);

      if (event.target.innerHTML !== "&nbsp;") {
        return;
      }

      event.target.innerHTML = input;
      if (input == "X") {
        input = "O";
      } else {
        input = "X";
      }

      player.innerHTML = ("Current player: " + input);

      columnWin("X");
      columnWin("O");

      rowWin("X");
      rowWin("O");

      diagonalWin("X");
      diagonalWin("O");
  })
});

reset.addEventListener('click', function(e) {
  grids.forEach(function(grid) {
    // make grid to ""
    grid.innerHTML = "&nbsp;"
  })
});

// where do you get the value?
// where do you set it?

