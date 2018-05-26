# Notes

## What is TypeScript?

## Why TypeScript?

## Basic Types

### Boolean

*   Simple `true`/`false` value.

### Numbers

*   supports `decimal`, `hex`, `octal` & `binary`.

### String

*   Same as JavaScript. Can use double quotes (`"`) or single quotes (`'`).
*   Supports Temapates usings backtick/backquote (`\``).

### Array

*   Array types can be written in one of two ways.

### Tuple

*   Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.

### Enum

*   By default, enums begin numbering their members starting at `0`
*   You can change this by manually setting the value of one of its members.
*   Or, even manually set all the values in the enum
*   A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum
*   In a string `enum`, each member has to be constant-initialized with a string literal, or with another string enum member.
*   While string enums don’t have auto-incrementing behavior, string enums have the benefit that they “serialize” well. n other words, if you were debugging and had to read the runtime value of a numeric enum, the value is often opaque - it doesn’t convey any useful meaning on its own (though reverse mapping can often help), string enums allow you to give a meaningful and readable value when your code runs, independent of the name of the enum member itself.

### Any

*   We may need to describe the type of variables that we do not know when we are writing an application.
*   The `any` type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type-checking during compilation.
*   Use it sparsingly

### Void

*   `void` is a little like the opposite of `any`: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

*   Declaring variables of type `void` is not useful because you can only assign `undefined` or `null` to them:

### Null and Undefined

*   They’re not extremely useful on their own
*   By default `null` and `undefined` are subtypes of all other types. That means you can assign null and undefined to something like `number`.
*   However, when using the `--strictNullChecks` flag, `null` and `undefined` are only assignable to void and their respective types.

### Never

*   The `never` type represents the type of values that never occur. For instance, `never` is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns;
*   The `never` type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, `never` (except `never` itself). Even `any` isn’t assignable to `never`.

## Functions

## Infered types

## Interfaces

## Genereics

## Type Casting

## Advanced Types

### Intersection Types

*   An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.
*   We use the ampersand (`&`) to separate each type.
*   You will mostly see intersection types used for mixins, HOC, etc.
*   Not to be confused with mathematical definition of intersection.

### Union Types

*   A union type describes a value that can be one of several types.
*   We use the vertical bar (`|`) to separate each type.
*   Not to be confused with mathematical definition of union.
