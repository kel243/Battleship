/*eslint no-undef: "error"*/
/*eslint-env browser*/
/* eslint-disable no-console */

// set grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 35;

// track whose turn it is
var turn = 0;

// tracks how many hits player 1 has
var hitCount1 = 0;
// tracks how many hits player 2 has
var hitCount2 = 0;

// get the scoreboard element
var theList = document.getElementById("hiScoreBoard");
// set scoreboard to hidden
theList.style.visibility = 'hidden';

// get the stored high scores from local storage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// blank element to block the boards
var blank = document.getElementById("blank");
// set blank to hidden
blank.style.visibility = 'hidden';

// 2d array to store the board and its information
// 0 = no ships, 1 = carrier, 2 = battleship, 3 = submarine, 4 = hit, 5 = missed
var gameBoard = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]
var gameBoard2 = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]

// get the container element
var gameBoardContainer1 = document.getElementById("gameboard1");
var gameBoardContainer2 = document.getElementById("gameboard2");

// make gameBoard1 w/ ships in bottom grid
function makeBoard(){
    // make the grid columns and rows
    for (var ii = 0; ii < cols; ii++) {
        for (var jj = 0; jj < rows; jj++) {

            // create a new div HTML element for each grid square and make it the right size
            var square2 = document.createElement("noship");
            var carrier2 = document.createElement("carrier");
            var battle2 = document.createElement("battle");
            var submarine2 = document.createElement("submarine");
            var hit2 = document.createElement("hit");
            var missed2 = document.createElement("missed");
           
            if(gameBoard[jj][ii] == 0){
                gameBoardContainer2.appendChild(square2);
                 // give each div element a unique id based on its row and column, like "s00"
                square2.id = 'a' + jj + ii;
            }else if(gameBoard[jj][ii] == 1){
                gameBoardContainer2.appendChild(carrier2);
                carrier2.id = 'a' + jj + ii;
            }else if(gameBoard[jj][ii] == 2){
                gameBoardContainer2.appendChild(battle2);
                battle2.id = 'a' + jj + ii;
            }else if(gameBoard[jj][ii] == 3){
                gameBoardContainer2.appendChild(submarine2);
                submarine2.id = 'a' + jj + ii;
            }else if(gameBoard[jj][ii] == 4){
                gameBoardContainer2.appendChild(hit2);
                hit2.id = 'a' + jj + ii;
            }else if(gameBoard[jj][ii] == 5){
                gameBoardContainer2.appendChild(missed2);
                missed2.id = 'a' + jj + ii;
            }				
      
            // set each grid square's coordinates: multiples of the current row or column number
            var topPosition2 = jj * squareSize;
            var leftPosition2 = ii * squareSize;			

            // use CSS absolute positioning to place each grid square on the page
            square2.style.top = topPosition2 + 'px';
            square2.style.left = leftPosition2 + 'px';	
            
            carrier2.style.top = topPosition2 + 'px';
            carrier2.style.left = leftPosition2 + 'px';	
            
            battle2.style.top = topPosition2 + 'px';
            battle2.style.left = leftPosition2 + 'px';	
            
            submarine2.style.top = topPosition2 + 'px';
            submarine2.style.left = leftPosition2 + 'px';
            
            hit2.style.top = topPosition2 + 'px';
            hit2.style.left = leftPosition2 + 'px';	
            
            missed2.style.top = topPosition2 + 'px';
            missed2.style.left = leftPosition2 + 'px';
            
           
        }
    }
} 

