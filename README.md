
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
=======
## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Lizzwest/Breaking-Bricks/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Lizzwest/Breaking-Bricks/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
>>>>>>> 5566406e04c617608b98d6f70fc8c73444d8435b
