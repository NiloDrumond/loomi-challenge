# Why Component.tsx and index.tsx instead of just one or the other?

## Using index.tsx

### Pros

- Non-redundant imports such as `import {Button} from Button`.

### Cons

- Harder to identify which file is which.
  - At the IDE, even with the tabs showing in smaller letter with folder the file is in, this only results in the tabs being unnecessarily larger.
  - While doing fuzzy finding, you have to go looking for the path because almost all the files have the same name.

## Using Component.tsx

## Pros

- Cleaner tabs as there are no reason to show the folder
- More intuitive fuzzy finding.
- It makes sense. If you are editing a button component,nothing more appropriate than the file being named `Button`.

### Cons

- Redundant imports such as `import {Button} from Button/Button` .

## Using both index.tsx and Component.tsx

### Pros

- The component stays on the folder called `Component`, and the index of the folder called `index`. This also makes exporting types and utils by the index more natural, since now it's responsibility is to be the index of the folder, and not to be a component.
- More "modular" feeling of the folder, as you can import everything you need from that "module" (be it a component, a hook/provider or whatever) from the same file.
- All the pros of using `index.tsx`.
- All the pros of using `Component.tsx`.

### Cons

- The IDE will suggest two exports (`index.ts` and `Component.tsx`), which can be confusing.

## Conclusion

Using a combination of both keeps the pros and has (IMO) the lesser of the cons, so it is an easy choice.
