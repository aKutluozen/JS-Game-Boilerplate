/**
 * GameEntities.js 
 *
 * Initialization of all the game objects and variables must be done here.
 * 
 * @author          Ali Kutluozen
 */

'use strict';

/**
 * All the following added variables can be reached by Globals.<varname>
 * E.g., Globals.score 
 */
Gate2D.Globals.add([
    { score: 0 },
    { energy: 100 },
    { levelUp: false },
    { specialPower: 'none' },
    { isWallActive: false },
    { wallY: 0 },
    { rapidPhotonsActive: 0 },
    { bonusMultiplier: 1 },
    { sameColorHits: 0 },
    { inGameMultiplierOn: false },
    { maxRicochets: 8 },

    // Special power degrees - Will be able to increase these.
    { maxRapidBullets: 15 }, // 5, 10, 15
    { maxLumenRadius: 1 }, // 1, 2, 3
    { maxShieldRounds: 5 }, // 5, 10, 15
    { shieldUsed: 0 } // This value will add up to maxShieldRounds
    // Create custom game variables here as name-value pairs
    // ...
]);

/**
 * A group of objects to be used across levels
 * Level IDs must be assigned here to use them in maps
 */
Gate2D.Objects.createGroup('level1ObjectGroup', [
    { object: new Enemy(0, 0, 2, 80, 80, 'enemy', 'green'), levelID: 6 },
    { object: new Enemy(0, 0, 2, 80, 80, 'enemy', 'yellow'), levelID: 7 },
    { object: new Enemy(0, 0, 2, 80, 80, 'enemy', 'red'), levelID: 8 },

    // Bonuses
    { object: new Enemy(-400, -400, 3, 80, 80, 'enemy', 'bonusPower'), levelID: 31 },
    { object: new Enemy(-400, -400, 3, 80, 80, 'enemy', 'bonusCool'), levelID: 32 },
    { object: new Enemy(-400, -400, 3, 80, 80, 'enemy', 'bonusMultiplier'), levelID: 33 },

    { object: new Photon(0, 0, 3, 32, 32, 'photon', 'mainPhoton'), levelID: 2 },
    { object: new Cannon(352, 920, 1, 64, 256, 'cannon', 'player'), levelID: 3 },
    { object: new Wall(0, 0, 2, 720, 16, 'wall', 'wallVertical'), levelID: 4 },
    { object: new Wall(0, 0, 2, 16, 1264, 'wall', 'wallHorizontal'), levelID: 5 },
    { object: new Wall(344, 1, 2, 32, 32, 'wall', 'photonWall'), levelID: 10 },

    // Rapid fire photons pre instantiated
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid1'), levelID: 11 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid2'), levelID: 12 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid3'), levelID: 13 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid4'), levelID: 14 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid5'), levelID: 15 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid6'), levelID: 16 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid7'), levelID: 17 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid8'), levelID: 18 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid9'), levelID: 19 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid10'), levelID: 20 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid11'), levelID: 21 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid12'), levelID: 22 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid13'), levelID: 23 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid14'), levelID: 24 },
    { object: new Photon(0, 0, 2, 32, 32, 'photon', 'rapid15'), levelID: 25 },
]);

/**
 * Onscreen HUD static visual elements
 * Order of the following elements are the orders they will be drawn (second item is drawn on top of the first item)
 */
Gate2D.Video.createStaticImages([
    {
        name: 'bottomScreen',
        image: Gate2D.Loader.getFile('sprites'),
        cropX: 0, cropY: 1088, cropWidth: 720, cropHeight: 192,
        drawX: 0, drawY: 1088, drawWidth: 720, drawHeight: 192
    },
    {
        name: 'controlBackground',
        image: Gate2D.Loader.getFile('sprites'),
        cropX: 160, cropY: 16, cropWidth: 256, cropHeight: 128,
        drawX: 232, drawY: 1056, drawWidth: 256, drawHeight: 128
    },
    {
        name: 'topScreen',
        image: Gate2D.Loader.getFile('sprites'),
        cropX: 0, cropY: 986, cropWidth: 720, cropHeight: 100,
        drawX: 0, drawY: 0, drawWidth: 720, drawHeight: 100
    },
]);

/**
 * All the following added levels can be reached by Levels.<varname>
 * E.g., Levels.intro1 
 */
Gate2D.Levels.add([
    // Level object
    {
        // Basic size and background information of a level
        name: 'Level 1',
        controls: 'buttonSet1',
        width: 720,
        height: 1280,
        x: 0,
        y: 0,
        background: 'background',
        objectsList: Gate2D.Objects.getGroup('level1ObjectGroup'),

        // Draw a map for the objects using their level IDs
        objectMap: {
            width: 18,      // Number of cells from left to right
            height: 32,     // Number of cells from top to bottom
            gridSize: 40,   // Size of the cells
            map: [
                11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0, 0, 10,
                5,31,32,33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
                4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]
        },

        initAction: function () {
            // Put the big size first - Least frequent one - stop at 144
            for (let i = 36, len = this.objectMap.map.length; i < 108; i += Gate2D.Math.chooseRandom([2, 8])) {
                if (i % 18 == 0) { i += 18; } // Jump to a new line so there can be corridors
                this.objectMap.map[i] = 8;
            }

            // Then the middle size
            for (let i = 108, len = this.objectMap.map.length; i < 216; i += Gate2D.Math.chooseRandom([2, 6])) {
                if (i % 18 == 0) { i += 18; } // Jump to a new line so there can be corridors
                this.objectMap.map[i] = 7;
            }

            // // Then the smallest size - Most frequent one
            for (let i = 216, len = this.objectMap.map.length; i < 324; i += Gate2D.Math.chooseRandom([2, 4])) {
                if (i % 18 == 0) { i += 18; } // Jump to a new line so there can be corridors
                this.objectMap.map[i] = 6;
            }
        }
    },

    // Create more levels here
    // ...
]);