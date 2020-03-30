//Creates Jupiter class as the child class of Baseclass.
class Jupiter extends BaseClass{
    //Creates the constructor.
    constructor(x,y,radius){
        super(x,y,radius);
    }
    //Displays the bodies.
    display(){
        //Changes the colour to green.
        fill("green");
        super.display();
    }
}