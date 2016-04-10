var makeGrid = function(rows, columns) {
  var squareSize = 640 / rows;
  var $row = $("<div />", {
    class: "row"
  }).css({
    "height": squareSize
  });
  var $square = $("<div />", {
    class: "square"
  }).css({
    "height": squareSize,
    "width": squareSize
  });
  for (var i = 0; i < columns; i++) {
    $row.append($square.clone());
  }
  for (var i = 0; i < rows; i++) {
    $("#wrapper").append($row.clone());
  }
};

//Will turn each square red
  var changeColor = function() {
    $(".square").hover(
      function() {
        $(this).addClass("draw");
      },
      function() {
        $(this).removeClass("draw");
      });
  };

//Will change the opacity of a square
var lighten = function() {
  $(".square").addClass("black").mouseenter(function() {
    var opacity = $(this).css("opacity");
    if (opacity > 0) {
      $(this).css("opacity", opacity - 0.1);
    } else {
      $(this).css("opacity", 0);
    }
  });
};

//Random color generator for each square
  var randomColor = function() {
    var rand = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $(".square").mouseenter(
        function() {
          $(this).css('background', rand).addClass("outline");
        }),
      $(".square").mouseleave(
        function() {
          $(this).css('background', rand).addClass("outline");
          rand = '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
  };

$(document).ready(function() {
  makeGrid(16, 16);
  changeColor();


  $(".color-change").click(function() {
    $("#wrapper").empty();
    var rows = prompt("Please enter number of rows");
    var columns = prompt("Please enter number of columns");
    makeGrid(rows, columns);
    changeColor();
  });

  $(".random-color").click(function() {
    $("#wrapper").empty();
    var rows = prompt("Please enter number of rows");
    var columns = prompt("Please enter number of columns");
    makeGrid(rows, columns);
    randomColor();
  });

  $(".bw").click(function() {
    $("#wrapper").empty();
    var rows = prompt("Please enter number of rows");
    var columns = prompt("Please enter number of columns");
    makeGrid(rows, columns);
    lighten();
  });
});