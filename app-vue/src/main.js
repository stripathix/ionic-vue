/*jslint es6 */
/*property
    $mount, add, component, config, ignoredElements, productionTip,
    render, router
*/

import Vue from "vue";
import Ionic from "@ionic/vue";
import App from "./App.vue";
import router from "./router";
Vue.use(Ionic);
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
new Vue({
    router,
    render: (h) => h(App)
}).$mount("#app");
if (window.analytics) {
    window.analytics.startTrackerWithId("AnalyticsId");
} else {
    window.console.log("Google Analytics Unavailable");
}
