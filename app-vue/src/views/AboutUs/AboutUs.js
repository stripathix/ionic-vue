export default {
  name: 'aboutus',
  methods: {
    triggerError: function () {
      throw new Error("This is error for testing sentry" + Date.now());
    }
  },
  mounted() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NDY2YTkwNC01ZTQxLTQ2MzktYmQyZi02YTY0YjRhMTMzNGUiLCJpZCI6MTczOTQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzIxNzMyMzl9.93BT_28Av3mBeD6J--cH1eebHfeHMSyNfjh4E28r6gE';
    var viewer = new Cesium.Viewer('three-globe');
  }
}
