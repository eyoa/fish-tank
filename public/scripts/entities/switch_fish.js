class SwitchFish extends Fish {
  constructor(options){
    super(options);
    this.imageUri = './images/spikeFish.png'

  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