// make gameBoard2 w/ ships in bottom grid
function makeBoard2(){
    // make the grid columns and rows
    for (var ii = 0; ii < cols; ii++) {
        for (var jj = 0; jj < rows; jj++) {

            // create a new div HTML element for each grid square and make it the right size
            var square2 = document.createElement("noship");
            var carrier2 = document.createElement("carrier");
            var battle2 = document.createElement("battle");
            var submarine2 = document.createElement("submarine");
            var hit2 = document.createElement("hit");
            var missed2 = document.createElement("missed");
           
            if(gameBoard2[jj][ii] == 0){
                gameBoardContainer2.appendChild(square2);
                 // give each div element a unique id based on its row and column, like "s00"
                square2.id = 'a' + jj + ii;
            }else if(gameBoard2[jj][ii] == 1){
                gameBoardContainer2.appendChild(carrier2);
                carrier2.id = 'a' + jj + ii;
            }else if(gameBoard2[jj][ii] == 2){
                gameBoardContainer2.appendChild(battle2);
                battle2.id = 'a' + jj + ii;
            }else if(gameBoard2[jj][ii] == 3){
                gameBoardContainer2.appendChild(submarine2);
                submarine2.id = 'a' + jj + ii;
            }else if(gameBoard2[jj][ii] == 4){
                gameBoardContainer2.appendChild(hit2);
                hit2.id = 'a' + jj + ii;
            }else if(gameBoard2[jj][ii] == 5){
                gameBoardContainer2.appendChild(missed2);
                missed2.id = 'a' + jj + ii;
            }				
      
            // set each grid square's coordinates: multiples of the current row or column number
            var topPosition2 = jj * squareSize;
            var leftPosition2 = ii * squareSize;			

            // use CSS absolute positioning to place each grid square on the page
            square2.style.top = topPosition2 + 'px';
            square2.style.left = leftPosition2 + 'px';	
            
            carrier2.style.top = topPosition2 + 'px';
            carrier2.style.left = leftPosition2 + 'px';	
            
            battle2.style.top = topPosition2 + 'px';
            battle2.style.left = leftPosition2 + 'px';	
            
            submarine2.style.top = topPosition2 + 'px';
            submarine2.style.left = leftPosition2 + 'px';
            
            hit2.style.top = topPosition2 + 'px';
            hit2.style.left = leftPosition2 + 'px';	
            
            missed2.style.top = topPosition2 + 'px';
            missed2.style.left = leftPosition2 + 'px';
            
           
        }
    }
} 

// make gameBoard1 w/o ships in top grid
function makeBoardBlank(){
    // make the grid columns and rows
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {

            // create a new div HTML element for each grid square and make it the right size
            var square = document.createElement("noship");
            var hit = document.createElement("hit");
            var missed = document.createElement("missed");
            
            if(gameBoard[j][i] == 0 || gameBoard[j][i] == 1 || gameBoard[j][i] == 2 || gameBoard[j][i] == 3){
                gameBoardContainer1.appendChild(square);
                 // give each div element a unique id based on its row and column, like "s00"
                square.id = 'a' + j + i;
            }else if(gameBoard[j][i] == 4){
                gameBoardContainer1.appendChild(hit);
                hit.id = 'a' + j + i;
            }else if(gameBoard[j][i] == 5){
                gameBoardContainer1.appendChild(missed);
                missed.id = 'a' + j + i;
            }
            // set each grid square's coordinates: multiples of the current row or column number
            var topPosition = j * squareSize;
            var leftPosition = i * squareSize;			

            // use CSS absolute positioning to place each grid square on the page
            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';	
            
            hit.style.top = topPosition + 'px';
            hit.style.left = leftPosition + 'px';	
            
            missed.style.top = topPosition + 'px';
            missed.style.left = leftPosition + 'px';	
            
           
        }
    }
} 

// make gameBoard2 w/o ships in top grid
function makeBoardBlank2(){
    // make the grid columns and rows
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {

            // create a new div HTML element for each grid square and make it the right size
            var square = document.createElement("noship");
            var hit = document.createElement("hit");
            var missed = document.createElement("missed");
            
            if(gameBoard2[j][i] == 0 || gameBoard2[j][i] == 1 || gameBoard2[j][i] == 2 || gameBoard2[j][i] == 3){
                gameBoardContainer1.appendChild(square);
                 // give each div element a unique id based on its row and column, like "s00"
                square.id = 'a' + j + i;
            }else if(gameBoard2[j][i] == 4){
                gameBoardContainer1.appendChild(hit);
                hit.id = 'a' + j + i;
            }else if(gameBoard2[j][i] == 5){
                gameBoardContainer1.appendChild(missed);
                missed.id = 'a' + j + i;
            }
            // set each grid square's coordinates: multiples of the current row or column number
            var topPosition = j * squareSize;
            var leftPosition = i * squareSize;			

            // use CSS absolute positioning to place each grid square on the page
            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';	
            
            hit.style.top = topPosition + 'px';
            hit.style.left = leftPosition + 'px';	
            
            missed.style.top = topPosition + 'px';
            missed.style.left = leftPosition + 'px';	
            
           
        }
    }
}

