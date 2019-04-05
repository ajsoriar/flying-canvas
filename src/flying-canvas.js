/**
 * flying-canvas
 * Flying Canvas.
 * @version v0.0.1 - 2019-04-04
 * @link https://github.com/ajsoriar/flying-canvas
 * @author Andres J. Soria R. <ajsoriar@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function (scope) {
    "use strict";
    var fc = function () {

        var incomming_params = {};

        var getRndNumBetween = function (min, max) { // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min)
        };

        var defaults = {
            timeoutDelay: 500,
            template: "SQUARE", // CIRCLE, OVAL
            wing_w: null,
            wing_h: null,
            canvas_w: 350,
            canvas_h: 400,
            corner_size: 75,
            showWings: false
        };

        var current_x = null,
            current_y = null,
            des_x = getRndNumBetween(1,10),
            des_y = getRndNumBetween(1,10),
            window_max_x = window.innerWidth - defaults.canvas_w, //640,
            window_max_y = window.innerHeight - defaults.canvas_h, //480,
            domEl = null,
            timerId = null,
            timeoutDelay = 125; //125;

        var getHtmlString = function (templateName) {

            var str = '',
                canvas_styles_1 = '',
                arm_h_styles = '',
                arm_v_styles = '',
                picture_styles = '';

            canvas_styles_1 += 'border: 0px solid red; display: block; box-shadow: 4px 6px 8px 2px rgba(0,0,0,0.5);';
            canvas_styles_1 += 'width: '+ defaults.canvas_w +'px;';
            canvas_styles_1 += 'height: '+ defaults.canvas_h +'px;';
            var arm_w = defaults.canvas_w - ( 2 * defaults.corner_size );
            var arm_h = defaults.canvas_h - ( 2 * defaults.corner_size );
            arm_h_styles += 'width: '+ arm_w +'px;';
            arm_v_styles += 'height: '+ arm_h +'px;';
            picture_styles += 'border: 0px solid red; display: block; background-color: black;';
            picture_styles += 'background-image: linear-gradient(red, yellow, blue); background-size: 100% 100%;'
            picture_styles += 'width: '+ arm_w +'px;';
            picture_styles += 'height: '+ arm_h +'px;';

            function drawSquare() {
                var str = '';
                str +=  '<div class="main-container" style="position:absolute;'+ canvas_styles_1 +'">'+
                            '<div class="wing right"></div>'+
                            '<div class="wing left"></div>'+
                            '<div class="mq top-l bg-1"></div>'+
                            '<div class="mq top-c bg-2" style="'+ arm_h_styles +'"></div>'+
                            '<div class="mq top-r bg-1"></div>'+
                            '<div class="mq middle-l bg-3" style="'+ arm_v_styles +'"></div>'+
                            '<div class="mq middle-c bg-4" style="'+ picture_styles +'" id="picture"></div>'+
                            '<div class="mq middle-r bg-3" style="'+ arm_v_styles +'"></div>'+
                            '<div class="mq bottom-l bg-1"></div>'+
                            '<div class="mq bottom-c bg-2" style="'+ arm_h_styles +'"></div>'+
                            '<div class="mq bottom-r bg-1"></div>'+
                        '</div>';
                return str;
            }

            function drawCircle() {
                return '<div style="position:absolute;' + canvas_styles_1 + '"><div class="shape-circle">htmlstring</div></div>';
            }

            function drawOval() {
                return '<div style="position:absolute;' + canvas_styles_1 + '"><div class="shape-oval">htmlstring</div></div>';
            }

            switch (templateName) {
                case 'SQUARE':
                    str = drawSquare();
                    break;
                case 'CIRCLE':
                    str = drawSquare();
                    break;
                case 'OVAL':
                    str = drawSquare();
                    break;
            }

            return str;
        };

        var movementFunction = function (el) {

            if (current_x === null) current_x = getRndNumBetween(1,window_max_x); // Get random value here
            if (current_y === null) current_y = getRndNumBetween(1,window_max_y); // Get random value here

            var x = 0,
                y = 0;

            if (current_x <= 0) des_x = -des_x;
            if (current_y <= 0) des_y = -des_y;
            if (current_x >= window_max_x) des_x = -des_x;
            if (current_y >= window_max_y) des_y = -des_y;
            current_x = current_x - des_x;
            current_y = current_y - des_y;
            //console.log("Move! current_x:", current_x, " current_y:", current_y);
            el.style.top = current_y + "px";
            el.style.left = current_x + "px";

            return {
                x: x,
                y: y
            };
        };

        var createDomEl = function () {
            domEl = document.getElementById("flying-canvas");
            if (domEl != null) {
                //cleanContent();
            } else {
                var ID = "flying-canvas-" + Date.now();
                domEl = document.createElement('div');
                domEl.setAttribute("id", ID);
                domEl.setAttribute("class", "flying-canvas");
                domEl.style.position = "absolute";
            }
            domEl.innerHTML = getHtmlString(defaults.template);
            document.body.appendChild(domEl);
        };

        var destroy = function () {
            if (domEl === null) return;
            document.body.removeChild(domEl);
            domEl = null;
        };

        /*
        {
            width: 100,
            height: 200,
            src: "./bg.bmp"
        }
        */

        var start = function (params) {
            incomming_params = params;
            if (domEl === null) {
                createDomEl();
                loadImage();
            }

            timerId = setTimeout(function request() {
                movementFunction(domEl);
                timerId = setTimeout(request, timeoutDelay);
            }, timeoutDelay);
        };

        var stop = function () {
            clearTimeout(timerId);
        };

        var hide = function () {

        };

        var show = function () {
            if (domEl === null) createDomElt();
        };

        var loadImage = function() {
            var img = document.createElement("img"); // document.getElementById('picture');
            var newImg = new Image;
            newImg.onload = function() {
                img.src = incomming_params.src;
            }
            newImg.src = incomming_params.src; //'http://whatever';
            document.getElementById("picture").appendChild(img);
        };

        // var isHidden = function() {
        //     return true;
        // };

        var getRandomX = function () {

        };

        var getRandomy = function () {

        };

        var setDelayInterval = function (val) {
            if (val === null) defaults.timeoutDelay = 500;
            timeoutDelay = val;
        };

        return {
            go: start,
            start: start,
            stop: stop,
            show: show,
            hide: hide,
            destroy: destroy,
            setDelay: setDelayInterval
        };

    };

    scope.flyingCanvas = fc();

}(window));

/*

    //flyingCanvas.show();
    flyingCanvas.start();

*/
