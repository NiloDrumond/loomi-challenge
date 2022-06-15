import { NestedSelectValue } from './NestedSelect.types';

function getLeaves(value: NestedSelectValue): string[] {
  const values = Object.values(value);
  const arr: string[][] = values.filter((i): i is string[] => {
    return !!i;
  });
  return arr.reduce((v, acc) => [...acc, ...v], []);
}

export { getLeaves };
