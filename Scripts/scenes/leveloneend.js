/*
    Source File: COMP397-W2016-MailPilotDemo-master/ end.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 12, 2016
    Date Last  Modified: Apr 12, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Level one & two intermediate scene
    Revision History: UI updated
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var LevelOneEnd = (function (_super) {
        __extends(LevelOneEnd, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LevelOneEnd() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LevelOneEnd.prototype.start = function () {
            // play level clear sound
            createjs.Sound.play("LevelClear", 0, 0, 0, 0, 1, 0);
            // add level one background to the scene
            this._levelOneBackground = new objects.LevelOneBackground();
            this.addChild(this._levelOneBackground);
            // add level two background to the scene
            this._levelTwoBackground = new objects.Sea();
            this.addChild(this._levelTwoBackground);
            this._levelTwoBackground.alpha = 0;
            // add level one player to the scene
            this._levelOnePlayer = new objects.LevelOnePlayer();
            this._levelOnePlayer.x = 580;
            this._levelOnePlayer.y = stage.mouseY;
            this.addChild(this._levelOnePlayer);
            // add level two player to the scene
            this._levelTwoPlayer = new objects.LevelTwoPlayer();
            this._levelTwoPlayer.x = -this._levelTwoPlayer.width - 10;
            this._levelTwoPlayer.y = 240;
            this._levelTwoPlayer.scaleX = -1;
            this.addChild(this._levelTwoPlayer);
            // add level clear label to the scene
            this._levelClearLabel = new objects.Label("Level 1 Clear", "60px Frijole", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._levelClearLabel);
            this._levelClearLabel.visible = false;
            // add instructions label to the scene
            this._instructionsLabel = new objects.Label("   You have collected enough fuel \n           for the spaceship !! \nFly over the ocean and reach \n          till the space...\n          collect ammo.....", "20px Frijole", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._instructionsLabel);
            this._instructionsLabel.visible = false;
            // add the Back button to the MENU scene
            this._levelTwoButton = new objects.Button("LevelTwoButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._levelTwoButton);
            // Back Button event listener
            this._levelTwoButton.on("click", this._levelTwoButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        LevelOneEnd.prototype.update = function () {
            this._levelOneBackground.update();
            this._levelOnePlayer.x -= 5;
            // check if level one player reaches at the end of the screen
            if (this._levelOnePlayer.x <= 120) {
                this._levelTwoPlayer.x += 5;
                this._levelClearLabel.visible = true;
                this._instructionsLabel.visible = true;
                this._levelOneBackground.alpha -= 0.1;
                this._levelTwoBackground.alpha += 0.1;
                // check if level two player reaches at its position
                if (this._levelTwoPlayer.x >= 550) {
                    this._levelTwoPlayer.x = 550;
                    this._levelTwoPlayer.scaleX = 1;
                    this._levelTwoBackground.update();
                }
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY Button click event handler
        LevelOneEnd.prototype._levelTwoButtonClick = function (event) {
            // Switch to the THREE Scene
            scene = config.Scene.LEVELTWO;
            changeScene();
        };
        return LevelOneEnd;
    })(objects.Scene);
    scenes.LevelOneEnd = LevelOneEnd;
})(scenes || (scenes = {}));
//# sourceMappingURL=leveloneend.js.map