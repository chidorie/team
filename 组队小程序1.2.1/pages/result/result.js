Page({
  data: {
    groups: '',
  },
  onLoad: function (options) {
    // 获取传递过来的分组结果，并将其解析为一个数组
    const groups = JSON.parse(options.groups);
    // 将数组转换为字符串
    const groupsString = groups.map((group, index) => `组${index + 1}：${group.join(' ')}`).join('\n');
    this.setData({
      groups: groupsString,
    });
  },
});