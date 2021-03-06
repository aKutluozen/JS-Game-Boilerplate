/**
 * Math.js
 * 
 * @summary         Provides a basic math functions
 * @module          GameMath
 * @author          Ali Kutluozen
 * @version         0.1.0
 */

Gate2D.Math = (function () {

    'use strict';

    return {
        /**
         * Returns the distance between 2 points
         * 
         * @param {number}  a - Length of side a
         * @param {number}  b - Length of side b
         * @returns {number}
         */
        hypotenuse: function (a, b) {
            return Math.sqrt(a * a + b * b);
        },

        /**
         * Returns a number that is limited between 2 numbers
         * 
         * @param {number}  num - Number to be clamped
         * @param {number}  min - Minimum value allowed
         * @param {number}  max - Maximum value allowed
         * @returns {number}
         */
        clamp: function (num, min, max) {
            return Math.min(Math.max(min, num), max);
        },

        /**
         * Returns x and y velocities based on an angle and speed
         * 
         * @param {number}  angle - Angle in degrees (0 to 360)
         * @param {number}  speed - Speed multiplier
         * @returns {number}
         */
        direction: function (angle, speed) {
            return {
                x: Math.cos(angle * Math.PI / 180) * speed,
                y: Math.sin(angle * Math.PI / 180) * speed
            }
        },

        /**
         * Returns a random in a range
         * 
         * @param {number}  min - Minimum
         * @param {number}  max - Maximum
         * @returns {number}
         */
        randomNumber: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },

        /**
         * Returns a random element of a given array
         * 
         * @param {array}  arr - Array to choose from
         * @returns {number}
         */
        chooseRandom: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
    }
}());
