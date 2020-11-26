class Pokemon {
  constructor({ name, health, magic }) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }
  learnAttackSkill(skill) {
    const clonedSkills = [...this.skills, skill];
    this.skills = clonedSkills;
  }

  attack(index, attackedPokemon) {
    let usedSkill = this.skills[index];

    if (usedSkill.magicCost > this.magic) {
      console.log("not enough magic, cannot launch attack!");
    } else if (this.health <= 0) {
      console.log(`${this.name} is already dead`);
    } else {
      this.magic -= usedSkill.magicCost;
      attackedPokemon.health -= usedSkill.damage;
      console.log(
        `${this.name} launched "${usedSkill.name}" successfully ${attackedPokemon.name} got ${usedSkill.damage} damage`
      );
      if (attackedPokemon.health <= 0) {
        console.log(`${attackedPokemon.name} is killed`);
      }
    }
  }
  showStatus() {
    if (this.health <= 0) {
      console.log(`${this.name} is already dead`);
    }
    console.log(
      `${this.name} status \n health: ${this.health} \n magic: ${this.magic}`
    );
  }

  getMagic(amount = 20) {
    this.magic += amount;
    console.log(`${this.name} got ${amount} magic back`);
  }
}

function AttackSkill({ name, damage, magicCost }) {
  this.magicCost = magicCost;
  this.name = name;
  this.damage = damage;
}

let pikachu = new Pokemon({ name: "pikachu", health: 120, magic: 80 });
let bulbasaur = new Pokemon({ name: "bulbasaur", health: 95, magic: 105 });
let lightning = new AttackSkill({
  name: "lightning",
  damage: 40,
  magicCost: 30,
});

let poisonSeed = new AttackSkill({
  name: "poison seed",
  damage: 20,
  magicCost: 20,
});
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
