/*jslint es6 */
import Vue from "vue";
import Router from "vue-router";
import AboutUs from "./views/AboutUs/AboutUs.vue";
import Airport from "./views/Airport/Airport.vue";
import Preferences from "./views/Preferences/Preferences.vue";


Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        name: "aboutus",
        component: AboutUs
    }, {
        path: "/airport",
        name: "airport",
        component: Airport
    }, {
        path: "/preferences",
        name: "preferences",
        component: Preferences
    }]
});
