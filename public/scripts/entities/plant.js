class Plant extends Denizen {
  constructor(options){
    super(options);
    this.imageUri = './images/seaweed.png';
    this.height = 840;
    this. width = 850;
    this.position.y += this.height/2;
  }

  update(){
    //no pysics for the plants
  }

}
