/*
    Source File: COMP397-W2016-MailPilotDemo-master/ player.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Anjali Macwan, Student, Centennial College
    
    Date First Modified: Apr 15, 2016
    Date Last  Modified: Apr 15, 2016
    Last Modified by: Anjali Macwan, student, Centennial College
    
    Program Description: super class for game objects.
    Revision History: updated variables and values
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("Player"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = 580;
            this._assignControls();
            //this._engineSound = createjs.Sound.play("Engine", 0, 0, 0, -1, 1, 0);
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        // PUBLIC METHODS
        Player.prototype.update = function () {
            if (controls.UP == true || controls.DOWN == true) {
                // move with mouse
                this._controlAction();
                stage.mouseY = this.y; // change mouseY to move player with keyboard
            }
            else {
                this.y = stage.mouseY;
            }
            this._checkBounds();
        };
        // Bind key actions to player events
        Player.prototype._assignControls = function () {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        };
        // Switch statement to activate movement and rotation
        Player.prototype._onControlDown = function (event) {
            switch (event.keyCode) {
                case keys.W:
                case keys.UP:
                    controls.UP = true;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.DOWN = true;
                    break;
            }
        };
        // switch statement to reset controls
        Player.prototype._onControlUp = function (event) {
            switch (event.keyCode) {
                case keys.W:
                case keys.UP:
                    controls.UP = false;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.DOWN = false;
                    break;
            }
        };
        // Respond to player key presses
        Player.prototype._controlAction = function () {
            // Execute up turn
            if (controls.UP) {
                this.moveUp();
            }
            // Execute down turn
            if (controls.DOWN) {
                this.moveDown();
            }
        };
        // Move Up Method
        Player.prototype.moveUp = function () {
            this.y -= 5;
        };
        // Move Down Method
        Player.prototype.moveDown = function () {
            this.y += 5;
        };
        return Player;
    })(createjs.Bitmap);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map