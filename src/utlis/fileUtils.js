const fs = require('fs-extra');



module.exports.copyFolder = (srcPath, destPath) => {
  console.log(`--------------COPY Folder---------------`);
  console.log(`
    From: ${srcPath}
    Dest: ${destPath}
  `);

  fs.copySync(srcPath, destPath);

  console.log('-----------------SUCCESS-----------------');
};

// copyFolder(DIR_FROM, DIR_DEST);
// module.exports.copyFolder = copyFolder;