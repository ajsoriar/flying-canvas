(function (scope) {
    "use strict";
    var fc = function () {

        var defaults = {
            timeoutDelay: 500,
            template: "SQUARE" // CIRCLE, OVAL
        };

        var current_x = null,
            current_y = null,
            des_x = 1,
            des_y = 1,
            window_max_x = 640,
            window_max_y = 480,
            domEl = null,
            timerId = null,
            timeoutDelay = 500;

        var getHtmlString = function (templateName) {

            var str = '';

            var common_styles_1 = 'width: 100px; height: 100px; border: 1px solid red; display: block;';

            function drawSquare() {
                return '<div style="position:absolute;' + common_styles_1 + '"><div class="shape-square">htmlstring</div></div>';
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
                case 'SQUARE':
                    str = drawSquare();
                    break;
                case 'SQUARE':
                    str = drawSquare();
                    break;
            }

            return str;
        };

        var movementFunction = function (el) {


            if (current_x === null) current_x = 0; // Get random value here
            if (current_y === null) current_y = 0; // Get random value here

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
