var gameGlobal = {};

 /*
  *
  */
 function main()
 {
   var game = new Game();
	 gameGlobal.game = game;
   game.initWorld();
 }
