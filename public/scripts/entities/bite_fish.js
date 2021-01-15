class BiteFish extends Fish{
  constructor(options){
    super(options);
    this.imageUri = './images/bitefish.gif';

  }

  updateOneTick(){
    super.updateOneTick();
    let radar = this.tank.getProximateDenizens(this.position, 50);
    if(radar.length > 0){
      this.eat(radar);
    }
  }

  eat(radar){
    for (let prey of radar){
      // Not yourself and doesn't eat starter or seeds
      if (prey !== this){
        if(prey instanceof Starter){
          return false;
        }else if (prey instanceof Seed){
          return false;
        }else {
          prey.kill();
        }
      }

    }
  }
}
