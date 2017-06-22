/**
 * @Controls.js 
 * @author Ali Kutluozen
 *
 * Provides main game entities to be inherited from.
 */

var Controls = (function () {

    'use strict';

    // Main control module to be exported

    return {
        /**
         * Sends mouse coordinates to whoever is listening
         * @param {Object} entities - An array of game objects
         */
        initMouseControls: function (entities) {
            Video.canvas().addEventListener('mousemove', function (event) {
                for (let i = 0; i < entities.length; i++) {
                    if (entities[i].controlled) {
                        entities[i].handleMouseMovement(Controls.getMousePos(event));
                    }
                }
            });
            
            Video.canvas().addEventListener('mousedown', function (event) {
                for (let i = 0; i < entities.length; i++) {
                    if (entities[i].controlled) {
                        entities[i].handleMouseDown(Controls.getMousePos(event));
                    }
                }
            });
        },

        /**
         * Helper function to get the mouse position on a canvas
         * @param {array} event - Mouse event
         */
        getMousePos: function (event) {
            event.preventDefault();
            return {
                x: event.pageX - Video.canvas().offsetLeft,
                y: event.pageY - Video.canvas().offsetTop
            }
        },

        /**
         * Sends keycodes to whoever is listening
         * @param {array} entities - An array of game objects
         */
        initKeyboardControls: function (entities) {
            document.addEventListener('keydown', function (event) {
                for (let i = 0; i < entities.length; i++) {
                    if (entities[i].controlled) {
                        entities[i].handleKeyDown(event.keyCode);
                    }
                }
            });
            
            document.addEventListener('keyup', function (event) {
                for (let i = 0; i < entities.length; i++) {
                    if (entities[i].controlled) {
                        entities[i].handleKeyUp(event.keyCode);
                    }
                }
            });
        }
    }
}());
