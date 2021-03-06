/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ collision.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Anjali Macwan, Student, Centennial College
    
    Date First Modified: Apr 15, 2016
    Date Last  Modified: Apr 15, 2016
    Last Modified by: Anjali Macwan, student, Centennial College
    
    Program Description: Checks of two objects collide.
    Revision History: check method updated
*/

module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.Player;
        constructor(player: objects.Player) {
            this._player = player;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public check(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;


            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (object.getIsColliding() == false) {
                    switch (object.name) {
                        case "obstacles":
                            object.visible = false;
                            createjs.Sound.play("Crash", 0, 0, 0, 0, 0.5, 0);
                            if (scoreboard.getLives() == 10) {
                                scoreboard.removeLives(5);
                            }
                            else {
                                scoreboard.removeLives(10);
                            }
                            break;
                        case "enemy":
                            object.visible = false;
                            createjs.Sound.play("Crash", 0, 0, 0, 0, 0.5, 0);
                            if (scoreboard.getLives() == 10) {
                                scoreboard.removeLives(5);
                            }
                            else {
                                scoreboard.removeLives(10);
                            }
                            break;
                        case "star":
                            object.visible = false;
                            createjs.Sound.play("Collect", 0, 0, 0, 0, 0.5, 0);
                            if (scoreboard.getLives() < 100) {
                                if (scoreboard.getLives() == 5) {
                                    scoreboard.addLives(5);
                                }
                                else {
                                    scoreboard.addLives(10);
                                }
                            }
                            break;
                    }
                    object.setIsColliding(true);
                }
            }
            else {
                object.setIsColliding(false);
            }
        }
    }
}