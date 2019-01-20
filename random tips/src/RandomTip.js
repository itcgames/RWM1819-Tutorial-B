/**
 * randomtip constructor. 
 * Declares the tips location.
 */
function RandomTip(x,y)
{
	this.x = x;
    this.y = y;
    this.count = 0;
    this.tip = randomTips();
}

/**
 * Function that draws the tip's text.
 */
RandomTip.prototype.draw = function(ctx)
{
	ctx.font = "15px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
    ctx.fillText(this.tip, this.x, this.y); 
}

/**
 * Function that updates the count and changes the tip string every 200 ticks * 
 * */
RandomTip.prototype.update = function () {
    this.count += 1;

    if (this.count >= 200) {
        this.tip = randomTips();
        this.count = 0;
    }
}

RandomTip.prototype.generateRandomTip = function () {
    this.tip = randomTips();
}

/**
 * Function that randomly selects and returns tip from an array of tips. 
 */
function randomTips()
{
	var tips = [
		"TIP: You lose if your health is 0.",
		"TIP: Don't get bitten by the zombies!.",
		"TIP: Dragons are scary.",
		"TIP: The enemies cant kill you if they're dead",
		"TIP: If you see a bug, kill it.", 
		"TIP: It's hard to hit a moving target."
	];
	
	var tip = Math.floor(Math.random()*tips.length);
	
	return tips[tip];
}