// function to create new li objects for the scoreboard
function addListItem(newText){
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(newText));
    theList.appendChild(listItem);
}

// input positions onto board
function inputPosition(position, board){
    if(position.charAt(0)=='A'){
        position = position.substring(2, 7);
        position = cleanUpCoor(position);
        if(position.charAt(0) == position.charAt(2)){
            var x = position.charAt(0);
            x = parseInt(x, 10);
            var y1 = position.charAt(1);
            var y2 = position.charAt(3);
            y1 = parseInt(y1, 10);
            y2 = parseInt(y2, 10);
            for(var n = y1; n <= y2; n++){
                board[x][n] = 1;
            }
        }else if(position.charAt(1) == position.charAt(3)){
            var y = position.charAt(1);
            y = parseInt(y, 10);
            var x1 = position.charAt(0);
            var x2 = position.charAt(2);
            x1 = parseInt(x1, 10);
            x2 = parseInt(x2, 10);
            for(n = x1; n <= x2; n++){
                board[n][y] = 1;
            }
        }
    }else if(position.charAt(0)=='B'){
        position = position.substring(2, 7);
        position = cleanUpCoor(position);
        if(position.charAt(0) == position.charAt(2)){
            x = position.charAt(0);
            x = parseInt(x, 10);
            y1 = position.charAt(1);
            y2 = position.charAt(3);
            y1 = parseInt(y1, 10);
            y2 = parseInt(y2, 10);
            for(n = y1; n <= y2; n++){
                board[x][n] = 2;
            }
        }else if(position.charAt(1) == position.charAt(3)){
            y = position.charAt(1);
            y = parseInt(y, 10);
            x1 = position.charAt(0);
            x2 = position.charAt(2);
            x1 = parseInt(x1, 10);
            x2 = parseInt(x2, 10);
            for(n = x1; n <= x2; n++){
                board[n][y] = 2;
            }
        }
    }else if(position.charAt(0)=='S'){
        position = position.substring(2, 7);
        position = cleanUpCoor(position);
        if(position.charAt(0) == position.charAt(2)){
            x = position.charAt(0);
            x = parseInt(x, 10);
            y1 = position.charAt(1);
            y2 = position.charAt(3);
            y1 = parseInt(y1, 10);
            y2 = parseInt(y2, 10);
            for(n = y1; n <= y2; n++){
                board[x][n] = 3;
            }
        }else if(position.charAt(1) == position.charAt(3)){
            y = position.charAt(1);
            y = parseInt(y, 10);
            x1 = position.charAt(0);
            x2 = position.charAt(2);
            x1 = parseInt(x1, 10);
            x2 = parseInt(x2, 10);
            for(n = x1; n <= x2; n++){
                board[n][y] = 3;
            }
        }
    }
}

// replace A-J with 0-9 and remove -
function cleanUpCoor(str){
    str = str.replace(/A/g, 0);
    str = str.replace(/B/g, 1);
    str = str.replace(/C/g, 2);
    str = str.replace(/D/g, 3);
    str = str.replace(/E/g, 4);
    str = str.replace(/F/g, 5);
    str = str.replace(/G/g, 6);
    str = str.replace(/H/g, 7);
    str = str.replace(/I/g, 8);
    str = str.replace(/J/g, 9);
    str = str.replace('-', '');
    return str;
}

