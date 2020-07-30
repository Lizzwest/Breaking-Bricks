
# Breaking-Bricks
This is my Project 1 For SEI 7/13
I will be creating a game called Breaking Bricks using canvas.

-TL;DR
Breaking bricks is a simple game with a board, a ball for it to bounce off of, and bricks for the ball to break. I will be using HTML, CSS and JavaScript to create the game.
## Let's get started

Our first step to creating our game is our HTML. We should start with a basic boilerplate, as well as a couple lines to define our canvas, and to connect our JavaScript and our CSS.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Breaking Bricks Surprise</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <canvas id="canvas" width="900" height="750">
        </canvas>  
    </div>
    <script src="app.js"></script>
</body>
</html>

```

I also included a div called container to put my canvas inside. Not absolutely necessary, but I have it for now in case I want to give any extra styling to my whole page.



## What's next?

Let's get our javascript set up. The first thing I will be including is a function that waits for the DOM to load before starting the game. After all, who wants to play a game that started before we got to it?

```javascript
document.addEventListener("DOMContentLoaded",
  function () {
      //the rest of our JavaScript
  })

```

The above function should contain the rest of our javascript inside it.

## Best Practices

Whenever you are creating any project that involves code, you should follow some best practices. What are some of those?
    
    1. Declare your variables at the top of the page.
    2. Make sure your code is formatted properly (indentation!!)
    3. Drop Comments in your code, either to give yourself reminders, or to tell other devs what exactly is happening.
    4. DRY code ( Don't repeat yourself)

I also always throw a console.log at the very top of my JavaScript. That way I know right away whether or not my files are all connected.


## Let's get coding!

Now that we confirmed our files are connected, let get our code started!

### Let's make our canvas, our ball, our bricks and our board
```javascript
let canvas = document.getElementById('canvas');
let ballSize = 20;
let brickCol = 10;
let brickRow = 6;
let brickWidth = 75;
let brickHeight = 40;
let brickPad = 10;
let brickPushTop = 30;
let brickPushLeft = 30;
let boardHeight = 20;
let boardWidth = 205;
let boardX = (canvas.width - boardWidth) / 2;
```
So we declared our variables above, but nothing is actually happening yet. We have to create functions to actually have these items appear on our page.

### Let's make them FUN-ctional

```javascript

function createBall() {
		ctx.beginPath();
		ctx.arc(x, y, ballSize, 0, Math.PI * 2);
		ctx.fillStyle = 'hotpink';
		ctx.fill();
		ctx.closePath();
	}
function createBoard() {
		ctx.beginPath();
		ctx.rect(boardX, canvas.height - boardHeight, boardWidth, boardHeight);
		ctx.fillStyle = 'aqua';
		ctx.fill();
		ctx.closePath();
    }
    
    function createBricks() {
		for (let c = 0; c < brickRow; c++) {
			for (let r = 0; r < brickCol; r++) {
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

```

So now we have all our functions to create the aspects of our game. But we haven't *called* them yet. Let's call our functions now.

```javascript
	function create() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		createBricks();
		createBall();
		createBoard();
	
```

## How do we tell our game we have hit a brick?


Here, we look for a collision between our ball and a brick. This function also lets the game know that, if all the bricks have been broken, we have a winner! We have to *call* this function in our create function as well.

```javascript
            function collision() {
		for (let c = 0; c < brickRow; c++) {
			for (let r = 0; r < brickCol; r++) {
				let b = bricks[c][r];
            if (b.status == 1) {
					if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
						ySub = -ySub;
						b.status = 0;
						score++;
						if (score == brickCol * brickRow) {
                            
                            alert("You Won! Keanu is very proud. Play again?")
							
						}
					}
				}
			}
		}
	}

```

We also want to keep track of our health and our score during the game. Lets create some functions to do just that. And then, we can *call* those functions *within* our create function.

```javascript
function scoreTracker() {
		ctx.font = '20px Helvetica';
        ctx.fillStyle = 'red';
        ctx.fillText('Score: ' + score, 8, 20);
	}
	function healthTracker() {
		ctx.font = '20px Helvetica';
        ctx.fillStyle = 'red';
        ctx.fillText('Health: ' + health, canvas.width - 85, 20);
	}
```

*Please note* All styling choices ar eoptional. You can style your game however you would like! Above, we see my choices for styling, but substituting any other style choices works as well!

### Let's see our updated create function

```javascript
function create() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		createBricks();
		createBall();
		createBoard();
		scoreTracker();
		healthTracker();
		collision();
```

It's all coming together!

## Let's get our broswer to animate our game!


Using one small but important line of code, let's tell our browser to get this game started!

```javascript
requestAnimationFrame(create);
```

Within this function, we are passing through create function as a parameter and starting the animation of our game. But we have to have one more crucial piece at the bottom of our code... We have to *call* our create function!

```javascript
create();
```


For the css portion, I have very little styling. Most of my styling is done in the JavaScript portion, but I will include what I did do in CSS below.

```CSS
* { 
    padding: 0; 
    margin: 0; 
}
        
canvas {
    background-image: url(https://placekeanu.com/900/750/);
    background-repeat: no-repeat;
    background-position: center;
    display: block; 
    margin: 0 auto; 
        }

```

The * indicates a universal selector for browsers, saying we want all elements zero margin and padding. This makes sure our game looks the same on all browsers. I add a background image for my game, gave it minor styling to have it centered and covering my whole canvas and that there was no empty space on any side of it.

#### Here is a list of Websites used to assist.

https://www.w3schools.com/graphics/canvas_intro.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

And that's the game! You can check out the full code in the files of this repo.
If you want to play my version, it is hosted at the link below.

## Breaking Bricks Surprise https://lizzwest.github.io/Breaking-Bricks/

