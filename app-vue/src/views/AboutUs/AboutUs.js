export default {
  name: 'aboutus',
  methods: {
    triggerError: function () {
      throw new Error("This is error for testing sentry" + Date.now());
    }
  }
}
