"use strict";
// main interface of strategy
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategy = void 0;
class StrategySum {
    constructor() {
        this.name = 'Sum';
    }
    doSth(a, b) {
        return a + b;
    }
}
class StrategyMulti {
    constructor() {
        this.name = 'Multiply';
    }
    doSth(a, b) {
        return a * b;
    }
}
class Context {
    constructor(_strategy) {
        this._strategy = _strategy;
        this.setStrategy = (strategy) => {
            this._strategy = strategy;
        };
        this.doSth = (a, b) => {
            const result = this._strategy.doSth(a, b);
            console.log(`${result} of ${this._strategy.name}`);
        };
    }
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
function strategy() {
    clientCode();
}
exports.strategy = strategy;
