Page({
  data: {
    teamName: '',
    teamSize: '',
    teamTypes: ['教学', '讨论', '作业'],
    selectedTeamType: '选择队伍类型',
    name: '',
    isSubmitted: false,
  },

  onTeamNameInput(e) {
    this.setData({ teamName: e.detail.value });
  },

  onTeamSizeInput(e) {
    this.setData({ teamSize: e.detail.value });
  },

  onTeamTypeChange(e) {
    this.setData({ selectedTeamType: this.data.teamTypes[e.detail.value] });
  },

  onNameInput(e) {
    this.setData({ name: e.detail.value });
  },

  onSubmit() {
    if (this.data.teamName && this.data.teamSize && this.data.selectedTeamType !== '选择队伍类型' && this.data.name) {
      this.setData({ isSubmitted: true });
    } else {
      wx.showToast({ title: '请填写所有字段', icon: 'none' });
    }
  },
  ongroup() {
    wx.navigateTo({
      url: '/pages/group/group'
    });
  }
});