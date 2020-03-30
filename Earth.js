//Creates Earth class as the child class of Baseclass.
class Earth extends BaseClass{
    constructor(x,y,radius){
       super(x,y,radius);
    }
    display(){
        //Changes the colour to blue.
        fill("blue");
        super.display();
    }
}