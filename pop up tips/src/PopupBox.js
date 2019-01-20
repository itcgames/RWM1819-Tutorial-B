/**
 * Pop up box constructor. 
 * Declares the boxes parameters.
 */
function PopupBox(x,y)
{
	this.x = x;
	this.y = y;
	this.width = 400;
    this.height = 200;
    this.tip = "TIP: It's hard to hit a moving target."
}

/**
 * Function that draws the tip box and its text.
 */
PopupBox.prototype.draw = function(ctx)
{
	ctx.fillStyle = "#66ff33";
	ctx.fillRect(this.x, this.y, this.width, this.height);
	
	ctx.font = "15px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText(this.tip, this.x + this.width/2, this.y + 50); 
	ctx.fillText("click to close this tip", this.x + this.width/2, this.y + 150); 
}