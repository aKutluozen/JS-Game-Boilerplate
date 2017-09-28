/**
 * @GameDraw.js 
 *
 * GameDraw function is placed in the game loop.
 * It is responsbile for all the drawing actions.
 * 
 * @function        GameDraw - Responsbile for all the drawing actions
 * @author          Ali Kutluozen     
 */

var GameDraw = function () {

    'use strict';

    // Draw the background of the level first
    Levels.draw();

    // Draw game objects that have draw methods
    for (let i = 0; i < Levels.currentLevel().objectsList.length; i++) {
        // If there is a camera present, draw them only when they are in the view
        if (Levels.currentLevel().camera) {
            if (Video.isObjectInView(Levels.currentLevel().objectsList[i])) {
                Levels.currentLevel().objectsList[i].draw();
            }
        } else Levels.currentLevel().objectsList[i].draw();
    }

    // Add extra draw calls here
    // ...

    // Draw the HUD on top of everything
    Video.drawText(Timer.formatTime(Timer.time()), "Tahoma", 13, "white", Video.getScreenWidth() / 2, 0, "center", false);

    // Let the video engine render the screen
    Video.render();
}