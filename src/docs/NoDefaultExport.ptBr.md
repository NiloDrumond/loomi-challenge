# Por que banir default exports?

## Primeiro: o quê?

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


## Consistência de nomenclatura

O mesmo valor (classe, função, etc...) terá o mesmo nome em todo projeto, evitando situações como essa:
  
```ts
import Ex from "./example";
import example from "./example";
```

Que além de tornarem o código menos consistente, torna mais trabalhoso refatorar os nomes.


E no caso de conflito de nomes, basta usar o `as`:
```js
import { data as buttonData } from "./Button/data"
import { data as inputData } from "./Input/data"
```

## Auto Import melhor com a IDE

Ao usar um `default export` a IDE cosiderará o nome do arquivo e o nome do valor sendo exportado (se ele tiver um nome).

Ao usar um `named export` a IDE considerará o nome do valor. Mais simples, mais direto, menos confuso e em geral afunila melhor as sugestões.

## Facilidade para expandir exports

Caso você decida em algum momento exportar mais valores do mesmo arquivo, você terá que fazer imports híbridos, como:
```ts
import Component, { ComponentProps } from "./Component"
```
Ou transformar o `default export` em `named export`, tendo então que refatorar todas as importações daquele arquivo.

Ao usar `named exports`, basta adicionar a exportação sem afetar nenhuma parte do código, e tornando mais limpa a importação:
```ts
import { Component, ComponentProps } from "./Component"
```

Outra vantagem desse método é que a quebra de linha quando há muitas importações também fica mais limpa:

```ts 
import {
  A,
  B,
  C,
  D,
  E,
} from "./file"
```
Ao invés de:
```ts 
import A, {
  B,
  C,
  D,
  E,
} from "./file"
```

## Além disso...
Outra regra que gosto de manter, que é possível de seguir mesmo usando `default export`, é a de manter as exportações (com exceção das de type) sempre no final do arquivo. 

Ao invés de sair buscando por `ctrl + f` ou manualmente o que está ou não está sendo exportado, basta um `ctrl + end` para ir para o final do arquivo e ver todas as exportações concentradas no mesmo local.