// runs when not all three ships were placed
function allShipsPlacedError(arr, pos){
    alert("You did not enter the right syntax or did not position all three ships!");
    pos = prompt("Place your ships.\nA for aircraft carrier (5 spaces)\nB for battleship (4 spaces)\nS for submarine (3 spaces)\nExample placement: A:A1-A5;B:B6-E6;S:H3-J3 or A(A1-A5); B(B6-E6); S(H3-J3);");
    pos = pos.replace(/\s+/g, '');
    arr = pos.split(";");
    return arr;
}

// runs when wrong letters were used to designate the ships
function shipLetterError(arr, pos){
    alert("You did not enter the correct letter for each ship!");
    pos = prompt("Place your ships.\nA for aircraft carrier (5 spaces)\nB for battleship (4 spaces)\nS for submarine (3 spaces)\nExample placement: A:A1-A5;B:B6-E6;S:H3-J3 or A(A1-A5); B(B6-E6); S(H3-J3);");
    pos = pos.replace(/\s+/g, '');
    arr = pos.split(";");
    return arr;
}

// runs when wrong number of spaces is allocated for each ship
function shipSpaceError(arr, pos){
    alert("You did not enter the correct number of spaces for each ship!");
    pos = prompt("Place your ships.\nA for aircraft carrier (5 spaces)\nB for battleship (4 spaces)\nS for submarine (3 spaces)\nExample placement: A:A1-A5;B:B6-E6;S:H3-J3 or A(A1-A5); B(B6-E6); S(H3-J3);");
    pos = pos.replace(/\s+/g, '');
    arr = pos.split(";");
    return arr;
}

// test if each ship had the correct amount of spaces allocated
// return 1 if there is a correct amount of spaces
// return 0 if there is an incorrect amount of spaces
function shipSpaceTest(position){
    if(position.charAt(0)=='A'){
        position = position.substring(2, 7);
        position = cleanUpCoor(position);
        if(position.charAt(0) == position.charAt(2)){
            var y1 = position.charAt(1);
            var y2 = position.charAt(3);
            y1 = parseInt(y1, 10);
            y2 = parseInt(y2, 10);
            if(y2 - y1 + 1 == 5){ // return 1 if spaces = 5, return 0 otherwise
                return 1;
            }else{
                return 0;
            }
        }else if(position.charAt(1) == position.charAt(3)){
            var x1 = position.charAt(0);
            var x2 = position.charAt(2);
            x1 = parseInt(x1, 10);
            x2 = parseInt(x2, 10);
            if(x2 - x1 + 1 == 5){ // return 1 if spaces = 5, return 0 otherwise
                return 1;
            }else{
                return 0;
            }
        }
    }else if(position.charAt(0)=='B'){
        position = position.substring(2, 7);
        position = cleanUpCoor(position);
        if(position.charAt(0) == position.charAt(2)){ 
            y1 = position.charAt(1);
            y2 = position.charAt(3);
            y1 = parseInt(y1, 10);
            y2 = parseInt(y2, 10);
            if(y2 - y1 + 1 == 4){ // return 1 if spaces = 4, return 0 otherwise
                return 1;
            }else{
                return 0;
            }
        }else if(position.charAt(1) == position.charAt(3)){
            x1 = position.charAt(0);
            x2 = position.charAt(2);
            x1 = parseInt(x1, 10);
            x2 = parseInt(x2, 10);
            if(x2 - x1 + 1 == 4){ // return 1 if spaces = 4, return 0 otherwise
                return 1;
            }else{
                return 0;
            }
        }
    }else if(position.charAt(0)=='S'){
        position = position.substring(2, 7);
        position = cleanUpCoor(position);
        if(position.charAt(0) == position.charAt(2)){
            y1 = position.charAt(1);
            y2 = position.charAt(3);
            y1 = parseInt(y1, 10);
            y2 = parseInt(y2, 10);
            if(y2 - y1 + 1 == 3){ // return 1 if spaces = 3, return 0 otherwise
                return 1;
            }else{
                return 0;
            }
        }else if(position.charAt(1) == position.charAt(3)){
            x1 = position.charAt(0);
            x2 = position.charAt(2);
            x1 = parseInt(x1, 10);
            x2 = parseInt(x2, 10);
            if(x2 - x1 + 1 == 3){ // return 1 if spaces = 3, return 0 otherwise
                return 1;
            }else{
                return 0;
            }
        }
    }
}

