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
      if (this.health <= 0) {
        console.log(`${this.name} is already dead`);
      } else if (usedSkill.magicCost > this.magic) {
        console.log("not enough magic, cannot launch attack!");
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

// Ines solution
// class Pokemon{
//   constructor(name, health, magic){
//       this.name = name;
//       this.health = health;
//       this.magic = magic;
//       this.skills = []
//   }
// ​
//   showStatus(){
//           console.log(`${this.name} status \nhealth: ${this.health}\nmagic: ${this.magic}\n--------------------------------------------`)
//   } 
// ​
//   learnAttackSkill(newAttack){
//       const cloneNewAttack=[...this.skills, newAttack]
//       this.skills = cloneNewAttack;
//   }
// ​
//   attack(index, attackedPokemon){
//       let selectedAttack =  this.skills[index];
//       if(this.health<0){
//           console.log(this.name, "is already dead!");
//       }
//       else if (this.magic<= selectedAttack.magicCost){
//           console.log("Not enough magic, cannot launch attack!"+"\n"+"--------------------------------------------") ;
//       }
//       else{
//           this.magic -= selectedAttack.magicCost;
//           attackedPokemon.health -= selectedAttack.damage;
//           console.log(`${this.name} lauched skill '${selectedAttack.name}' successfully! \n${attackedPokemon.name} got ${selectedAttack.damage} damage\n--------------------------------------------`);
//           if(attackedPokemon.health<0){
//               console.log(attackedPokemon.name,"is killed!","\n--------------------------------------------");
//           }
//       }        
//   }
// ​
//   getMagic(magicPoints=20){
//       this.magic += magicPoints;
//       console.log(`${this.name} got ${magicPoints} magic back\n--------------------------------------------` );
//   }
// ​
// }
// ​
// class AttackSkill{
//   constructor(name,damage,magicCost){
//       this.name = name;
//       this.damage = damage;
//       this.magicCost = magicCost;
//   }
// }
// //POKEMONS
// let pikachu = new Pokemon("pikachu", 120, 80);
// let bulbasaur = new Pokemon("bulbasaur", 95, 105);
// ​
// //ATTACKS
// let lightning = new AttackSkill("lightning", 40, 30);
// let poisonSeed = new AttackSkill ("poison seed", 20, 20);
// pikachu.learnAttackSkill(lightning);
// bulbasaur.learnAttackSkill(poisonSeed);
// ​
// //FIGHTS
// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);
// pikachu.showStatus();
// bulbasaur.showStatus();
// pikachu.attack(0, bulbasaur);
// pikachu.attack(0, bulbasaur);
// pikachu.getMagic();
// pikachu.attack(0, bulbasaur);
// bulbasaur.attack(0, pikachu);
// ​
