var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var LevelTwo = (function (_super) {
        __extends(LevelTwo, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LevelTwo() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LevelTwo.prototype.start = function () {
            //Add sea
            this._sea = new objects.Sea();
            this.addChild(this._sea);
            //Added island in the scene
            this._island = new objects.Island();
            this.addChild(this._island);
            // add enemy to the scene
            this._enemyOne = new objects.LevelTwoEnemy("LevelTwoEnemy1");
            this.addChild(this._enemyOne);
            this._enemyTwo = new objects.LevelTwoEnemy("LevelTwoEnemy2");
            this.addChild(this._enemyTwo);
            this._enemyThree = new objects.LevelTwoEnemy("LevelTwoEnemy3");
            this.addChild(this._enemyThree);
            //added PLAYEr to the scene
            this._playerleveltwo = new objects.LevelTwoPlayer();
            this.addChild(this._playerleveltwo);
            // add collision manager to the scene
            this._collision = new managers.LevelTwoCollision(this._playerleveltwo);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        LevelTwo.prototype.update = function () {
            //update sea
            this._sea.update();
            //update island
            this._island.update();
            // update enemy and check collision
            this._enemyOne.update();
            this._collision.check(this._enemyOne);
            this._enemyTwo.update();
            this._collision.check(this._enemyTwo);
            this._enemyThree.update();
            this._collision.check(this._enemyThree);
            //update player
            this._playerleveltwo.update();
        };
        return LevelTwo;
    })(objects.Scene);
    scenes.LevelTwo = LevelTwo;
})(scenes || (scenes = {}));
//# sourceMappingURL=leveltwo.js.map