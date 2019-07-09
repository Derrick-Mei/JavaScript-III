/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three constructor classes: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.

  Each class has unique properites and methods that are defined in their block comments below:
*/

function GameObject(character) {
    this.createdAt = new Date();
    this.name = character.name;
    this.dimensions = character.dimensions;
}

GameObject.prototype.destroy = function() {
    return this.name + ' was removed from the game.';
};

function CharacterStats(character) {
    GameObject.call(this, character);
    this.healthPoints = character.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;
};

function Humanoid(character) {
    CharacterStats.call(this, character);
    this.team = character.team;
    this.weapons = character.weapons;
    this.language = character.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
};

// const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//         length: 2,
//         width: 1,
//         height: 1
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: ['Staff of Shamalama'],
//     language: 'Common Tongue'
// });
// const swordsman = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//         length: 2,
//         width: 2,
//         height: 2
//     },
//     healthPoints: 15,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: ['Giant Sword', 'Shield'],
//     language: 'Common Tongue'
// });
// const archer = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//         length: 1,
//         width: 2,
//         height: 4
//     },
//     healthPoints: 10,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: ['Bow', 'Dagger'],
//     language: 'Elvish'
// });
// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
// Stretch task:
// * Create Villian and Hero classes that inherit from the Humanoid class.
// * Give the Hero and Villians different methods that could be used to remove health points from objects
//       which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

function Villain(character) {
    Humanoid.call(this, character);
    this.strength = Math.random();
    this.slash = function(target) {
        if (this.healthPoints < 0) {
            return `${this.name} is dead and cannot attack.  RIP`;
        }
        if (target.healthPoints < 0) {
            return `${target.name} is already dead.  Stop slashing at it you sadist.`;
        }
        let slashDamage = Math.floor(Math.random() * 10 * this.strength);
        target.healthPoints -= slashDamage;
        console.log(`${target.name} has been slashed and has taken ${slashDamage} damage. ${target.name} has ${target.healthPoints} remaining`);
        if (target.healthPoints < 1) {
            return target.destroy();
        } else {
            return `${target.name} survives to live another day`;
        }
    };
}

Villain.prototype = Object.create(Humanoid.prototype);

function Hero(character) {
    Humanoid.call(this, character);
    this.strength = Math.random();
    this.heroYell = function(target) {
        if (this.healthPoints < 0) {
            return `${this.name} is dead and cannot attack.  RIP`;
        }
        if (target.healthPoints < 0) {
            return `${target.name} is already dead.  Stop yelling at it you sadist.`;
        }
        let heroYellDamage = Math.floor(Math.random() * 10 * this.strength);
        target.healthPoints -= heroYellDamage;
        console.log(`${target.name} has been heroYelled and has taken ${heroYellDamage} damage.
        ${target.name} has ${target.healthPoints} remaining`);
        if (target.healthPoints < 1) {
            return target.destroy;
        } else {
            return `${target.name} survives to live another day`;
        }
    };
}

Hero.prototype = Object.create(Humanoid.prototype);

const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: ['Giant Sword', 'Shield'],
    language: 'Common Tongue'
});
const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: ['Bow', 'Dagger'],
    language: 'Elvish'
});

// console.log(villain);
// console.log(hero);

console.log(villain.slash(hero));
console.log(hero.heroYell(villain));
console.log(villain.slash(hero));
console.log(hero.heroYell(villain));
console.log(villain.slash(hero));
console.log(hero.heroYell(villain));
console.log(villain.slash(hero));
console.log(hero.heroYell(villain));
console.log(villain.slash(hero));
console.log(hero.heroYell(villain));
console.log(hero.healthPoints);
