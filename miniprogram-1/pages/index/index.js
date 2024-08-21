Page({
  onCreateTeam() {
    wx.navigateTo({
      url: '/pages/createTeam/createTeam'
    });
  },

  onJoinTeam() {
    wx.navigateTo({
      url: '/pages/joinTeam/joinTeam'
    });
  }
});