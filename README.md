
# Breaking-Bricks
This is my Project 1 For SEI 7/13
I will be creating a game called Breaking Bricks using canvas.


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

```

