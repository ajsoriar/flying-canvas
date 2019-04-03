(function (scope) {
    "use strict";
    var fc = function () {
        
        var getRndNumBetween = function (min, max) { // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min)
        };

        var defaults = {
            timeoutDelay: 500,
            template: "SQUARE" // CIRCLE, OVAL
        };

        var current_x = null,
            current_y = null,
            des_x = getRndNumBetween(1,10),
            des_y = getRndNumBetween(1,10),
            window_max_x = 640,
            window_max_y = 480,
            domEl = null,
            timerId = null,
            timeoutDelay = 500; //125;

        var getHtmlString = function (templateName) {

            var str = '';

            var common_styles_1 = '';
            common_styles_1 += 'width: 300px;';
            //common_styles_1 += 'height: 200px; ';
            common_styles_1 += 'border: 1px solid red; display: block;';

            function drawSquare() {
                var str = '';

                str +=  '<div class="main-container" style="position:absolute;' + common_styles_1 + '">'+

                            // wings
                            '<div class="wing right"></div>'+
                            '<div class="wing left"></div>'+
                            '<div class="mq top-l bg-1"></div>'+
                            '<div class="mq top-c bg-2"></div>'+
                            '<div class="mq top-r bg-1"></div>'+
                            '<div class="mq middle-l bg-3"></div>'+
                            '<div class="mq middle-c bg-4"></div>'+
                            '<div class="mq middle-r bg-3"></div>'+
                            '<div class="mq bottom-l bg-1"></div>'+
                            '<div class="mq bottom-c bg-2"></div>'+
                            '<div class="mq bottom-r bg-1"></div>'+
                        '</div>';
                return str;
            }

            function drawCircle() {
                return '<div style="position:absolute;' + common_styles_1 + '"><div class="shape-circle">htmlstring</div></div>';
            }

            function drawOval() {
                return '<div style="position:absolute;' + common_styles_1 + '"><div class="shape-oval">htmlstring</div></div>';
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

            console.log("Move! current_x:", current_x, " current_y:", current_y);

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

        var start = function () {
            if (domEl === null) createDomEl();
            timerId = setTimeout(function request() {
                movementFunction(domEl);
                //timerId = setTimeout(request, timeoutDelay);
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
