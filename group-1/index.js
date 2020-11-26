function Pokemon(name, health, magic) {
  this.name = name;
  this.health = health;
  this.magic = magic;
  this.learnAttackSkill = function (obj) {
    let index = this.skills.length;
    this.skills.push({
      id: index,
      skillName: obj.skillName,
      damage: obj.damage,
      magic: obj.magic,
    });
  };

  this.showStatus = function () {
    console.log(`health = ${this.health}, magic = ${this.magic}`);
  };

  this.attack = function (num, target) {
    let attack = this.skills[num];
    if (this.health <= 0) {
      console.log(`${this.name} is already dead!`);
    } else if (this.magic > attack.magic) {
      target.health -= attack.damage;
      this.magic -= attack.magic;
      console.log(
        `${this.name} called '${attack.skillName}' successfully!\n${target.name} got ${attack.damage} damage.`
      );
      if (target.health <= 0) {
        console.log(`${target.name} is killed!`);
      }
    } else {
      console.log("not enough magic, cannot launch attack!");
    }
  };

  this.getMagic = function () {
    this.magic += 20;
    console.log(`${this.name} got 20 magic back.`);
  };
  this.skills = [];
}

function AttackSkill(skillName, damage, magic) {
  this.skillName = skillName;
  this.damage = damage;
  this.magic = magic;
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

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
