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

}
