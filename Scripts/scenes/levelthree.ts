/*
    Source File: COMP397-W2016-MailPilotDemo-master/ play.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Anjali Macwan, Student, Centennial College
    
    Date First Modified: Apr 15, 2016
    Date Last  Modified: Apr 15, 2016
    Last Modified by: Anjali Macwan, student, Centennial College
    
    Program Description: Level three scene where gameplay takes action.
    Revision History: UI updated
*/

module scenes {
    export class LevelThree extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _lavelThreeLabel: objects.Label;
        private _backButton: objects.Button;
        private _nextButton: objects.Button;
        private _engineSound: createjs.AbstractSoundInstance;

        private _space: objects.GameBackground;

        private _obstacles: objects.Obstacles[];
        private _obstaclesCollection: string[];
        private _obstaclesCount: number;

        private _enemy: objects.Enemy[];
        private _enemyCount: number;
        private _enemyCollection: string[];

        private _player: objects.Player;
        private _star: objects.Star;
        private _bullet: objects.Bullet;

        private _collision: managers.Collision;


        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            this._engineSound = createjs.Sound.play("Engine", 0, 0, 0, -1, 1, 0);
        }

        // PUBLIC METHODS +++++++++++++++++++++

        public start(): void {

            //Add Level One Label
            /* this._lavelThreeLabel = new objects.Label(
                "Level 3 SCENE", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._lavelThreeLabel);
            */

            // reset scoreboard
            scoreboard.setLives(100);
            scoreboard.setScore(0);

            // instantiate obstacles collection
            /* this._obstaclesCollection = new Array("Planet1", "Planet2", "Planet3", "Planet4", "Stone1", "Stone2");
             // set obstacles count
             this._obstaclesCount = 2;
             // instantiate obstacles array
             this._obstacles = new Array<objects.Obstacles>();
             */

            // instantiate enemy collection
            this._enemyCollection = new Array("Enemy1", "Enemy2", "Enemy3", "Enemy4", "Enemy5", "Enemy6", "Enemy7");
            // set enemy count
            this._enemyCount = 4;
            // instantiate enemy array
            this._enemy = new Array<objects.Enemy>();

            // add space background image to the scene
            this._space = new objects.GameBackground();
            this.addChild(this._space);

            // add obstacle to the scene
            for (var obstacle: number = 0; obstacle < this._obstaclesCount; obstacle++) {
                var randomObstacle = Math.floor(Math.random() * 6);

                this._obstacles[obstacle] = new objects.Obstacles(this._obstaclesCollection[randomObstacle]);
                this.addChild(this._obstacles[obstacle]);
            }

            // add enemy to the scene
            for (var enemy: number = 0; enemy < this._enemyCount; enemy++) {
                var randomEnemy = Math.floor(Math.random() * 7);

                this._enemy[enemy] = new objects.Enemy(this._enemyCollection[randomEnemy]);
                this.addChild(this._enemy[enemy]);
            }

            // add star to the scene
            this._star = new objects.Star();
            this.addChild(this._star);

            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // add bullet to the scene
            this._bullet = new objects.Bullet();
            this.addChild(this._bullet);
            // set bullet location
            this._bullet.setBulletPoisition(this._player.x, this._player.y);

            // add collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // Score Label
            this._scoreLabel = new objects.Label("Score: ", "30px Frijole", "#FFFF00", 5, 5, false);
            this.addChild(this._scoreLabel);

            // Lives Label
            this._livesLabel = new objects.Label("Health: ", "30px Frijole", "#FFFF00", 350, 5, false);
            this.addChild(this._livesLabel);

            // add the Back button to the MENU scene
            /*this._backButton = new objects.Button(
                "LevelTwoButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._backButton);
            
            // Back Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            
            // add the Next button to the MENU scene
            this._nextButton = new objects.Button(
                "GameOverButton",
                config.Screen.CENTER_X + 50,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._nextButton);
            */

            // Next Button event listener
            // this._nextButton.on("click", this._nextButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);

            // add this scene to the global stage container
            stage.addChild(this);
        }


        // method to find distance between two points
        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }
        // method to check which objects are colliding with bullet
        public checkBulletCollision(object: objects.GameObject, index: number) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._bullet.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._bullet.x;
            startPoint.y = this._bullet.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;


            /* check if the distance between the bullet and 
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (object.getIsCollidingBullet() == false) {
                    switch (object.name) {
                        case "obstacles":
                            this._bullet.setBulletPoisition(this._player.x, this._player.y);    // reset the bullet
                            break;
                        case "enemy":
                            object.visible = false;         // make enemy invisible
                            this._enemy[index].x = 650;     // put enemy out of the scene to prevent gameplay error
                            scoreboard.addScore(100);       // update scoreboard
                            createjs.Sound.play("BulletCrash", 0, 0, 0, 0, 0.5, 0);
                            this._bullet.setBulletPoisition(this._player.x, this._player.y);    // reset the bullet
                            break;
                        case "star":
                            object.visible = false;         // make star invisible
                            this._star.x = 650;             // put star out of the scene to prevent gameplay error
                            createjs.Sound.play("BulletCrash", 0, 0, 0, 0, 0.5, 0);
                            this._bullet.setBulletPoisition(this._player.x, this._player.y);    // reset the bullet
                            break;
                    }
                    object.setIsCollidingBullet(true);
                }
            }
            else {
                object.setIsCollidingBullet(false);
            }
        }

        // PLAY Scene updates here
        public update(): void {
            this._space.update();       // update background
            this._player.update();      // update player

            // check if obstacle is colliding with bullet
            /* for (var obstacle = 0; obstacle < this._obstaclesCount; obstacle++) {
                 this.checkBulletCollision(this._obstacles[obstacle], obstacle);
             }*/

            // check if obstacles are colliding with player and update it
            /* this._obstacles.forEach(obstacle => {
                 this._collision.check(obstacle);
                 obstacle.update();
             }); */

            // check if enemy is colliding with bullet
            for (var enemy = 0; enemy < this._enemyCount; enemy++) {
                this.checkBulletCollision(this._enemy[enemy], enemy);
            }

            // check if enemy is colliding with player and update it
            this._enemy.forEach(enemy => {
                this._collision.check(enemy);
                enemy.update();
            });

            this._collision.check(this._star);      // check if star is colliding with player
            this.checkBulletCollision(this._star, null);    // check if star is colliding with bullet
            this._star.update();        // update star

            // update bullet
            if (this._bullet.x > 0) {
                this._bullet.update();
            }
            else {
                this._bullet.setBulletPoisition(this._player.x, this._player.y);
            }

            this._updateScore();


            // check if life becomes 0
            if (scoreboard.getLives() < 1) {
                //this._player.engineOff();
                this._engineSound.stop();
                scene = config.Scene.LEVELTHREELOSE;
                changeScene();
            }
        }

        // method to update scoreboard
        private _updateScore(): void {
            this._scoreLabel.text = "Score: " + scoreboard.getScore() + "/5000";
            this._livesLabel.text = "Health: " + scoreboard.getLives() + "%";

            if (scoreboard.getScore() >= 5000) {
                //this._player.engineOff();
                this._engineSound.stop();
                scene = config.Scene.END;
                changeScene();
            }
        }

        //EVENT HANDLERS ++++++++++++++++++++

        // PLAY Button click event handler
        /* private _backButtonClick(event: createjs.MouseEvent) {
             // Switch to the THREE Scene
             scene = config.Scene.LEVELTWO;
             changeScene();
         }
         
         // INSTRUCTIONS Button click event handler
         private _nextButtonClick(event: createjs.MouseEvent) {
             // Switch to the END Scene
             scene = config.Scene.END;
             changeScene();
         }
         */
    }
}