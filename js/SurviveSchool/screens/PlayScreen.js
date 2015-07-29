me.ScreenObject.extend({
    /**
     * action to perform on state change
     */
    onResetEvent : function() {
        // load a level
        surviveSchool.levelDirector.loadLevel("lobby");

        // add our HUD to the game world
        //this.HUD = new surviveSchool.HUD.Container();
        //me.game.world.addChild(this.HUD);
    },

    /**
     * action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function() {
        // remove the HUD from the game world
        //me.game.world.removeChild(this.HUD);
    }
});