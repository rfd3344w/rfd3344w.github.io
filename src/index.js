const { copyFolder } = require("./utlis/fileUtils");
const { runCommand } = require("./utlis/commandUtlis");

const {
  DIR_FROM = '',
  DIR_DEST = '',
} = process.env;


// runCommand('git status')


copyFolder(DIR_FROM, DIR_DEST);
