<template>
  <div id="app">
    <ion-app >
  <ion-split-pane>
    <ion-menu  type="reveal">
      <ion-header>
        <ion-toolbar>
          <ion-title>Demo Test</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-menu-toggle auto-hide="false" >
            <ion-item v-on:click="goToView('airport')">
              <ion-icon name="settings" slot="start" ></ion-icon>
              <ion-label>
                Airport
              </ion-label>
            </ion-item>
            <ion-item v-on:click="goToView('preferences')">
              <ion-icon name="settings" slot="start" ></ion-icon>
              <ion-label>
                Preferences
              </ion-label>
            </ion-item>
            <ion-item v-on:click="goToView('aboutus')">
              <!-- <router-link to="/"> -->
              <ion-icon name="information" slot="start" ></ion-icon>
              <!-- <router-link to="/about"> -->
                  <ion-label>
                    About
                  </ion-label>
              <!-- </router-link> -->
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet main>
    <router-view />
  </ion-router-outlet>
  </ion-split-pane>
</ion-app>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <ion-alert-controller></ion-alert-controller>
    <ion-action-sheet-controller></ion-action-sheet-controller>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    goToView (view) {
      console.log(view);
      switch (view) {
        case "aboutus":
            this.$router.push('/')
          break;
          case "airport":
            this.$router.push('/airport')
            break;
            case "preferences":
              this.$router.push('/preferences')
              break;
        default:

      }
    }
  }
}
</script>
<style>
/* Global imports will work in whole app */

</style>
