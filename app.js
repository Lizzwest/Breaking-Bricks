console.log('here we go again');
document.addEventListener('DOMContentLoaded', function() {
	//declare your canvas and grab it from your HTML
	let canvas = document.getElementById('canvas');
	//get context; this game is two dimensional
	let ctx = canvas.getContext('2d');
	//declare ball size (can be changed to any size)
	let ballSize = 20;
	// the player stats
	let score = 0;
	let health = 6;
	//declaring my left and right key as false,
	// because they aren't in use until the game starts
	let rightKey = false;
	let leftKey = false;
	//define x and y variables. this tells our ball where to show up on our page
	//I want the ball to start in the middle, at the very bottom
	let x = canvas.width / 2;
	let y = canvas.height - 10;
	//create our ball movement (can change the numbers to increase speed)
	let xAdd = 4;
	let ySub = -4;

	//declaring our height and width of our board the ball bounces off of
	let boardHeight = 20;
	let boardWidth = 205;
	let boardX = (canvas.width - boardWidth) / 2;
	//all brick traits. 8 columns, 6 rows, height
	// and width of each, padding on sides, and space from the top and left
	let brickCol = 10;
	let brickRow = 6;
	let brickWidth = 75;
	let brickHeight = 40;
	let brickPad = 10;
	let brickPushTop = 30;
	let brickPushLeft = 30;
	//event listeners for our left and right arrow keys. Will detect when pressed and released
	document.addEventListener('keydown', keyPress, false);
	document.addEventListener('keyup', keyRelease, false);

	//following up with functions that reset our keys after they have been pressed or released
	function keyPress(e) {
		if (e.key == 'ArrowRight') {
			rightKey = true;
		} else if (e.key == 'ArrowLeft') {
			leftKey = true;
		}
	}

	function keyRelease(e) {
		if (e.key == 'ArrowRight') {
			rightKey = false;
		} else if (e.key == 'ArrowLeft') {
			leftKey = false;
		}
	}
    //filling in our empty rows and columns with bricks
	let bricks = [];
	for (let c = 0; c < brickRow; c++) {
		bricks[c] = [];
		for (let r = 0; r < brickCol; r++) {
			bricks[c][r] = { x: 0, y: 0, status: 1 };
		}
	}

	//a function to detect a wall hit
	//detects the x and y position of the ball are greater that the positions on the axis of the brick
	//detects the x and y position of the ball is less than  the positions on the axis of the brick plus width and height
	function wallHit() {
		for (let c = 0; c < brickRow; c++) {
			for (let r = 0; r < brickCol; r++) {
				let b = bricks[c][r];
				if (b.status == 1) {
					if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
						ySub = -ySub;
						b.status = 0;
						score++;
						if (score == brickCol * brickRow) {
                            //our modal will show up here if the game is won
                            alert("You Won! Keanu is very proud.")
							// modal.innerHtml = 'You Won! Keanu is very proud.';
							// toggleClass(modal, 'show');
							// document.location.reload();
						}
					}
				}
			}
		}
	}

	//
	//this function creates the ball that will be used to break the bricks
	function createBall() {
		//our beginPath is where the creating of the ball starts.
		//It will end this function at our closePath()
		ctx.beginPath();
		//the below line took a while. I used mdn
		//and found this link, that explained using PI due tot he fact the ball is circular
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
		ctx.arc(x, y, ballSize, 0, Math.PI * 2);
		//pick our ball color
		ctx.fillStyle = 'hotpink';
		//color it in
		ctx.fill();
		ctx.closePath();
	}
	//this function does the same thing as the above,
	//but it creates our board the ball bounces off of
	function createBoard() {
		ctx.beginPath();
		ctx.rect(boardX, canvas.height - boardHeight, boardWidth, boardHeight);
		ctx.fillStyle = 'aqua';
		ctx.fill();
		ctx.closePath();
	}

	//this function makes the bricks we get to destroy
	function createBricks() {
		for (let c = 0; c < brickRow; c++) {
			for (let r = 0; r < brickCol; r++) {
				//checking if our bricks have been hit or not. If hit, they are removed
				if (bricks[c][r].status == 1) {
					let brickX = r * (brickWidth + brickPad) + brickPushLeft;
					let brickY = c * (brickHeight + brickPad) + brickPushTop;
					bricks[c][r].x = brickX;
					bricks[c][r].y = brickY;
					ctx.beginPath();
					ctx.rect(brickX, brickY, brickWidth, brickHeight);
					ctx.fillStyle = 'yellowgreen';
					ctx.fill();
					ctx.closePath();
				}
			}
		}
	}
	//keeping track of our score (amount of bricks broken) and our health
	function scoreTracker() {
		ctx.font = '20px Helvetica';
        ctx.fillStyle = 'red';
        //this displays our score as displays it on the canvas at the x and y axis inout at the end of the line
		ctx.fillText('Score: ' + score, 8, 20);
	}
	function healthTracker() {
		ctx.font = '20px Helvetica';
        ctx.fillStyle = 'red';
        //this displays our health as displays it on the canvas at the x and y axis inout at the end of the line
		ctx.fillText('Health: ' + health, canvas.width - 85, 20);
	}
	//this function pulls in the rest of the functions and creates them
	//our last big funtion to pull the game together
	function create() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		createBricks();
		createBall();
		createBoard();
		scoreTracker();
		healthTracker();
		wallHit();

		//if statements to keep our ball moving( or to continue to create the illusion it is moving)
		if (x + xAdd > canvas.width - ballSize || x + xAdd < ballSize) {
			xAdd = -xAdd;
		}   //nested if statement, speaking on the y axis instead of the x axis above
            if (y + ySub < ballSize) {
                ySub = -ySub;
            } else if (y + ySub > canvas.height - ballSize) {
                if (x > boardX && x < boardX + boardWidth) {
                    ySub = -ySub;
                } else {
                    // else statement saying our health goes down by one everytime the ball misses the board
                    health--;
                    //if statement saying if our helath runs out, the game is over
                    if (!health) {
                        alert("Game Over. Keanu wouldn't want you to give up. Play Again?")
                        //why doesnt my modal work
                        // modal.innerHTML = "Game Over. Keanu wouldn't want you to give up. Play again?";
                        // toggleClass(modal, 'show');
                        document.location.reload();
                        clearInterval(interval);
				} else {
					//if we still have health, continue to move out ball on the screen
					x = canvas.width / 2;
					y = canvas.height - 10;
					xAdd = 5;
					ySub = -5;
					boardX = (canvas.width - boardWidth) / 2;
				}
			}
		}
		//these if else statements tell our board how many
		//pixels to move when our arrow keys are pressed
		//so long as the board will still be *inside* the canvas
		if (rightKey && boardX < canvas.width - boardWidth) {
			boardX += 9;
		} else if (leftKey && boardX > 0) {
			boardX -= 9;
		}
		//redefining x and y to keep our ball moving
		x += xAdd;
        y += ySub;
        //informing our browser we would like to animate our game and create all our elements
		requestAnimationFrame(create);
	}
    function toggleClass(target, modal){
        target.classList.toggle(modal)
      }
	create();
});
