/* 
    Source File: Harsh Dave - Skywars/ enemy.ts
    Author's name: Harsh Dave, student, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 5, 2016
    Date Last  Modified: Apr 5, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: level one enemy
    Revision History: minor changes
*/

module objects {
    export class LevelOneEnemy extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(enemyType: string) {
            super(enemyType);

            this._reset(this._leftBounds);
            this.name = "LevelOneEnemy";
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the enemy met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds - 50);
            }
        }

        // reset the enemy offscreen
        protected _reset(value: number): void {
            this.visible = true;
            // behaviour of objects
            this._speed.x = Math.floor(Math.random() * 3) + 5;
            
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the enemy
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}