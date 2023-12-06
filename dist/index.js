"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// index.ts
var import_node_fs = __toESM(require("fs"));
var import_node_path = __toESM(require("path"));

// src/Utils.ts
var Utils = {
  isLetter(caracter) {
    return caracter.toLowerCase() !== caracter.toUpperCase();
  },
  isNumber(caracter) {
    if ([" ", "	", "\n", "\r"].includes(caracter))
      return false;
    return !isNaN(+caracter);
  },
  isEmptySpace(caracter) {
    const arrayEmpty = [" ", "	", "\n", "\r"];
    return arrayEmpty.includes(caracter);
  },
  isSimbol(caracter) {
    const arraySimbols = ["(", ")", "[", "]", "{", "}"];
    return arraySimbols.includes(caracter);
  },
  isOperator(caracter) {
    const arrayOperators = [">", "<", "=", "!", "+", "-", "*", "/"];
    return arrayOperators.includes(caracter);
  },
  isCommentStart(current, next, nextTwo) {
    return current == "/" && next == "*" && nextTwo == "*";
  },
  isCommentEnd(current, next, nextTwo) {
    return current == "*" && next == "*" && nextTwo == "/";
  },
  reseverdWords: () => [
    // Tipos basicos
    "booo",
    // bool
    "nuque",
    // double
    "sicle",
    // float
    "galeao",
    // int
    "perg",
    // string
    // Tipos especiais
    "mob",
    // obj
    "acro",
    // array
    // Promisse
    "Pacto",
    // await
    // Tratativa de erro
    "Expecto",
    // try
    "Patronum",
    // catch
    // Indentificador de  Tipo
    "reveal",
    // typeof
    // Condicionais
    "ce",
    // if - abreviação de (Conditional Enchantment)
    "elce",
    // else if
    "lastCase",
    // else
    // Repetições
    "loop",
    // for
    "turnstime",
    // while
    "stop",
    // break
    "proceed",
    // continue
    // Funções
    "spell",
    // function
    "expelliarmus",
    // return
    "AvadaKedavra",
    // end
    // Booleans
    "alive",
    // true
    "dead",
    // false
    // Tipos de variaveis
    "temporary",
    // var
    "eternal",
    // const
    "lumus",
    // print
    "truth"
    // input]
  ]
};
var Utils_default = Utils;

// src/Leitor.ts
var { isLetter, isNumber, isSimbol, isOperator, isEmptySpace, isCommentStart, isCommentEnd, reseverdWords } = Utils_default;
var state = 0;
var line = 1;
var column = 0;
var tokens = [];
function receiveToken(token, lines, column2) {
  if (token === "")
    return;
  const lineTable = `Token: "${token}", linha: ${lines}, coluna: ${column2}`;
  console.log(lineTable);
  tokens.push(lineTable);
}
function Leitor(textContent) {
  if (typeof textContent !== "string")
    return [];
  let word = "";
  let isComment = false;
  const allContent = textContent.split("");
  allContent.forEach((letter, i) => {
    const nextLetter = allContent[++i];
    const nextTwoLetter = allContent[i + 1];
    column++;
    if (letter === "\n") {
      line++;
      column = 0;
    }
    switch (state) {
      case 0:
        if (isLetter(letter)) {
          word += letter;
          state = 1;
        } else if (isNumber(letter)) {
          word += letter;
          state = 2;
        } else if (isEmptySpace(letter)) {
          state = 0;
        } else if (isOperator(letter) && nextLetter != "*") {
          word += letter;
          receiveToken(word, line, column);
          word = "";
        } else if (isSimbol(letter)) {
          receiveToken(letter, line, column);
        } else if (isCommentStart(letter, nextLetter, nextTwoLetter)) {
          state = 3;
        }
        break;
      case 1:
        if (isLetter(letter) || isNumber(letter)) {
          word += letter;
          state = 1;
        } else if (isEmptySpace(letter) || isOperator(letter)) {
          if (word !== "") {
            receiveToken(word, line, column);
          }
          word = "";
          state = 0;
        } else if (isSimbol(letter)) {
          if (word !== "") {
            receiveToken(word, line, column);
            word = "";
            state = 0;
          }
          receiveToken(letter, line, column);
        }
        break;
      case 2:
        if (isNumber(letter) || letter == ".") {
          state = 2;
          word += letter;
        } else if (isLetter(letter)) {
          state = 0;
          receiveToken(word, line, column);
          word = "";
        } else {
          if (word !== "") {
            receiveToken(word, line, column);
          }
          word = "";
          state = 0;
        }
        break;
      case 3:
        if (isCommentEnd(letter, nextLetter, nextTwoLetter)) {
          state = 0;
        }
        break;
    }
  });
  return tokens;
}

// index.ts
var filePath = import_node_path.default.join(__dirname, "../exemplo.hpl");
function main() {
  import_node_fs.default.readFile(filePath, { encoding: "utf-8" }, function(err, textContent) {
    if (!err) {
      Leitor(textContent);
    } else {
      console.log(`N\xE3o foi possivel abrir o arquivo: ${err}`);
    }
  });
}
main();
