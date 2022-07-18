class Target {
    public someMethod(): string {
        return `Some behaviour it is`;
    }
}

class Adaptee {
    public specificMethod(): string {
        return 'blow sorted blue bla ble';
    }
}

// adapter przyjmuje Adaptee, bierze wyniki jego metod
// i przerabia na Target, nadpisując jego metody
class Adapter extends Target {
    constructor(private adaptee: Adaptee) {
        super();
    }
    public someMethod(): string {
        const result = this.adaptee
            .specificMethod()
            .split(' ').sort()
        
        return `Some behaviour it is ${result.join()}`;
    }
}

function clientCode(target: Target) {
  return target.someMethod()
}

export function adapter() {
  const ad = new Adapter(new Adaptee)
  console.log(ad.someMethod());
}