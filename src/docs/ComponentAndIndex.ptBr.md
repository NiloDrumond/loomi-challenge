# Por que Component.tsx e index.tsx ao invés de só um ou outro?

## Usando index.tsx

### Vantagens

- Imports não-redudantes como `import {Button} from Button`.

### Desvantagens

- Fica muito mais difícil identificar que arquivo é qual. 
  - Na IDE, mesmo com as abas mostrando em letras menores qual é a pasta em que aquele arquivo está, ainda é longe do ideal e ainda por cima torna as abas desnecessariamente maiores.
  - Em mecanismos de fuzzy finding você tem que sair olhando para o path pois quase todos os arquivos tem o mesmo nome.


--- 

## Usando Component.tsx

## Vantagens

- Abas mais simples e diretas pois não há necessidade de explicitar a pasta.
- Buscas de fuzzy finding mais intuitivas.
- Faz sentido. Se você está editando um componente de button, nada mais apropriado do que o arquivo se chamar `Button`.

### Desvantagens

- Imports redundantes como `import {Button} from Button/Button`. 

--- 

## Usando ambos index.tsx e Component.tsx

### Vantagens

- O componente fica no arquivo chamado `Component`, e o índice da pasta chamado `index`. Isso inclusive torna mais natural exportar tipagens e utilitários pelo mesmo arquivo index, pois agora a responsabilidade dele é ser o índice da pasta, e não ser um componente.
- Sentimento mais "modular" da pasta, pois agora você pode importar tudo que precisar daquele "módulo" (seja um component, seja um hook/provider ou o que for) do mesmo arquivo.
- Todas as vantagens de usar `index.tsx`.
- Todas as vantagens de usar `Component.tsx`.

### Desvantagens

- A IDE vai sugerir as duas exportação (`index.ts` e `Component.tsx`), o que pode ser confuso.
--- 
## Conclusão

Usar a combinação mantém as vantagens e tem (na minha opinião) a menor das desvantagens, então é uma escolha simples.
