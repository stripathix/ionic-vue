<template>
  <div id="app">
    <ion-app >
  <ion-split-pane>
    <ion-menu  type="reveal">
      <ion-header>
        <ion-toolbar color="dark">
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
@import "assets/css/variable.ionic.css";



/* Dark scheme CSS changes */
@media (prefers-color-scheme: dark) {
  :root {

    --ion-border-color: var(--ion-color-dark-shade);
    --ion-background-color: var(--ion-color-dark);
    --ion-background-color-rgb: var(--ion-color-dark-rgb);
    --ion-text-color: var(--ion-color-light);
    --ion-text-color-rgb: var(--ion-color-light-rgb);

    --ion-color-step-50: #232323;
    --ion-color-step-100: #2e2e2e;
    --ion-color-step-150: #3a3a3a;
    --ion-color-step-200: #454545;
    --ion-color-step-250: #515151;
    --ion-color-step-300: #5d5d5d;
    --ion-color-step-350: #8b8b8b;
    --ion-color-step-400: #747474;
    --ion-color-step-450: #7f7f7f;
    --ion-color-step-500: #8b8b8b;
    --ion-color-step-550: #979797;
    --ion-color-step-600: #a2a2a2;
    --ion-color-step-650: #aeaeae;
    --ion-color-step-700: #b9b9b9;
    --ion-color-step-750: #c5c5c5;
    --ion-color-step-800: #d1d1d1;
    --ion-color-step-850: #dcdcdc;
    --ion-color-step-900: #e8e8e8;
    --ion-color-step-950: #f3f3f3;
  }
    .svg-container{
      background: #fff;
      color: #000;
    }
    .custom-divider{
      background-color: var(--ion-background-color);
    }
    .long-desc-workshop *{
      background-color: var(--ion-background-color) !important;
    }
    .action-sheet-group.sc-ion-action-sheet-md:first-child,
    .action-sheet-group.sc-ion-action-sheet-md:last-child,
    .action-sheet-button.sc-ion-action-sheet-md,
    .action-sheet-button.activated.sc-ion-action-sheet-md{
      background: var(--ion-background-color);
    }
}
</style>
