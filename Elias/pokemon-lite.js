class Pokemon {
    constructor(pokemon, health, mana, attackSkill) {
        this.pokemon = pokemon;
        this.health = health;
        this.mana = mana;
        this.attackSkill = attackSkill;
    }
    newPokemon (attackskill) {
        const newPokemon = {
            name: this.pokemon,
            health: this.health,
            mana: this.mana,
            attackSkills: this.attackSkill = [],
        }
        return newPokemon;
    }
}
class Skill extends Pokemon  {
    constructor () {
        super();
        this.learnAttackSkill = (obj) => {
            this.newPokemon(this.attackSkill.push(obj));
        }
    }
    
    // showStatus: function() {

    // },
    // attack: function() {

    // }
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
    console.log(Pikachu);
    let lightning = new AttackSkill("lightning", 40, 30);
    let skill = new Skill();
    console.log(lightning);
    skill.learnAttackSkill(lightning)
    console.log(Pikachu);
