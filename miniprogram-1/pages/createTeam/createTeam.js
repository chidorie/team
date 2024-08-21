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

  onCreateTeam() {
    if (this.data.teamName && this.data.teamMemberCount && this.data.teamType) {
      // 从本地存储中获取所有队伍信息
      wx.getStorage({
        key: 'teamInfo',
        success: (res) => {
          // 根据用户输入的队伍名称进行筛选
          if (res.data.teamName === this.data.teamName) {
            // 队伍名称已存在，提示用户队伍名称重复
            wx.showToast({
              title: '队伍名称已存在',
              icon: 'none'
            });
          } else {
            // 队伍名称不存在，创建队伍并将队伍信息保存到本地存储
            wx.setStorage({
              key: 'teamInfo',
              data: {
                teamName: this.data.teamName,
                teamMemberCount: this.data.teamMemberCount,
                teamType: this.data.teamType
              },
              success: () => {
                wx.showToast({
                  title: '队伍创建成功',
                  icon: 'success'
                });
              },
              fail: () => {
                wx.showToast({
                  title: '队伍创建失败',
                  icon: 'none'
                });
              }
            });
          }
        },
        fail: () => {
          // 本地存储中没有找到队伍信息，创建队伍并将队伍信息保存到本地存储
          wx.setStorage({
            key: 'teamInfo',
            data: {
              teamName: this.data.teamName,
              teamMemberCount: this.data.teamMemberCount,
              teamType: this.data.teamType
            },
            success: () => {
              wx.showToast({
                title: '队伍创建成功',
                icon: 'success'
              });
            },
            fail: () => {
              wx.showToast({
                title: '队伍创建失败',
                icon: 'none'
              });
            }
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