var Maps = function (game) {
};

Maps.prototype = {

    maps: function () {

    },

    create: function () {
        this.game.state.start("Battle");
    }
}

module.exports = Maps