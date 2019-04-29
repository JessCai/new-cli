module.exports = {
  getFilePath(path, keyWord) {
    const pot = path.indexOf(keyWord);
    if (pot >= 0) {
      return path.substring(pot + keyWord.length + 1, path.length - 5);
    }
    return null;
  }
};
