"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryMethod = void 0;
class Chicken {
    constructor(name = 'Chicken') {
        this.name = name;
    }
    makeSound() {
        // throw new Error('Method not implemented.')
        return 'ko ko ko';
    }
}
class Swan {
    constructor(name = 'Swan') {
        this.name = name;
    }
    makeSound() {
        return 'squeek!';
    }
}
class BirdCreator {
}
class ChickenCreator extends BirdCreator {
    // implementacja kreatora kurczaków zwraca kurczaka jako obiekt interfejsu Bird
    birdFactoryMethod() {
        return new Chicken();
    }
}
class SwanCreator extends BirdCreator {
    birdFactoryMethod() {
        return new Swan();
    }
}
function clientCode(creator) {
    // wynik działania makeSound zależy od tego, jaki creator został przesłany klientowi.
    return creator.birdFactoryMethod().makeSound();
}
function factoryMethod() {
    console.log(`przesyłam kreatora Chicken`);
    console.log(clientCode(new ChickenCreator()));
    console.log(`przesyłam kreatora Swan`);
    console.log(clientCode(new SwanCreator()));
}
exports.factoryMethod = factoryMethod;
