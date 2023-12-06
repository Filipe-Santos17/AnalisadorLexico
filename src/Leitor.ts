import Utils from "./Utils";

const { isLetter, isNumber, isSimbol, isOperator, isEmptySpace, isCommentStart, isCommentEnd, reseverdWords } = Utils

let state = 0, line = 1, column = 0; // pos

const tokens: string[] = []

function receiveToken(token: string, lines: number, column: number) {
  if (token === "") return;

  const lineTable = `Token: "${token}", linha: ${lines}, coluna: ${column}`;

  console.log(lineTable)

  tokens.push(lineTable)
}

export default function Leitor(textContent: string): string[] {
  if (typeof textContent !== 'string') return [];

  let word = ""
  let isComment = false

  const allContent = textContent.split('')

  allContent.forEach((letter, i) => {
    const nextLetter = allContent[++i]
    const nextTwoLetter = allContent[i+1]

    column++

    if (letter === '\n') {
      line++;
      column = 0;
    }

    switch (state) {
      case 0:
        if (isLetter(letter)) {
          word += letter;
          state = 1;
        }
        else if (isNumber(letter)) {
          word += letter;
          state = 2;
        }
        else if (isEmptySpace(letter)) {
          state = 0;
        }
        else if (isOperator(letter) && nextLetter != '*') {
          word += letter;

          receiveToken(word, line, column);
          word = "";
        }
        else if (isSimbol(letter)) {
          receiveToken(letter, line, column);
        }
        else if (isCommentStart(letter, nextLetter, nextTwoLetter)) {
          state = 3;
        }
        break;
      case 1:
        if (isLetter(letter) || isNumber(letter)) {
          word += letter;
          state = 1;
        }
        else if (isEmptySpace(letter) || isOperator(letter)) {
          if (word !== "") {
            receiveToken(word, line, column);
          }
          word = "";
          state = 0;
        }
        else if (isSimbol(letter)) {
          if (word !== "") {
            receiveToken(word, line, column);
            word = "";
            state = 0;
          }

          receiveToken(letter, line, column);
        }
        break;
      case 2:
        if (isNumber(letter) || letter == '.') {
          state = 2;
          word += letter;
        }
        else if (isLetter(letter)) {
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
  })

  return tokens
}