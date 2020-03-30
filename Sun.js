//Creates Sun class as the child class of Baseclass.
class Sun extends BaseClass{
    //Creates the constructor.
    constructor(x,y,radius){
        super(x,y,radius);
    }
    //Displays the bodies.
    display(){        
        //Changes the colour to yellow.
        fill("yellow");
        super.display();
    }
}