let demo = {};
demo.state1 = function () { };
demo.state1.prototype = {
    preload: function () {
        game.load.image('logo', '/assets/phaser.png');
    },
    create: function () {
        let logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    },
    update: function () { }
};
