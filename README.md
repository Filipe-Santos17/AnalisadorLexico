# Analisador Lexico
Trabalho de conclusão da disciplina de Compiladores (CCP154GP).

## Guia

- [Sobre](#sobre)
- [Documentation](#documentation)
- [Lista de palavras reservadas](#Lista_de_palavras_reservadas)
- [Autômatos](#autômatos)

## Sobre:
Projeto de conclusão do curso de compiladores, se trata de um analisador léxico da linguagem Hpl(Harry Potter Language), uma linguagem de programação que possui seus tokens / palavras reservadas baseadas no universo de Harry Potter.

[Saiba Mais](https://great-cotton-8c1.notion.site/Analisador-L-xico-b9a46962e14e48f4aeecb03519c80fdd)

## Documentation:

### Criar uma variavel;
```cpp
galeao base = 10; /** Sou um  inteiro**/
perg text = "Texto"
```

### Criar uma função:
Para criar uma função na linguagem hpl é necessário especificar o tipo do retorno seguido da palavra spell e o nome da função(recomenda-se o uso de camelCase), como no exemplo abaixo:

```cpp
nuque spell calculaArea1 (nuque base, nuque altura){
  nuque area = base * altura;
  
  expelliarmus area;
}
```

ps: a palavra expelliarmus significa o retorno da função. Além disso todos os parâmetros devem ter seus tipos definidos.

### Exibir uma mensagem na tela:

```cpp
lumus("Eu sou uma mensagem!")
```

### Entrada de dados:
```cpp
perg msg;

lumus("Informe uma mensagem: \n");
truth msg;

lumus(msg)
```

<br>

## :construction_worker: To update
```bash
npm run dev
```

## :rocket: To run 
```bash
node dist/index.js
```

## :page_facing_up: Lista de palavras reservadas
```txt
'booo' | 'nuque' | 'sicle' |  'galeao' | 'perg' | 'mob' | 'acro' | 'Pacto' | 
'Expecto' |  'Patronum' | 'reveal' | 'ce' | 'elce' | 'lastCase' | 'loop' | 
'turnstime' | 'stop' | 'proceed' | 'spell' | 'expelliarmus' | 'AvadaKedavra' | 
'alive' | 'dead' | 'temporary' | 'eternal' | 'lumus' | 'truth'
```

## :computer: Autômatos
Autômatos de tokens:
![](automatos/automato-tokens.png)

Autômatos de palavras reservadas:
![](automatos/automato-palavras-reservadas.png)

## Feito com :heart: com
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tsup](https://github.com/egoist/tsup)
- [NodeJs](https://nodejs.org/en)


[Filipe Santos on Linkedin](https://www.linkedin.com/in/filipemarquesdeveloper/)
