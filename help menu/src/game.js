class Game
 {
   /*
    *
    */
   constructor()
   {
     this.canvas = null;
     this.context = null;

     gameGlobal.menuManager = new MenuManager();

     gameGlobal.menuManager.addScene("Help", new Help());
     gameGlobal.menuManager.setCurrentScene("Help");
   }

   /*
    *
    */
   initWorld()
   {
     var that = this;

     this.canvas = document.getElementById("canvas");
     this.context = this.canvas.getContext("2d");

     console.log("Initialising game world");
     this.update();
   }

   /*
    *
    */
   update()
   {
     gameGlobal.menuManager.update();

     gameGlobal.game.draw();

     window.requestAnimationFrame(gameGlobal.game.update);
   }

   /*
    *
    */
   draw()
   {
     gameGlobal.menuManager.draw(gameGlobal.game.context);
   }

 }