var player1 = prompt("What is the name of Player 1?");
var pos1 = prompt("Place your ships.\nA for aircraft carrier (5 spaces)\nB for battleship (4 spaces)\nS for submarine (3 spaces)\nExample placement: A:A1-A5;B:B6-E6;S:H3-J3 or A(A1-A5); B(B6-E6); S(H3-J3);");
pos1 = pos1.replace(/\s+/g, ''); // get rid of spaces
var split1 = pos1.split(";"); // separate the string at ; and store in array
//check if all three ships are positioned
while (split1.length < 3){
   split1 = allShipsPlacedError(split1, pos1);
} 
// check if the syntax is correct for ship letters
for (var q = 0; q < split1.length; q++){ // check if the syntax is correct for ship letters
    while(split1[q].charAt(0) != 'A' && split1[q].charAt(0) != 'B' && split1[q].charAt(0) != 'S') {
        split1 = shipLetterError(split1, pos1);
    }
} 
// check the spaces for each space is correct
for (q = 0; q < split1.length; q++){ 
    while (shipSpaceTest(split1[q]) == 0) {
        split1 = shipSpaceError(split1, pos1);
    }
} 

var player2 = prompt("What is the name of Player 2?");
var pos2 = prompt("Place your ships.\nA for aircraft carrier (5 spaces)\nB for battleship (4 spaces)\nS for submarine (3 spaces)\nExample placement: A:A1-A5;B:B6-E6;S:H3-J3 or A(A1-A5); B(B6-E6); S(H3-J3);");
pos2 = pos2.replace(/\s+/g, ''); // get rid of spaces
var split2 = pos2.split(";"); // separate the string at ; and store in array
//check if all three ships are positioned
while(split2.length < 3){
    split2 = allShipsPlacedError(split2, pos2);
} 
// check if the syntax is correct for ship letters
for (q = 0; q < split2.length; q++){
    while (split2[q].charAt(0) != 'A' && split2[q].charAt(0) != 'B' && split2[q].charAt(0) != 'S') {
        split2 = shipLetterError(split2, pos2);
    }
} 
// check the spaces for each space is correct
for (q = 0; q < split2.length; q++){ 
    while (shipSpaceTest(split2[q]) == 0) {
        split2 = shipSpaceError(split2, pos2);
    }
} 

// load the ships onto gameBoard1
for (var p = 0; p < split1.length; p++){
    inputPosition(split1[p], gameBoard);
}

// load the ships onto gameBoard2
for (var pp = 0; pp < split2.length; pp++){
    inputPosition(split2[pp], gameBoard2);
}

// functions to generate the starting boards
makeBoard();
makeBoardBlank2();

// set event listeners for all elements in board
confirm("Click OK to begin " + player1 + "'s turn");
gameBoardContainer1.addEventListener("click", fire, false);   

