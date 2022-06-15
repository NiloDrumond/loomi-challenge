# Why ban default exports?

## First: what?

### Default exports
```ts
export default Button;
export default { A, B };
export default generator();
export default () => something();
```
### Named exports
```ts
export const Button = () => {};
export { A, B };
export { generated: generator() };
export { doSomething: () => something()};
```

## Naming consistency

The same value (class, function, etc...) will have the same name across all project, avoiding situations like this:
```ts
import Ex from "./example";
import example from "./example";
```
That not only makes the code less consistent, but also makes it harder to refactor names.

In case on conflict, all you have to do is use `as`:
```js
import { data as buttonData } from "./Button/data"
import { data as inputData } from "./Input/data"
```

## Better IDE auto imports

By using `default export` the IDE will consider the name of the file and the name of the value (if it has one).

By using `named export` the IDE will consider only the name of the value. Simples, more straightforward, less confusing, and usually funnels better the suggestions.

## Easier to expand imports
If you decide to export more values from the same file, you will have to use hybrid imports, such as:
```ts
import Component, { ComponentProps } from "./Component"
```
Or have to transform the `default export` into a `named export`, having to refactor all the imports of that file.

By using `named exports`, you can just export the new value without affecting the rest of the project, and making the import cleaner:

```ts
import { Component, ComponentProps } from "./Component"
```
Another advantage of this method is that the line break when there are too many imports also is cleaner:
```ts 
import {
  A,
  B,
  C,
  D,
  E,
} from "./file"
```
Instead of:
```ts 
import A, {
  B,
  C,
  D,
  E,
} from "./file"
```

## Furthermore...
Another rule I like to follow, that is also possible to follow even using `default export`, is to keep the exports (with the exception of types) always at the end of the file .

Instead of having to search with `ctrl + f` or manually what is being exported or not, just do `ctrl + end` to go to the end of the file where all the exports are concentrated in the same place.
