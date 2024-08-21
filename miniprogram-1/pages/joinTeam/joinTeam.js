Page({
  data: {
    teamName: '',
    teamMemberCount: '',
    teamType: ''
  },

  onTeamNameInput(e) {
    this.setData({
      teamName: e.detail.value
    });
  },

  onTeamMemberCountInput(e) {
    this.setData({
      teamMemberCount: e.detail.value
    });
  },

  onTeamTypeInput(e) {
    this.setData({
      teamType: e.detail.value
    });
  },

  onJoinTeam() {
    if (this.data.teamName && this.data.teamMemberCount && this.data.teamType) {
      // 从本地存储中获取所有队伍信息
      wx.getStorage({
        key: 'teamInfo',
        success: (res) => {
          // 根据用户输入的队伍名称、人数和类型进行筛选
          if (res.data.teamName === this.data.teamName &&
              res.data.teamMemberCount === this.data.teamMemberCount &&
              res.data.teamType === this.data.teamType) {
            // 找到符合条件的队伍，可以执行加入队伍的操作
            wx.showToast({
              title: '加入队伍成功',
              icon: 'success'
            });
          } else {
            // 没有找到符合条件的队伍，提示用户队伍不存在
            wx.showToast({
              title: '队伍不存在',
              icon: 'none'
            });
          }
        },
        fail: () => {
          // 本地存储中没有找到队伍信息，提示用户没有创建队伍
          wx.showToast({
            title: '没有创建队伍',
            icon: 'none'
          });
        }
      });
    } else {
      wx.showToast({
        title: '请填写完整队伍信息',
        icon: 'none'
      });
    }
  }
});