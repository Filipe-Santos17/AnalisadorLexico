const Utils = {
  isLetter(caracter: string): boolean {
    return caracter.toLowerCase() !== caracter.toUpperCase();
  },

  isNumber(caracter: string): boolean {
    if ([' ', '\t', '\n', '\r'].includes(caracter)) return false;
    return !isNaN(+caracter);
  },

  isEmptySpace(caracter: string): boolean {
    const arrayEmpty = [' ', '\t', '\n', '\r']
    return arrayEmpty.includes(caracter);
  },

  isSimbol(caracter: string): boolean {
    const arraySimbols = ['(', ')', '[', ']', '{', '}']
    return arraySimbols.includes(caracter);
  },

  isOperator(caracter: string): boolean {
    const arrayOperators = ['>', '<', '=', '!', '+', '-', '*', '/']
    return arrayOperators.includes(caracter);
  },

  isCommentStart(current: string, next: string): boolean {
    return current == '/' && next == '*';
  },

  isCommentEnd(current: string, next: string): boolean {
    return current == '*' && next == '/';
  },

  reseverdWords: () => [ // Tipos basicos
    'booo',   // bool
    'nuque',  // double
    'sicle',  // float
    'galeao', // int
    'perg',   // string
    // Tipos especiais
    'mob',  // obj
    'acro', // array
    // Promisse
    'Pacto', // await
    // Tratativa de erro
    'Expecto',  // try
    'Patronum', // catch
    // Indentificador de  Tipo
    'reveal', // typeof
    // Condicionais
    'ce',       // if - abreviação de (Conditional Enchantment)
    'elce',     // else if
    'lastCase', // else
    // Repetições
    'loop',      // for
    'turnstime', // while
    'stop',      // break
    'proceed',   // continue
    // Funções
    'spell',        // function
    'expelliarmus', // return
    'AvadaKedavra', // end
    // Booleans
    'alive', // true
    'dead',  // false
    // Tipos de variaveis
    'temporary', // var
    'eternal',   // const
    'lumus', // print
    'truth', // input]
  ],
}

export default Utils;