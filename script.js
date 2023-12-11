class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    switch (this.type) {
      case 'warrior':
        this.attack = 'a sword';
        break;
      case 'monk':
        this.attack = 'martial arts';
        break;
      case 'magician':
        this.attack = 'magic';
        break;
      case 'ninja':
        this.attack = 'shuriken';
        break;
      default:
        this.attack = 'an unknown weapon';
    }

    console.log(`The ${this.type} attacked using ${this.attack}!`);
  }
}

let hero1 = new Hero('Shena', 20, 'warrior');
hero1.attack()