// function to fire at the enemy board
// change block to white if shot missed
// change block to red if shot red
// also switches the boards
function fire(e) {
    if (turn == 0) {  // player 1's turn    
        //get id for the square clicked
	var row = e.target.id.substring(1,2);
	var col = e.target.id.substring(2,3);     		
	// if player clicks a square with no ship, change color to white and set value to 5
	if (gameBoard2[row][col] == 0) {
            	alert("You missed!");
            	blank.style.visibility='visible';
            	e.target.style.background = 'white';
		gameBoard2[row][col] = 5;
            	turn++; // increment turn to let player2 click
            	makeBoard2();
            	makeBoardBlank();
		// if player clicks a square with a ship, change color to red and set value to 4
	} else if (gameBoard2[row][col] == 1 || gameBoard2[row][col] == 2 || gameBoard2[row][col] == 3) {
            	e.target.style.background = 'red';
		gameBoard2[row][col] = 4;		
		// increment hitCount each time a ship is hit
		hitCount1++;
            	alert("Enemy hit!");
            	blank.style.visibility='visible'; // blank the screen
		if (hitCount1 == 12) { // all enemy ships destoryed
			// calculate score based on how many times you were hit
                	var currScore = 24 - hitCount2 * 2;
                	alert("All enemy battleships have been defeated! " + player1 + " win!");
                	alert(player1 + " won with " + currScore + " points!");
                
			// create new player object to store into high score array
			var player = {
			    name: player1,
			    score: currScore
			};
                
			// push player object into high score array
			highScores.push(player);

			// sort high score array
			highScores.sort(function(a, b){return b.score - a.score});

			// cut off everything after the top 10
			highScores.splice(10);

			// add new high score array into local storage
			localStorage.setItem("highScores", JSON.stringify(highScores));

			// call addListItem for each player 
			highScores.forEach(function(obj) {
			  addListItem(obj.name + " : " + obj.score);  
			})

			setTimeout(function() { // slight delay before scoreboard appears
			    theList.style.visibility = 'visible'; 
			}, 50);
			turn--; // make turn = -1 so it does not go to next turn
		}
		turn++; // increment turn to let player2 click
            	makeBoard2();
            	makeBoardBlank();
	} else if (gameBoard[row][col] > 3) {
		alert("You already fired at this location!");
	}
        
        if(turn == 1){
            setTimeout(function() { // slight delay to allow the blank to appear before prompt
                var next = confirm("Click OK to begin " + player2 + "'s turn");
                if (next == true) {
                  blank.style.visibility = 'hidden';
                }
            }, 50);
        }
        
    } else if (turn == 1) { // player 2's turn
        // get id for the square clicked
	row = e.target.id.substring(1,2);
	col = e.target.id.substring(2,3);
        // if player clicks a square with no ship, change color to white and set value to 5
        if (gameBoard[row][col] == 0) {
		e.target.style.background = 'white';
            	gameBoard[row][col] = 5;
            	alert("You missed!");
            	blank.style.visibility='visible';
		turn--; // decrement turn to let player2 click
            	makeBoard();
            	makeBoardBlank2();
		// if player clicks a square with a ship, change color to red and set value to 4
	} else if (gameBoard[row][col] == 1 || gameBoard[row][col] == 2 || gameBoard[row][col] == 3) {
            	e.target.style.background = 'red';
		gameBoard[row][col] = 4;
		// increment hitCount each time a ship is hit
		hitCount2++;
		alert("Enemy hit!");
            	blank.style.visibility='visible'; // blank the screen
		if (hitCount2 == 12) { // all enemy ships destroyed
                	// calculate score based on how many times you were hit
			currScore = 24 - hitCount1 * 2;
                	alert(player2 + " won with " + currScore + " points!");
                 
                	// create new player object to store into high score array
			player = {
			    name: player2,
			    score: currScore
			};
                
			// push player object into high score array
			highScores.push(player);

			// sort high score array
			highScores.sort(function(a, b){return b.score - a.score});

			// cut off everything after the top 10
			highScores.splice(10);

			// add new high score array into local storage
			localStorage.setItem("highScores", JSON.stringify(highScores));

			// call addListItem for each player 
			highScores.forEach(function(obj) {
			  addListItem(obj.name + " : " + obj.score);  
			})

			setTimeout(function() { // slight delay before scoreboard appears
			    theList.style.visibility = 'visible'; 
			}, 50);
                    
                	turn++; // make turn = 2 so it does not go to next turn
		}
		turn--; // decrement turn to let player2 click
            	makeBoard();
            	makeBoardBlank2();
	} else if (gameBoard2[row][col] > 3) {
		alert("You already fired at this location!");
	}	
        
        if(turn == 0){
            setTimeout(function() { // slight delay to allow the blank to appear before prompt
                var next = confirm("Click OK to begin " + player1 + "'s turn");
                if (next == true) {
                  blank.style.visibility = 'hidden';
                }
            }, 50);
        }
        
    }
    
    e.stopPropagation();
}

