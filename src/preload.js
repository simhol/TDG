var Preload = function(game){};

Preload.prototype = {

	preload: function(){
		this.game.load.image('background', 'assets/background3.jpg');
		this.game.load.image('castle1', 'assets/castle1_scale.png');
		this.game.load.image('castle2', 'assets/castle2_scale.png');
		this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
		this.game.load.spritesheet('enemy', 'assets/enemy.png', 32, 48);
		this.game.load.image('spawnbutton_minion_weak', 'assets/spawnbutton_minion_weak.png', 40, 40);
	},

	create: function(){
		this.game.state.start("Menu");
	}
}
