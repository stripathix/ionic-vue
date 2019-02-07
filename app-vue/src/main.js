/*jslint es6 */
/*property
    $mount, add, component, config, ignoredElements, productionTip,
    render, router
*/

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as Sentry from "@sentry/browser";
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
new Vue({
    router,
    render: (h) => h(App)
}).$mount("#app");

Sentry.init({
    release: "WSVue-123",
    dsn: "https://f5f708eca78141d1b09aec3c5eade8f1@sentry.io/181356",
    transport: Sentry.Transports.FetchTransport,
    integrations: [new Sentry.Integrations.Vue({Vue})],
    environment: "DEV-SENTRY-TEST",
    beforeSend: function (exception) {
        console.log(exception);
        return exception;
    }
});
