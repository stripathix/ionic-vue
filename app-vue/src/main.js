/*jslint es6 */
/*property
    $mount, add, component, config, ignoredElements, productionTip,
    render, router
*/

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPlane, faPlaneDeparture, faRoute, faHashtag, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
library.add(faPlane, faPlaneDeparture, faRoute, faHashtag, faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
new Vue({
    router,
    render: (h) => h(App)
}).$mount("#app");
