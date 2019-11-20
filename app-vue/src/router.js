/*jslint es6 */
import Vue from "vue";
import Router from "vue-router";
import AboutUs from "./views/AboutUs/AboutUs.vue";

Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        name: "aboutus",
        component: AboutUs
    }]
});
