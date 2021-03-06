/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ collision.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 7, 2016
    Date Last  Modified: Apr 7, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Checks of two objects collide.
    Revision History: check method updated
*/

module managers {
    // COLLISION MANAGER CLASS
    export class LevelOneCollision {
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.LevelOnePlayer;
        
        constructor(player: objects.LevelOnePlayer) {
            this._player = player;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public check(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfWidth: number = this._player.height * 0.5;
            var objectHalfWidth: number = object.height * 0.5;
            var minimumDistance: number = playerHalfWidth + objectHalfWidth;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;


            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (object.getIsColliding() == false) {
                    switch (object.name) {
                        case "LevelOneEnemy":
                            object.visible = false;
                            scoreboard.removeLevelOneLives(1);
                            createjs.Sound.play("TankCrash", 0, 0, 0, 0, 0.8, 0);
                            
                            break;
                        case "LevelOneObstacle":
                            object.visible = false;
                            scoreboard.removeLevelOneLives(1);
                            createjs.Sound.play("TankCrash", 0, 0, 0, 0, 0.8, 0);
                            
                            break;
                        case "LevelOneCollector":
                            object.visible = false;
                            scoreboard.addLevelOneScore(250);
                            createjs.Sound.play("Collect", 0, 0, 0, 0, 1, 0);
                            
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