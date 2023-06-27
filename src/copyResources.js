const fs = require('fs-extra');

const {
  DIR_FROM = '',
  DIR_DEST = '',
} = process.env;


const copyFolder = () => {
  console.log(`--------------COPY Folder---------------`);
  console.log(`
    From: ${DIR_FROM}
    Dest: ${DIR_DEST}
  `);

  fs.copySync(DIR_FROM, DIR_DEST);

  console.log('-----------------SUCCESS-----------------');
};

copyFolder();
// module.exports.copyFolder = copyFolder;