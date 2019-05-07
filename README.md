# flying-canvas [![Build Status](https://travis-ci.org/ajsoriar/angular-avatar.svg?branch=master)](https://travis-ci.org/ajsoriar/angular-avatar)

[![yarn version](https://badge.fury.io/js/flying-canvas.svg)](https://badge.fury.io/js/flying-canvas)
[![NuGet version](https://badge.fury.io/nu/flying-canvas.svg)](https://badge.fury.io/nu/flying-canvas)

flying-canvas is awesome

## Use it this way

### 1 Download and Install flying-canvas

- NPM: **npm install flying-canvas**
- Yarn: **yarn add flying-canvas**
- github: **<https://github.com/ajsoriar/flying-canvas>**
<!--- - NuGet: **PM> Install-Package flying-canvas** -->

### 2 Include dependences

#### 2.1 Include flying-canvas.min.js by referencing the necessary files

You will find .js and .css files in `dist` folder.

```javascript
<script src="../dist/flying-canvas.min.js"></script>
<link rel="stylesheet" href="../dist/flying-canvas.min.css">
```

#### 2.2 Initialize the plugin

```javascript
<script>
    flyingCanvas.start({
        showWings: false,
        animation: false
    });
</script>
```

When the canvas pane bumps into the edges a function can be executed specifying `bumpIntoEdgeFn`

```javascript
<script>
    flyingCanvas.start({
        showWings: false,
        bumpIntoEdgeFn: function(){
            console.log("Choca 1!");
        }
        animation: false
    });
</script>
```

#### 2.3 Show a picture

Use `src: "./void.png"` to load a pinture in the canvas.

```javascript
<script>
    flyingCanvas.start({
        src: "./void.png"
    });
</script>
```

### 3 Configuration options

| option               | default | description           |
| :------------------- | :----- | :--------------------- |
| `flyingCanvas.init()`         | -  | Initializes the component allowing several parameters in json format. |
| `width`        | 350 | Width of the canvas. |
| `height`        | 400 | Height of the canvas. |
| `pictureFrameWidth` | 75 | Working on this now! |
| `src`        | null | Route to an image. |
| `flyingCanvas.loadImage()`        | - | Loads new images this way: `flyingCanvas.loadImage("newImage.jpg")`. |
| `flyingCanvas.clearImage()`        | - | Removes the image |
| `animation`        | boolean | In the case of false the component will not have movement when created. |
| `hidden`        | boolean | In the case of false the component will be hidden by default. |
| `showWings`        | boolean | Show wings|
| `awesome`        | unknown | Awesome stuff will happen. |
| `flyingCanvas.start()`        | - | Starts the movement of the canvas. |
| `flyingCanvas.stop()`        | - | Stops the movement. |
| `flyingCanvas.hide()`        | - | Hides the component. Does not destroy. The component will continue running in the background. |
| `flyingCanvas.show()`        | - | Shows the component again. |

## Development

sudo npm install -g eslint

sudo npm install -g grunt-cli

grunt build

## License

flying-canvas is [MIT licensed](./LICENSE).