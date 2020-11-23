//Pokemon Lite

function Pokemon(name, magic, health) {
    this.name = name;
    this.magic = magic;
    this.health = health;
	this.skills = [];

    //Your pokemon should have a method called showStatus that console.logs its status (how much health, magic left)
    this.showStatus = function() {
        console.log(
            `${this.name} Status: 
            magic: ${this.magic}, 
            health: ${this.health}
            -----------------`
        );
	}

	// creates a new skill (by calling the AttackSkill constructor function) and pushed this new skill to the skills array
	this.learnAttackSkill = function(attackObj) {
		let newSkill = new AttackSkill(attackObj);
		this.skills.push(newSkill);
		// console.log(this.skills);
		// function call will look like: pikachu.learnAttackSkill({attackName: "thunderbolt", damageAttack: 40, amountOfMagic: 30})
	}
	
    // attack the enemy: takes magic points (specified by the skill used) from the attacker and takes health points from the enemy
    this.attack = function (skillIdx, enemy){
	// we need to see if the pokemon has enough magic to launch the attack: if pokemon.magic >= skill.amountOfMagic
        let targetSkill = this.skills[skillIdx];
		if (targetSkill.amountOfMagic <= this.magic) {
			//attack!
			enemy.health -= targetSkill.damageAttack;
			this.magic -= targetSkill.amountOfMagic;
			console.log(`${this.name} launched skill ${targetSkill.attackName} successfully!
			 ${enemy.name} got ${targetSkill.damageAttack} damage
***********************`)
        } else {
            console.log("not enough magic, cannot launch attack!");
        }
		// health below zero: ENEMY dead!
        enemy.life();
    }
	// a new function that checks health. the function will be called from the pokemon who attacks THIS one!
    this.life = function(){
        if(this.health <= 0){
            console.log(`
            -------------------
            ${this.name} is killed! ☠️
            -------------------`);
        }
    }
    this.getMagic = function () {
		let magicPoints = Math.floor(Math.random() * 10) * 5;
		this.magic += magicPoints;
        console.log(`⋆⋆⋆ ${this.name} got ${magicPoints} magic back`);
    }
}

//Create a function called AttackSkill (with 3 parameters = attackName, damageAttack and amountOfmagic), and then we have to assing "names" to them => 
function AttackSkill(obj) {
    this.attackName = obj.attackName;
    this.damageAttack = obj.damageAttack;
    this.amountOfMagic = obj.amountOfMagic;
        
}

//--- Create Pokemon
let pikachu = new Pokemon("Pikachu", 105, 70)
let bulbasaur = new Pokemon("Bulbasaur", 95, 110);
let squirtle = new Pokemon ("Squirtle", 150, 90)
let charmander = new Pokemon ("Charmander", 125, 115)


//--- Attack Skills
// let lightning = new AttackSkill({attackName: "lightning", damageAttack: 40, amountOfMagic: 30});
// let poisonSeed = new AttackSkill ({attackName: "poison seed", damageAttack: 20, amountOfMagic: 20});
// let throwFood = new AttackSkill({ attackName: "throw food", damageAttack: 30, amountOfMagic: 15 });
const skills = {
    lightning: {attackName: "lightning", damageAttack: 40, amountOfMagic: 30},
    poisonSeed: {attackName: "poison seed", damageAttack: 20, amountOfMagic: 20},
    throwFood:{ attackName: "throw food", damageAttack: 30, amountOfMagic: 15}
 }
//--- Learn attack skills
// connect attackSkills to pokemon
pikachu.learnAttackSkill(skills.lightning);
bulbasaur.learnAttackSkill(skills.poisonSeed);
bulbasaur.learnAttackSkill(skills.lightning);
squirtle.learnAttackSkill(skills.throwFood);

//---The first argument to `attack` should be the index (or key) of the attackSkill
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
bulbasaur.attack(1, pikachu);

//get magic
pikachu.getMagic();
pikachu.getMagic();

bulbasaur.attack(1, pikachu);


// --- Status
pikachu.showStatus()
bulbasaur.showStatus()
squirtle.showStatus()
charmander.showStatus()
//console.log(pikachu.skills);