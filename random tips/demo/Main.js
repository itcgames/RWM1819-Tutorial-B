/**
 * Main entry point for the Javascript program.
 */
function main()
{
    initialise();
    draw();

    document.addEventListener("click", onClickStart.bind(null, this));
}

/**
 * Initializes the pop up box and the value that controls if it's visible.
 */
function initialise()
{
	initCanvas();

    this.tip = new RandomTip(500, 500);
}

/**
 * Creates the canvas that the project elements will be drawn on.
 */
function initCanvas()
{
	var canvas = document.createElement("canvas");
		
    canvas.id = 'mycanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
		
    var ctx = canvas.getContext("2d");
		
    document.body.appendChild(canvas);
}

/**
 * Function that handles all of the draw methods.
 */
function draw()
{
	var canvas = document.getElementById('mycanvas');

	var ctx = canvas.getContext('2d');
	
	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	this.tip.draw(ctx);

}

/*
 *Function that is called at the start of a click event
 *assigns a new string to the variable tip and redraws 
 */

function onClickStart(game, e) {
    this.tip.generateRandomTip();
    draw();
}