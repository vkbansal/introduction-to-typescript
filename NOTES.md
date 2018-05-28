# Notes

This is not about `Flow` vs `TypeScript`. It's about getting started with typescript.

## What is TypeScript?

*   An open-source language created by Microsoft.
*   Static type-checker and ES2015/16/17 transpiler similar to Babel.
*   First class support for types, classes and modules.
*   A superset of JavaScript that compiles to plain JavaScript.
*   Typescript = JS Today + Incoming ESNext Features + Type Safety
*   ESNext Features will be converted based on the 'target version' of JS.

## Why TypeScript?

*   Makes code easier to analyse: both for new developers & legacy code.
*   Reliable Refactoring: You might forget to pass a required parameter / wrong type of parameter.
*   Better IDE Support: Better Code hinting (subjective).
*   Can catch errors early: You might pass wrong casing of keys, wrong parameters, etc.
*   Incrementally move an existing JavaScript code base to TypeScript.

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

*   Functions can be written in two ways: function expression and function declaration.
*   All parameters are reuired by default.
*   Optional parameters are denoted using `?` and they must come only after required parameters.
*   Default-initialized parameters: user does not provide one, or if the user passes `undefined` in its place.
*   `null` is a value, even as per ES spec.
*   Default-initialized parameters that come after all required parameters are treated as optional, and just like optional parameters, can be omitted when calling their respective function.
*   Unlike plain optional parameters, default-initialized parameters don’t need to occur after required parameters. If a default-initialized parameter comes before a required parameter, users need to explicitly pass undefined to get the default initialized value.
*   Rest parameters are treated as a boundless number of optional parameters. When passing arguments for a rest parameter, you can use as many as you want; you can even pass none.
*   Rest parameters must an `Array` always

## Infered types

There are several places where type inference is used to provide type information when there is no explicit type annotation.

## Interfaces

*   One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”.

*   Interfaces with optional properties are written similar to other interfaces, with each optional property denoted by a `?` at the end of the property name in the declaration.

*   The advantage of optional properties is that you can describe these possibly available properties while still also preventing use of properties that are not part of the interface. For example, had we mistyped the name of the `color` property in `createSquare`, we would get an error message letting us know.
*   Interfaces are also capable of describing function types.

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

### Type Aliases

*   Type aliases create a new name for a type.
*   Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
*   Aliasing doesn’t actually create a new type - it creates a new name to refer to that type.
*   Aliasing a primitive is not terribly useful, though it can be used as a form of documentation.
*   Just like interfaces, type aliases can also be generic
*   We can also have a type alias refer to itself in a property
*   Type aliases cannot be extended or implemented from (nor can they extend/implement other types). Because an ideal property of software is being open to extension, you should always use an interface over a type alias if possible.

### Literal Types

*   literal types allow you to specify the exact value it must have.

### Index Types

*   With index types, you can get the compiler to check code that uses dynamic property names.

### Mapped Types

*   A common task is to take an existing type and make each of its properties optional or readonly.
*   This happens often enough in Javascript that TypeScript provides a way to create new types based on old types — mapped types. In a mapped type, the new type transforms each property in the old type in the same way.
*   The syntax resembles the syntax for index signatures with a `for .. in`
