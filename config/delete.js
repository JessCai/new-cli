const fs = require('fs');
const path = require('path');

const resolve = dir => path.join(__dirname, '..', dir);
const docs = resolve(process.argv.slice(2)[0]);
/**
 * 递归删除文件夹下所有文件后删除文件夹
 * @param {String} paths 删除路径
 */
function deleteFolderRecursive(paths) {
  if (fs.existsSync(paths)) {
    fs.readdirSync(paths).forEach((file) => {
      const curPath = paths + '/' + file;
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(paths);
  }
}

if (fs.existsSync(docs)) {
  const files = fs.readdirSync(docs);
  files.forEach((file) => {
    const curPath = docs + '/' + file;
    if (fs.statSync(curPath).isDirectory()) { // recurse
      deleteFolderRecursive(curPath);
      console.log('文件夹');
    } else { // delete file
      console.log('删除文件', file);
      fs.unlinkSync(curPath, (err) => {
        if (err) throw err;
      });
    }
  });
}

