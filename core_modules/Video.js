/**
 * Video.js 
 *                  
 * @summary         Provides a basic interface for canvas API
 * @module          Video     
 * @author          Ali Kutluozen
 * @version         7/5/2017
 */

var Video = (function () {

    'use strict';

    // Private local variables
                        
    let canvas,             // Real canvas that will be displayed
        ctx,                // Real canvas context
        buffer,             // Buffer that will be drawn on
        bctx,               // Buffer context
        width, height,      // Canvas/buffer width and height

        FPS,                // Frames per second to be set
        counter,            // Frame count 
        counterElement,     // DOM element that will display the FPS
        then, now, first,   // Frame rate calculation variables
        interval,           // Refreshing interval
        dt, et,             // Delta time, Elapsed time

        debug;              // Toggles video debug mode

    // Main video module to be exported

    return {
        /**
         * @description     Returns canvas
         * @returns {object}
         */
        canvas: function () {
            return canvas;
        },
        
        /**
         * @description     Returns context
         * @returns {object}
         */
        context: function () {
            return ctx;
        },
        
        /**
         * @description     Returns buffer
         * @returns {object}
         */
        buffer: function () {
            return buffer;
        },
        
        /**
         * @description     Returns buffer context
         * @returns {object}
         */
        bufferContext: function () {
            return bctx;
        },
        
        /**
         * @description     Returns frames per second
         * @returns {object}
         */
        FPS: function () {
            return FPS;
        },
        
        /**
         * @description     Returns change in time
         * @returns {object}
         */
        deltaTime: function () {
            return dt;
        },
        
        /**
         * @description     Toggles debug mode
         */
        debug: function (bool) {
            if (bool == undefined) return debug;
            else debug = bool;
        },

        /**
         * @description     Shows the FPS for debugging purposes
         * @param {number}  timeElapsed - Elapsed time helps calculate the FPS
         */
        showFPS: function (timeElapsed) {
            if (counterElement != '') {
                counterElement.innerHTML =
                    ++counter + 'f / ' +
                    parseInt(timeElapsed) + 's = ' +
                    parseInt(counter / timeElapsed) + 'fps';
            }
        },

        /**   
         * @description     Initializes the screen
         * @param {number}  w - Width of the screen
         * @param {number}  h - Height of the screen
         * @param {number}  fps - Frames per second
         */
        setup: function (w, h, fps) {
            // Set up FPS
            counter = 0;
            then = Date.now();
            first = then;
            FPS = fps || 60;
            interval = 1000 / FPS;

            // Set up canvas and context
            width = w || 640;
            height = h || 480;

            debug = false;

            // Set up the buffer
            buffer = document.createElement('canvas');
            buffer.width = width;
            buffer.height = height;
            bctx = buffer.getContext('2d');

            // Set up the real canvas
            canvas = document.createElement('canvas');
            canvas.id = 'game-canvas';
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');
            document.body.appendChild(canvas);
            counterElement = document.getElementById('counter') || '';
        },

        /**             
         * @description     Refreshes the screen on a given FPS
         */
        refresh: function () {
            // Calculate the delta time
            now = Date.now();
            dt = now - then;

            // Limit the FPS
            if (dt > interval) {
                ctx.clearRect(0, 0, width, height);
                bctx.clearRect(0, 0, width, height);
                then = now - (dt % interval);

                if (debug) {
                    et = (then - first) / 1000;
                    this.showFPS(et);
                }
            }
        },

        /**
         * @description     Draws everything on the buffer to the actual screen
         */
        render: function () {
            ctx.drawImage(buffer, 0, 0);
        }
    }
})();
