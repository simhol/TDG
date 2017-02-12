import Phaser from 'phaser'
import Healthbar from '../HealthBar.standalone'

export default class Minion extends Phaser.Sprite {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, opts.frame)
        this.game = game
        game.add.existing(this)
        game.physics.arcade.enable(this)
        this.health = opts.health
        this.maxHealth = opts.maxHealth
        this.animations.add('right', [9, 10, 11, 12, 13, 14, 15, 16, 17], 5, true);
        this.animations.add('left', [8, 9, 10, 11, 12, 13, 14, 15], 5, true);
        this.animations.add('attack', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true);
        this.body.velocity = opts.velocity;
        this.dmg = opts.dmg;
        this.attacking = false;
    }

    update() {
        if (this.body.velocity.x < 0) {
            this.animations.play('left')
        }
        else if (this.body.velocity.x > 0) {
            this.animations.play('right')
        }
        if (this.attacking) {
            this.animations.play('attack')
        }
        else if (this.body.velocity.x ==0) {
            this.animations.stop()
        }
    }

    attack(enemy) {

        this.body.velocity.x = 0
        if (!this.attacking) {
            this.game.time.events.loop(1000, () => {
                enemy.damage(this.dmg)
                if (!enemy.alive) {
                    this.attacking = false
                 }
                this.attacking=true
            }, this)
        }
    }

    static overlapHandler(enemy, minion) {
        minion.attack(enemy)
    }
}