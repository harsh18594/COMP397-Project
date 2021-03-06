/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ scoreboard.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 3, 2016
    Date Last  Modified: Apr 15, 2016
    Last Modified by: Anjali Macwan, student, Centennial College
    
    Program Description: Checks of two objects collide.
    Revision History: Methods created for all level
                      Level three methods revised
*/

module managers {
    export class Scoreboard {
        // PRIVATE INSTANCE VARIABLES
        private _levelOneTarget: number;
        private _levelOneLives: number;
        
        private _levelTwoTarget: number;
        private _levelTwoLives: number;
        
        private _levelThreeTarget: number;
        private _levelThreeLives: number;
        
        private _score: number;
        private _lives: number;
        
        // PUBLIC METHODS
        public setScore(value: number): void {
            this._score = value ;
        }
        public getScore(): number {
            return this._score;
        }
        
        public setLives(value: number) {
            this._lives = value;
        }
        public getLives(): number {
            return this._lives;
        }
        
        public addScore(score: number): void {
            this._score += score;
        }
        
        public addLives(life: number): void {
            this._lives += life;
        }
        public removeLives(life: number): void {
            this._lives -= life;
        }
       
        public setLevelOneTarget(value: number): void {
            this._levelOneTarget = value ;
        }
        public getLevelOneTarget(): number {
            return this._levelOneTarget;
        }
        
        public setLevelTwoTarget(value: number): void {
            this._levelTwoTarget = value ;
        }
        public getLevelTwoTarget(): number {
            return this._levelTwoTarget;
        }
        
        public setLevelThreeTarget(value: number): void {
            this._levelThreeTarget = value ;
        }
        public getLevelThreeTarget(): number {
            return this._levelThreeTarget;
        }
        
        public setLevelOneLives(value: number) {
            this._levelOneLives = value;
        }
        public getLevelOneLives(): number {
            return this._levelOneLives;
        }
        
        public setLevelTwoLives(value: number) {
            this._levelTwoLives = value;
        }
        public getLevelTwoLives(): number {
            return this._levelTwoLives;
        }
        
        public setLevelThreeLives(value: number) {
            this._levelThreeLives = value;
        }
        public getLevelThreeLives(): number {
            return this._levelThreeLives;
        }
        
        public addLevelOneScore(score: number): void {
            this._levelOneTarget += score;
        }
        
        public addLevelTwoScore(score: number): void {
            this._levelTwoTarget += score;
        }
        
        public addLevelThreeScore(score: number): void {
            this._levelThreeTarget += score;
        }
        
        public addLevelOneLives(life: number): void {
            this._levelOneLives += life;
        }
        public removeLevelOneLives(life: number): void {
            this._levelOneLives -= life;
        }
        
        public addLevelTwoLives(life: number): void {
            this._levelTwoLives += life;
        }
        public removeLevelTwoLives(life: number): void {
            this._levelTwoLives -= life;
        }
        
        public addLevelThreeLives(life: number): void {
            this._levelThreeLives += life;
        }
        public removeLevelThreeLives(life: number): void {
            this._levelThreeLives -= life;
        }
    }
}