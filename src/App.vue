<script lang="ts">
// @ts-nocheck
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { AppOptions } from "@/stores/app-opt";
import { mapState } from "pinia";
import { ProgressFinisher, useProgress } from "@marcoschulte/vue3-progress";
import AppSidebar from "@/components/app/Sidebar.vue";
import AppHeader from "@/components/app/Header.vue";
import AppTopNav from "@/components/app/TopNav.vue";
import AppFooter from "@/components/app/Footer.vue";
import AppThemePanel from "@/components/app/ThemePanel.vue";
import router from "./router";

export default defineComponent({
  name: "header",
  components: {
    AppSidebar,
    AppHeader,
    AppTopNav,
    AppFooter,
    AppThemePanel,
  },
  props: {},
  emits: [],
  computed: {
    ...mapState(AppOptions, [
      "appHeaderSearchToggled",
      "appSidebarMinified",
      "appSidebarCollapsed",
      "appSidebarMobileToggled",
      "appSidebarMobileClosed",
      "appContentFullHeight",
      "appSidebarHide",
      "appTopNav",
      "appHeaderHide",
      "appBoxedLayout",
      "appFooterFixed",
      "appFooter",
      "appContentClass",
    ]),
  },
  data: () => ({
    progresses: [] as ProgressFinisher[],
  }),
  methods: {},
  mounted() {
    router.beforeEach(async (to, from) => {
      this.progresses.push(useProgress().start());
      this.appSidebarMobileToggled = false;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      var targetElm = [].slice.call(
        document.querySelectorAll(".app-sidebar .menu-submenu")
      );
      targetElm.map(function (elm) {
        elm.style.display = "";
      });
    });
    router.afterEach(async (to, from) => {
      this.progresses.pop()?.finish();
    });

    document.querySelector("body").classList.add("app-init");
  },
});
</script>
<template>
  <div
    class="app"
    v-bind:class="{
      'app-header-menu-search-toggled': appHeaderSearchToggled,
      'app-sidebar-minified': appSidebarMinified,
      'app-sidebar-collapsed': appSidebarCollapsed,
      'app-sidebar-mobile-toggled': appSidebarMobileToggled,
      'app-sidebar-mobile-closed': appSidebarMobileClosed,
      'app-content-full-height': appContentFullHeight,
      'app-content-full-width': appSidebarHide,
      'app-with-top-nav': appTopNav,
      'app-without-sidebar': appSidebarHide,
      'app-without-header': appHeaderHide,
      'app-boxed-layout': appBoxedLayout,
      'app-footer-fixed': appFooterFixed,
    }"
  >
    <vue3-progress-bar />
    <app-header v-if="!appHeaderHide" />
    <app-top-nav v-if="appTopNav" />
    <app-sidebar v-if="!appSidebarHide" />
    <div class="app-content" v-bind:class="appContentClass">
      <router-view></router-view>
    </div>
    <app-footer v-if="appFooter" />
    <app-theme-panel />
  </div>
</template>
