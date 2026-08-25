import {writeFile, readFile} from "fs/promises";
//await writeFile("stud.txt", "iamking \n rollno.26");
//console.log("File written");
const data =  await readFile("stud.txt", "utf-8");
console.log(`file contents :${data}`);