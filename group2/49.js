class Pokemon{
    constructor(name, health, magic){
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = []
    }

    showStatus(){
            console.log(`${this.name} status \nhealth: ${this.health}\nmagic: ${this.magic}\n--------------------------------------------`)
    } 

    learnAttackSkill(newAttack){
        const cloneNewAttack=[...this.skills, newAttack]
        this.skills = cloneNewAttack;
    }

    attack(index, attackedPokemon){
        let selectedAttack =  this.skills[index];
        if(this.health<0){
            console.log(this.name, "is already dead!");
        }
        else if (this.magic<= selectedAttack.magicCost){
            console.log("Not enough magic, cannot launch attack!"+"\n"+"--------------------------------------------") ;
        }
        else{
            this.magic -= selectedAttack.magicCost;
            attackedPokemon.health -= selectedAttack.damage;
            console.log(`${this.name} lauched skill '${selectedAttack.name}' successfully! \n${attackedPokemon.name} got ${selectedAttack.damage} damage\n--------------------------------------------`);
            if(attackedPokemon.health<0){
                console.log(attackedPokemon.name,"is killed!","\n--------------------------------------------");
            }
        }        
    }

    getMagic(magicPoints=20){
        this.magic += magicPoints;
        console.log(`${this.name} got ${magicPoints} magic back\n--------------------------------------------` );
    }

}

class AttackSkill{
    constructor(name,damage,magicCost){
        this.name = name;
        this.damage = damage;
        this.magicCost = magicCost;
    }
}
//POKEMONS
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

//ATTACKS
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

//FIGHTS
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);



/* const pikachu = new Pokemon("Pikachu", 100, 50);
const bublesour = new Pokemon("BubleSour", 120, 40);
let lightning = new AttackSkill("lightning", 40, 30);
pikachu.learnAttackSkill(lightning);
pikachu.attack(0, bublesour);
pikachu.getMagic(100);

pikachu.showStatus();
bublesour.showStatus(); */
