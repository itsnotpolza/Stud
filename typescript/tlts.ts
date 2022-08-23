// https://www.youtube.com/watch?v=vGVvJuazs84

type Primitives = 
    | number
    | boolean
    | string
    | undefined
    | null
    | symbol
    | bigint

type SomeLiterals = 
    | 20
    | true
    | "string"
    | 10000n

type DataStructures = 
    | { key: "string" } // objects
    | [1, 2, 3] // tuples
    | number[] // lists

type MixedType<X, Y> = // kinda like bit operations lol
    | (X & Y) // intersection
    | (X | Y) // union

// unknown is a superset of all types

// never is kind of like a 0
type WithNever<A> = A | never // A
type NeverType<A> = A & never // never 

// any is kind of an infinity but also a 0

type WithAny<A> = A | any // any
type AnyType<A> = A & any // any 

// Functions are called Generics

type Push<X, XS extends any[]> = [ ...XS, X]

// Conditions
// 'A extends B' checks if A is assignable to B

type If<A extends boolean, B, C> = A extends true ? B : C;

type t = If<true, number, string> // t number

// Infer can extract type from a condition

type GetProperty<A> = A extends { prop: infer Property } ? Property : any
type StringProperty = GetProperty<{ prop: string }> // string

//loops

type OrNull<T> = {
    [K in keyof T]: T[K] | null
}
type StringOrNull = OrNull<{ strOrNull: string, numOrNull: number }> 
                    // { strOrNull: string | null, numOrNull: number | null }

type Includes<X, XS> = XS extends [infer head, ...infer tail]
    ? head extends X ? true : Includes<tail, XS> 
    : false

type Name = 'Bob' | 'Alice'

type AnyNameObject = Name extends any ? { name: Name } : never
    // {name: 'Alice'} | {name: 'Bob'}


// So an example would be taking a union of type: { foo: 'a' } | { foo: 'b' }
// and converting it to: {a: { foo: 'a' }, b: { foo: 'b' }}

type IndexObj<
T extends Record<PropertyKey, any>,
TKey extends keyof T,
> = {
[K in T[TKey]]: Extract<T, Record<TKey, K>>
}

type check = IndexObj<{ a: '1' } | { a: '2' } | { a: '3' }, 'a'>