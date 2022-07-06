
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Cat {
    id: string;
    name: string;
    age?: Nullable<number>;
}

export abstract class IQuery {
    abstract cat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract cats(): Nullable<Cat>[] | Promise<Nullable<Cat>[]>;

    abstract dog(id: string): Nullable<Dog> | Promise<Nullable<Dog>>;

    abstract dogs(): Nullable<Dog>[] | Promise<Nullable<Dog>[]>;

    abstract pets(): Nullable<Nullable<Dog>[]> | Promise<Nullable<Nullable<Dog>[]>>;
}

export class Dog {
    id: string;
    name: string;
    age?: Nullable<number>;
}

type Nullable<T> = T | null;
