/*
    Source File: COMP397-W2016-MailPilotDemo-master/ end.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Anjali MAcwan, Student, Centennial College
    
    Date First Modified: Apr 15, 2016
    Date Last  Modified: Apr 15, 2016
    Last Modified by: Anjali Macwan, student, Centennial College
    
    Program Description: Level two % three intermediate scene
    Revision History: UI updated
*/

module scenes {
    export class LevelTwoEnd extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _levelTwoBackground: objects.Sea;
        private _levelThreeBackground: objects.GameBackground;
        private _levelTwoPlayer: objects.LevelTwoPlayer;
        private _levelThreePlayer: objects.Player;

        private _levelClearLabel: objects.Label;
        private _instructionsLabel: objects.Label;
        private _levelThreeButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // play level clear sound
            createjs.Sound.play("LevelClear", 0, 0, 0, 0, 1, 0);

            // add level two background to the scene
            this._levelTwoBackground = new objects.Sea();
            this.addChild(this._levelTwoBackground);

            // add level three background to the scene
            this._levelThreeBackground = new objects.GameBackground();
            this.addChild(this._levelThreeBackground);
            this._levelThreeBackground.alpha = 0;

            // add level two player to the scene
            this._levelTwoPlayer = new objects.LevelTwoPlayer();
            this._levelTwoPlayer.x = 580;
            this._levelTwoPlayer.y = stage.mouseY;
            this.addChild(this._levelTwoPlayer);

            // add level three player to the scene
            this._levelThreePlayer = new objects.Player();
            this._levelThreePlayer.x = -this._levelThreePlayer.width - 10;
            this._levelThreePlayer.y = 240;
            this._levelThreePlayer.scaleX = -1;
            this.addChild(this._levelThreePlayer);


            // add level clear label to the scene
            this._levelClearLabel = new objects.Label(
                "Level 2 Clear", "60px Frijole",
                "white",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._levelClearLabel);
            this._levelClearLabel.visible = false;

            // add instructions label to the scene
            this._instructionsLabel = new objects.Label(
                "   You have collected enough Ammo \n           for the spaceship !! \nNow battle hard in the space  \n          and kill all the enemies..!!",
                "20px Frijole",
                "white",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 20, true);
            this.addChild(this._instructionsLabel);
            this._instructionsLabel.visible = false;

            // add the Level 3 button to the MENU scene
            this._levelThreeButton = new objects.Button(
                "LevelThreeButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._levelThreeButton);

            // Back Button event listener
            this._levelThreeButton.on("click", this._levelThreeButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            this._levelTwoBackground.update();
            this._levelTwoPlayer.x -= 5;


            // check if level two player reaches at the end of the screen
            if (this._levelTwoPlayer.x <= 120) {
                this._levelThreePlayer.x += 5;
                this._levelClearLabel.visible = true;
                this._instructionsLabel.visible = true;
                this._levelTwoBackground.alpha -= 0.1;
                this._levelThreeBackground.alpha += 0.1;
                // check if level three player reaches at its position
                if (this._levelThreePlayer.x >= 550) {
                    this._levelThreePlayer.x = 550;
                    this._levelThreePlayer.scaleX = 1;
                    this._levelThreeBackground.update();
                }
            }
        }


        //EVENT HANDLERS ++++++++++++++++++++

        // LEVEL THREE Button click event handler
        private _levelThreeButtonClick(event: createjs.MouseEvent) {
            // Switch to the THREE Scene
            scene = config.Scene.LEVELTHREE;
            changeScene();
        }
    }
}