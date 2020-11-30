class Pokemon {
    constructor(pokemon, health, mana, attackSkill = ["none"]) {
        this.pokemon = pokemon;
        this.health = health;
        this.mana = mana;
        this.attackSkill = attackSkill;
    }
    newPokemon(attackskill) {
        const newPokemon = {
            name: this.pokemon,
            health: this.health,
            mana: this.mana,
            attackSkills: [this.attackSkill],
        }
        return newPokemon;
    }
}
class Skill extends Pokemon {
    constructor(health, mana, attackSkill) {
        super(health, mana, attackSkill);
        this.learnAttackSkill = (pokemon, obj) => {
            let newPokemonSkill = pokemon.attackSkill.push(obj);
            if (pokemon.attackSkill.includes("none")) {
                pokemon.attackSkill.shift();
            }
            return newPokemonSkill;
        }
    }
    showStatus(pokemon) {
        let status = `${pokemon.pokemon} \n\n Health: ${pokemon.health}, Mana: ${pokemon.mana}`;
        return status;
    }
    attack(pokemon, skill, enemy) {
        let damagedealt = 0;
        let manaUsed = 0;
        let enemyHealth = 0;
        
        if (skill.manacost < pokemon.mana) {
            enemyHealth = enemy.health - skill.damage;
            damagedealt = skill.damage;
            manaUsed = pokemon.mana - skill.manacost;
            enemy.health = enemyHealth;
            pokemon.mana = manaUsed;
            if (enemy.health === 0) {
                return `You defeted ${enemy.pokemon}!`;
            }
            return `${pokemon.pokemon} deals ${damagedealt} damage to ${enemy.pokemon}!`;
        } else if (pokemon.mana === 0) {
            return this.refillMana(pokemon);
        } else {
            return "You're Pokemon does not have enough mana!";
        }
    }
    refillMana(pokemon) {
        pokemon.mana += 10;
    }
}

const AttackSkill = function (skill, damage, manacost) {
    this.skill = skill;
    this.damage = damage;
    this.manacost = manacost;

    const newAttackSkill = {
        skill: this.skill,
        damage: this.damage,
        manacost: this.manacost
    }
    return newAttackSkill;
}

let Pikachu = new Pokemon("Pikachu", 100, 50);
let Glumanga = new Pokemon("Glumanga", 200, 40);
console.log(Pikachu);
let lightning = new AttackSkill("lightning", 40, 30);
let tackle = new AttackSkill("tackle", 10, 5);
let fireBlast = new AttackSkill("fire blast", 60, 40);
let skill = new Skill();
skill.learnAttackSkill(Pikachu, lightning)
skill.learnAttackSkill(Pikachu, tackle)
skill.learnAttackSkill(Glumanga, fireBlast)
console.log(skill.showStatus(Pikachu))
console.log(Pikachu);
console.log(Glumanga);
console.log(skill.attack(Pikachu, lightning, Glumanga));
console.log(skill.showStatus(Pikachu))
console.log(skill.showStatus(Glumanga))
console.log(skill.attack(Glumanga, tackle, Pikachu));
console.log(skill.showStatus(Pikachu))
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
console.log(skill.attack(Pikachu, lightning, Glumanga));
console.log(skill.attack(Glumanga, fireBlast, Pikachu));
console.log(skill.showStatus(Pikachu))
console.log(skill.showStatus(Glumanga))
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
skill.refillMana(Pikachu)
console.log(skill.attack(Pikachu, lightning, Glumanga));
console.log(skill.attack(Glumanga, fireBlast, Pikachu));
console.log(skill.showStatus(Pikachu))
console.log(skill.showStatus(Glumanga))
console.log(skill.attack(Pikachu, lightning, Glumanga));
console.log(skill.attack(Glumanga, fireBlast, Pikachu));
console.log(skill.showStatus(Pikachu))
console.log(skill.showStatus(Glumanga))
console.log(skill.attack(Pikachu, lightning, Glumanga));
console.log(skill.showStatus(Pikachu))


