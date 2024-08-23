// 在 utils 文件夹下创建一个 shuffle.js 文件，用于实现打乱数组的功能
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

module.exports = {
  shuffleArray,
};