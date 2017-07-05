/**
 * Main.js 
 *
 * Loads all the necessary game files, and launches the game when it is all done.
 * Including this script in an HTML document along with "Loader.js" will run the game.
 * @module          Bootstrap
 * @author          Ali Kutluozen
 * @version         7/5/2017
 */

var Game = {};
'use strict';

/* ************ LOADING ALL THE FILES **************************************** */

// Enqueueing the image files
Loader.enqueue('imgBall', 'img', 'images/ball.png');
Loader.enqueue('imgPoint', 'img', 'images/point.png');
Loader.enqueue('imgBackground', 'img', 'images/bg.jpg');

// Enqueueing the audio files

// Main object file Entity.js needs to be loaded before anything else inherits from it
Loader.enqueue('entity', 'script', 'core_modules/Entity.js');

// Enqueueing custom script files
Loader.enqueue('boxScript', 'script', 'custom_objects/box.js');
Loader.enqueue('ballScript', 'script', 'custom_objects/ball.js');
Loader.enqueue('hudScript', 'script', 'custom_objects/hud.js');
Loader.enqueue('pointScript', 'script', 'custom_objects/point.js');
Loader.enqueue('roomScript', 'script', 'custom_objects/room.js');

// Enqueueing core script files - Do not change the order!
Loader.enqueue('mathLibrary', 'script', 'core_modules/Math.js');
Loader.enqueue('videoModule', 'script', 'core_modules/Video.js');
Loader.enqueue('gameControls', 'script', 'core_modules/Controls.js');
Loader.enqueue('gamePhysics', 'script', 'core_modules/Physics.js');
Loader.enqueue('Objects', 'script', 'core_modules/Objects.js');
Loader.enqueue('gameUpdate', 'script', 'GameUpdate.js');
Loader.enqueue('gameDraw', 'script', 'GameDraw.js');
Loader.enqueue('gameGlobals', 'script', 'core_modules/Globals.js');
Loader.enqueue('objects', 'script', 'GameEntities.js');
Loader.enqueue('engine', 'script', 'core_modules/Engine.js');

/* ************ SETTING UP AND RUNNING THE ENGINE *************************** */

// When the Loader is done loading all the above files, run the engine.
Loader.load(function () {
    
    Engine.setup({
        screenWidth: 400,
        screenHeight: 400,
        screenFPS: 60,
        mouseEnabled: true,
    });
    
    Engine.run();
});
