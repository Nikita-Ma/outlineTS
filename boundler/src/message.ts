{
    enum StatusCodes {
        NotFount = 404,
        ServerError = 500,
    }
}


{
    let a: number = 1;
    let b: bigint = 1n;
    let c: string = 'String';
    let d: symbol = Symbol();
    let boo: boolean = true;
//and null undefined object
}

{
    let o: object = []

    function foo(arr: string[]) {

    }

    foo(['2131'])
}


{
    class Bla {
        bar: string = '1'

        foo(): number {
            return 1
        }
    }

    function getBla(a: Bla['constructor']) {


    }

    getBla(Bla)
}

{
    let a: object = [];

    function f(a: string | number | string[]) {
        if (typeof a === 'number') {
            a.toFixed()
        }
    }
}

{
    let a: object = [];

    class Foo {
        foo: string = '12'
    }

    class Bar {
        bar: number = 111
    }

    function foo(a: Foo & Bar) {
        a.bar;
        a.foo;
    }

    foo({...new Foo(), ...new Bar()})
}

{
    function foo(a: 'true') {

    }

    foo('true')


    function insertAdjacentHTML(str: string, append: 'beforebegin' | 'afterbegin') {

    }

    insertAdjacentHTML('anyString', 'beforebegin')
}

{
    const a: unique symbol = Symbol('foo')
}


// Alias type
{
    type mode = `${'before' | 'after'}${'begin' | 'end'}`
    type elType = string

    function example(el: elType, html: mode) {
        // ...code
    }
}

{
    interface Options {
    cap?: boolean;
    q?: boolean;
    w?: string;
    }

    type OptionsType = {
        cap?: boolean,
        q?: boolean,
        w?: string,
    }

    function f1(a?: Options) {

    }
}

{
    interface Options {
        hendler?: (el: Element, ...args: unknown[]) => number
    }
}

{
    function widget(name: string, params?: {}) {
        if (arguments.length === 1) {
            return getW(name)
        }
        regW(name, params)
    }
}

{
    let a: {[key: string | symbol]: number} = {}
    a['dasdasd'] = 1

}

{
    interface Foo {
        a: number
    }

    interface Bar extends Foo {
        b: number
    }

    let a: Bar = {a: 1, b: 2}
}


{
    interface Foo {
        bla(): number;

        foo: string
    }


    interface FooConstructor {
        new(): Foo
    }

    class Bar implements Foo {
        foo = 'sdsdsd';

        bla() {
            return 2121
        }
    }
}

{
    class Foo {
        bar = 1

        bla() {
            return this.bar
        }
    }

    function fc(
    function (this: { a: number })
)
    {

    }
}

{
    const a: [string, number, boolean] = ['', 1, false]
}

{
    function id(value: string | boolean) : string;
    // generic
    function id<T>(value: T) : T;
    function id<T = number>(value: T) : T;
    function id<T extends Array<any>>(value: T) : T;
    function id(value: string | boolean) : boolean;
    function id(value: string | boolean) : boolean | string {
        return  value
    }

    id('3232')
}

{
    class Optional<T> {
        #value: T;

        constructor(value: T) {
            this.#value = value
        }

        getValue(): T {
            return this.#value
        }
    }

    let a: Optional<number> = new Optional(10)

    function foo(val: Optional<number>) {

    }
}


{
    type Head<A extends any[]> = {
        0: never
        1: A extends [] ? never : A extends [h: infer H, ...args: any[] ? H: unknow]
    }[A extends [] ? 0 : 1]
    let h: Head<[1, 2]>
}

{
    function toSet<T>(arr: unknown[]):T {
        return <T>(new Set(arr))
    }
}

{
    // Type annotations
    function addNumbers(a: number, b: number): number {
        return a + b;
    }

// Interfaces
    interface Person {
        name: string;
        age: number;
    }

// Classes
    class Employee implements Person {
        name: string;
        age: number;
        salary: number;

        constructor(name: string, age: number, salary: number) {
            this.name = name;
            this.age = age;
            this.salary = salary;
        }

        getInfo(): string {
            return `${this.name} is ${this.age} years old and earns ${this.salary} per month.`;
        }
    }

    const john = new Employee("John", 35, 5000);
    console.log(john.getInfo()); // "John is 35 years old and earns 5000 per month."

}


{
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        getInfo(): string {
            return `${this.name} is ${this.age} years old.`;
        }
    }

    class Employee extends Person {
        salary: number;

        constructor(name: string, age: number, salary: number) {
            super(name, age);
            this.salary = salary;
        }

        getInfo(): string {
            return `${super.getInfo()} They earn ${this.salary} per month.`;
        }
    }

}

{

    interface Props {
        name: string;
        age: number;
    }

    const MyComponent: React.FC<Props> = ({ name, age }) => {
        return (
            <div>
                <p>Name: {name}</p>
        <p>Age: {age}</p>
        </div>
    );
    };

    export default MyComponent;
}


{
    import React, { useState, useEffect } from 'react';

    interface Props {
        initialCount: number;
    }

    const Counter: React.FC<Props> = ({ initialCount }) => {
        const [count, setCount] = useState(initialCount);

        useEffect(() => {
            document.title = `Count: ${count}`;
        }, [count]);

        const handleIncrement = () => {
            setCount(count + 1);
        };

        const handleDecrement = () => {
            setCount(count - 1);
        };

        return (
            <div>
                <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            </div>
    );
    };

    export default Counter;

}