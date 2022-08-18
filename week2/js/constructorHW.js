class Cat {
  constructor(color, age, sassLevel) {
    this.color = "grey";
    this.age = 5;
    this.sassLevel = 10;
  }

  catScream() {
    console.log("RAWWWWWWWWWRRRRR");
  }

  getCatName(name) {
    this.catName = name;
  }

  getSassy() {
    this.sassLevel += 1;
  }
}

const cat1 = new Cat("brown", 1, 3);
cat1.getCatName("pickles");
cat1.getSassy();
cat1.catScream();

class Pirate {
  constructor(name, beard, gold) {
    this.name = "blackbeard";
    this.beard = true;
    this.gold = 100;
  }

  pirateTalk(arr) {
    let arr1 = ["argggg me booty"];
    return arr.concat(arr1);
  }

  getGold() {
    this.gold += 100;
  }

  cannonBall() {
    let cannon = Math.random() * 100;
    cannon = cannon.toFixed();
    console.log(`You've been struck by ${cannon} cannon ball(s)`);
  }
}

const ship1 = new Pirate("james", false, 200);
ship1.cannonBall();
ship1.getGold;
console.log(ship1.pirateTalk(["whats up"]));
