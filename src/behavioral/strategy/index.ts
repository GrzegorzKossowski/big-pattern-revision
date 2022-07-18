// main interface of strategy

interface Strategy {
    name: string;
    doSth(a: number, b: number): number;
}

class StrategySum implements Strategy {
    name = 'Sum';
    public doSth(a: number, b: number): number {
        return a + b;
    }
}

class StrategyMulti implements Strategy {
    name = 'Multiply';
    public doSth(a: number, b: number): number {
        return a * b;
    }
}

class Context {
    constructor(private _strategy: Strategy) {}

    public setStrategy = (strategy: Strategy) => {
        this._strategy = strategy;
    };

    public doSth = (a: number, b: number) => {
        const result = this._strategy.doSth(a, b);
        console.log(`${result} of ${this._strategy.name}`);
    };

    get name() {
        return this._strategy.name;
    }
}

function clientCode() {
    const context = new Context(new StrategySum());
    context.doSth(2, 3);

    context.setStrategy(new StrategyMulti());
    context.doSth(2, 3);
}

export function strategy() {
  clientCode()
}