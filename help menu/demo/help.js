class Help
{
  constructor()
  {
    this.left = new Image;
    this.right = new Image;
    this.img1 = new Image;
    this.img2 = new Image;
    this.img3 = new Image;

    this.left.src = "resources/pointleft.png";
    this.right.src = "resources/pointright.png";
    this.img1.src = "resources/img1.png";
    this.img2.src = "resources/img2.png";
    this.img3.src = "resources/img3.png";

    this.images = [];

    this.images.push(this.img1);
    this.images.push(this.img2);
    this.images.push(this.img3);

    this.i = 0;

    this.clickDetection = new ClickDetection();
  }

  update()
  {
    if(this.clickDetection.isClicked())
    {
      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 300, 500, 200,200))
      {
        if(this.i === 0)
        {
          this.i = 2;
        }
        else
        {
          this.i--;
        }
        this.clickDetection.reset();
      }

      if(this.checkCollisionBetween(this.clickDetection.getPosition(), 1420, 500, 200,200))
      {
        if(this.i === 2)
        {
          this.i = 0;
        }
        else
        {
          this.i++;
        }
        this.clickDetection.reset();
      }
    }
  }

  render(ctx)
  {
    ctx.drawImage(this.left, 300,500,200,200);
    ctx.drawImage(this.right, 1420,500,200,200);
    ctx.drawImage(this.images[this.i], 600, 100, 600, 600);
  }

  checkCollisionBetween(clickPos, x,y,width,height)
  {
    var collides = false;
    if ((clickPos[0] < x + width) &&
     (clickPos[0] > x) &&
     (clickPos[1] < y + height) &&
     (clickPos[1] > y))
     {
       collides = true;
     }

     return collides;
  }
}
