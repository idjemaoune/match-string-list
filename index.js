const fs = require("fs");
const path = require("path");
const fileName = process.argv[2];
exit_code = 0

function getLinesNumberOf( input, word){
  var line_numbers=[];
  input.split("\n").forEach(function(line, index){
    if( line.indexOf(word)>=0 ) line_numbers.push(index + 1);
  });
  return line_numbers;
}
var matchWords = ["http", "https"]
const data = fs.readFileSync(path.resolve(__dirname, fileName)).toString('utf-8');

for (let word in matchWords) {
  matchs = getLinesNumberOf(data, matchWords[word])
  if (matchs.length > 0) {
    console.log(matchWords[word], "Matchs was found in lines: ", matchs)
    exit_code = 1
  }
}
process.exit(exit_code)
