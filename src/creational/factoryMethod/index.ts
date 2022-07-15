interface Bird {
    makeSound(): string;
}

class Chicken implements Bird {
    constructor(private name: string = 'Chicken') {}
    makeSound(): string {
        // throw new Error('Method not implemented.')
        return 'ko ko ko';
    }
}

class Swan implements Bird {
    constructor(private name: string = 'Swan') {}
    makeSound(): string {
        return 'squeek!';
    }
}

abstract class BirdCreator {
    // metoda fabryczna kreatora abstrakcyjnego
    public abstract birdFactoryMethod(): Bird;
}

class ChickenCreator extends BirdCreator {
    // implementacja kreatora kurczaków zwraca kurczaka jako obiekt interfejsu Bird
    public birdFactoryMethod(): Bird {
        return new Chicken();
    }
}

class SwanCreator extends BirdCreator {
    public birdFactoryMethod(): Bird {
        return new Swan();
    }
}

function clientCode(creator: BirdCreator) {
    // wynik działania makeSound zależy od tego, jaki creator został przesłany klientowi.
    return creator.birdFactoryMethod().makeSound();
}

export function factoryMethod() {
    console.log(`przesyłam kreatora Chicken`);
    console.log(clientCode(new ChickenCreator()));
    console.log(`przesyłam kreatora Swan`);
    console.log(clientCode(new SwanCreator()));
    
}
