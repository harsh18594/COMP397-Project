/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ ocean.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 5, 2016
    Date Last  Modified: Apr 5, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: level onw background
    Revision History: updated variable values for scrolling
*/

module objects {
    export class LevelOneBackground extends objects.GameObject {
        //PRIVATE INSTANCE VARIABLES

        // CONSTRUCTOR ++++++++++++++++++++++++
        constructor() {
            super("Desert");

            this._speed.x = 3;  // space speed
            this._reset(-640);
            //this._reset(0);   // right to left
        }


        // PUBLIC METHODS
        public update(): void {
            this.x += this._speed.x;        // left to right
            //this.x -= this._speed.y;      // right to left
            this._checkBounds(0);           // left to right
            //this._checkBounds(-1360);     // right to left
        }

        //PRIVATE METHODS
        
        // reset the space to make it look continues
        protected _reset(value: number): void {
            this.x = value;         // left to right   -1360
            //this.x = value;       // right to left
        }

        // check boundaries of space
        protected _checkBounds(value: number): void {
            if (this.x >= value) {       // left to right
                this._reset(-640);
            }
            /*if(this.x <= value)       // right to left
            {
                this._reset(0);
            }*/
        }
    }
}