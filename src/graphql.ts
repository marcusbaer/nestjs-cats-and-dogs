
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Pet {
    id: string;
    name: string;
    age?: Nullable<number>;
}

export class Cat implements Pet {
    __typename?: 'Cat';
    id: string;
    name: string;
    age?: Nullable<number>;
    mice?: Nullable<number>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract cat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract cats(): Nullable<Cat>[] | Promise<Nullable<Cat>[]>;

    abstract dog(id: string): Nullable<Dog> | Promise<Nullable<Dog>>;

    abstract dogs(): Nullable<Dog>[] | Promise<Nullable<Dog>[]>;

    abstract pets(): Nullable<Pet>[] | Promise<Nullable<Pet>[]>;
}

export class Dog implements Pet {
    __typename?: 'Dog';
    id: string;
    name: string;
    age?: Nullable<number>;
    bones?: Nullable<number>;
}

type Nullable<T> = T | null;
