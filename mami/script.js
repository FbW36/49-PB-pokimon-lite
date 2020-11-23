class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }
  learnAttackSkill(newSkill) {
    const allSkills = [...this.skills, newSkill];
    this.skills = allSkills;
  }

  showStatus() {
    console.log(
      `${this.name} Status\nHealth: ${this.health}\nMagic: ${this.magic}\n=====================================`
    );
  }

  attack(index, attackedPokemon) {
    const usedSkill = this.skills[index];
    // console.log(usedSkill);
    // console.log(usedSkill.useMagic);
    const lostMagic = usedSkill.useMagic;
    if (this.health < 0) console.log(`${this.name} is already dead`);
    else if (lostMagic < this.magic && attackedPokemon.health > 0) {
      const damage = usedSkill.damageHealth;
      attackedPokemon.health -= damage;
      //   console.log(attackedPokemon.health);
      this.magic -= usedSkill.useMagic;
      //   console.log(usedSkill.useMagic);
      //   console.log(this.magic);
      console.log(
        `${this.name} launched skill ${usedSkill.attackName} successfully!\n${attackedPokemon.name} got ${usedSkill.damageHealth} damage\n====================================================`
      );
      if (attackedPokemon.health < 0)
        console.log(
          `${attackedPokemon.name} is killed\n==========================================`
        );
    } else if (attackedPokemon.health < 0) {
      console.log(
        `${attackedPokemon.name} is killed\n==========================================`
      );
    } else
      console.log(
        `not enough magic, cannot launch attack!\n==========================================`
      );
  }

  getMagic(addmagic = 20) {
    this.magic += addmagic;
    console.log(
      `${this.name} got ${addmagic} magic back \n==========================================`
    );
  }
}

class AttackSkill {
  constructor(attackName, damageHealth, useMagic) {
    this.attackName = attackName;
    this.damageHealth = damageHealth;
    this.useMagic = useMagic;
  }
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
pikachu.showStatus();
bulbasaur.showStatus();
let lightning = new AttackSkill("lightning", 40, 30);

let poisonSeed = new AttackSkill("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(lightning);

console.log(lightning);
console.log(pikachu);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
