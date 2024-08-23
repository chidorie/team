// 引入 shuffleArray 函数
const { shuffleArray } = require('../../utils/shuffle');

Page({
  data: {
    teamMembers: ['张志林', '黄禹涵', '朱杰', '吕昕恒', '游辉','张诗语'],
    groups: [], // 添加 groups 数组的初始化
  },
  onLoad: function (options) {
    // 获取传递过来的 teamMembers 参数，并将其解析为一个数组
    const newTeamMembers = JSON.parse(options.teamMembers);
      // 将传递过来的新元素与原有的 teamMembers 数组合并
      const combinedTeamMembers = [...this.data.teamMembers, ...newTeamMembers];
      this.setData({
        teamMembers: combinedTeamMembers,
    });
  },
  // 在页面对象中添加以下代码
onInputGroupCount: function (e) {
  const groupCount = e.detail.value;
  wx.setStorageSync('groupCount', groupCount);
},
  randomizeGroups: function () {
    // 获取分组数量
    const groupCount = parseInt(wx.getStorageSync('groupCount'));

    // 打乱团队成员数组
    const shuffledTeamMembers = shuffleArray([...this.data.teamMembers]);

    // 根据分组数量将打乱后的数组分割成若干个子数组
    const groups = [];
    const groupSize = Math.ceil(shuffledTeamMembers.length / groupCount);
    for (let i = 0; i< groupCount; i++) {
      groups.push(shuffledTeamMembers.slice(i * groupSize, (i + 1) * groupSize));
    }

    // 将分组结果传递给新页面
  wx.navigateTo({
    url: '/pages/result/result?groups=' + JSON.stringify(groups),
  });
  },
});