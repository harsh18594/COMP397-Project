﻿/*
    Source File: COMP397-W2016-MailPilotDemo-master/ menu.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 5, 2016
    Date Last  Modified: Apr 7, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Game menu scene
    Revision History: UI updated
*/

// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _background: createjs.Bitmap;
        private _playButton: objects.Button;
        private _instructions: objects.Button;
        private _closeButton: objects.Button;
        private _gameTrack: createjs.AbstractSoundInstance;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // play game track
            this._gameTrack = createjs.Sound.play("GameTrack", 0, 0, 0, -1, 0.5, 0);
            
            // Add background to the scene
            this._background = new createjs.Bitmap(assets.getResult("Menu_bg"));
            this.addChild(this._background);
            
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "Earth Defender", "50px Frijole",
                "#ffff00",
                50, config.Screen.CENTER_Y, false);
            this.addChild(this._menuLabel);
            
            
            // add the Play button to the MENU scene
            this._playButton = new objects.Button(
                "PlayNowButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._playButton);
            
            // Play Button event listener
            this._playButton.on("click", this._playButtonClick, this);
            
            // add the Instructions button to the MENU scene
            this._instructions = new objects.Button(
                "InstructionsButton",
                config.Screen.CENTER_X + 50,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._instructions);
            
            // Instructions Button event listener
            this._instructions.on("click", this._instructionsButtonClick, this);
            
            // add the Close button to the MENU scene
            this._closeButton = new objects.Button(
                "CloseButton",
                570, 5, false);
            this.addChild(this._closeButton);
            
            // Close Button event listener
            this._closeButton.on("click", this._closeButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // PLAY Button click event handler
        private _playButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY LEVEL - 1 Scene
            this._gameTrack.stop();
            scene = config.Scene.LEVELONE;
            changeScene();
        }
        
        // INSTRUCTIONS Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            // Switch to the INSTRUCTIONS Scene
            this._gameTrack.stop();
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }
        
        // CLOSE Button click event handler
        private _closeButtonClick(event: createjs.MouseEvent) {
            // Switch to the GOODBYE PAGE
            window.location.href = "../../goodbye.html";
        }
    }
}