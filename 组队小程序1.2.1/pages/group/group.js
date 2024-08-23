Page({
  data: {
    groupName: '',
    groupMembers: '',
    isSubmitted: false,
  },

  onGroupNameInput(e) {
    this.setData({ groupName: e.detail.value });
  },

  onGroupMembersInput(e) {
    this.setData({ groupMembers: e.detail.value });
  },

  onSubmit() {
    if (this.data.groupName && this.data.groupMembers) {
      this.setData({ isSubmitted: true });
    } else {
      wx.showToast({ title: '请填写所有字段', icon: 'none' });
    }
  },
});