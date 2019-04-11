# flying-canvas

flying-canvas is awesome

## Use it this way

### 1 Download and Install flying-canvas

- NPM: **npm install flying-canvas**
- Yarn: **yarn add flying-canvas**
- github: **https://github.com/ajsoriar/flying-canvas**
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
        width: 100,
        height: 200,
        src: "./void.png",
        showWings: false,
        animation: false
    });
</script>
```

### 3 Configuration options

## Development

sudo npm install -g eslint

sudo npm install -g grunt-cli

grunt build

## License

flying-canvas is [MIT licensed](./LICENSE).