import fs from "node:fs"
import path from "node:path"

import Leitor from "./src/Leitor";

const filePath = path.join(__dirname, '../exemplo.hpl');

function main() {
  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, textContent) {
    if (!err) {
      Leitor(textContent);
    } else {
      console.log(`Não foi possivel abrir o arquivo: ${err}`);
    }
  });
}

main()