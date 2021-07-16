var cols, rows;
var w = 40;
var grid = [];
var current;
var stack = [];
var stoneTxtTestImg, DungeonTxtImg, OverworldTxtImg, CPTxtImg;
var tst;
var tiless = [];


function setup() {
  createCanvas(displayWidth - 50,displayHeight - 105);
  //cam = createCapture(VIDEO);
  stoneTxtTestImg = loadImage("Images/stnTxt.png");

  DungeonTxtImg = loadImage("Images/dungeon_tiles.png");

  OverworldTxtImg = loadImage("Images/pixel-art-style-set-different-texture-pattern-sprites-stone-wood-brick-dirt-metal-bit-game-design-tiles-isolated-dark-blue-139009705.jpg");
  
  CPTxtImg = loadImage("Images/ProjectUtumno_full.png");
  

  cols = floor(width / w);
  rows = floor(height / w);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
  //tiles();

}

function draw() {
  background(51);
  //scale(10);

  for (var i = 0; i < grid.length; i++) {
    grid[i].display();
  }

  current.visited = true;
  current.highlight();

  var next = current.checkNeighbors();
  if (next) {
    next.visited = true;


    stack.push(current);


    removeWalls(current, next);


    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }

  drawSprites();
  
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {
  var x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  var y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

function tiles(){
  for (var a = 0; a < rows; a++) {
    for (var b = 0; b < cols; b++) {
      var til = createSprite(a,b,w,w);
      til.addImage(stoneTxtTestImg);
      tiless.push(til);
    }
  }
}



 