"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapter = void 0;
class Target {
    someMethod() {
        return `Some behaviour it is`;
    }
}
class Adaptee {
    specificMethod() {
        return 'blow sorted blue bla ble';
    }
}
// adapter przyjmuje Adaptee, bierze wyniki jego metod
// i przerabia na Target, nadpisując jego metody
class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }
    someMethod() {
        const result = this.adaptee
            .specificMethod()
            .split(' ').sort();
        return `Some behaviour it is ${result.join()}`;
    }
}
function clientCode(target) {
    return target.someMethod();
}
function adapter() {
    const ad = new Adapter(new Adaptee);
    console.log(ad.someMethod());
}
exports.adapter = adapter;
