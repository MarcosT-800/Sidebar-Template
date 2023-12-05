// @ts-nocheck
import { defineStore } from "pinia";

export const AppOptions = defineStore("AppOptions", {
  state: () => ({
    appMode: "",
    appThemeClass: "",
    appCoverClass: "",
    appBoxedLayout: false,
    appHeaderHide: false,
    appHeaderSearchToggled: false,
    appSidebarCollapsed: false,
    appSidebarMobileToggled: false,
    appSidebarMobileClosed: false,
    appSidebarHide: false,
    appContentFullHeight: false,
    appContentClass: "",
    appTopNav: false,
    appFooter: false,
    appFooterFixed: false,
    appThemePanelToggled: false,
    appSidebarMinified: false,
  }),
  actions: {
    toggleAppSidebarMinify() {
      if (!(this.appTopNav && this.appSidebarHide)) {
        this.appSidebarMinified = !this.appSidebarMinified;
      }
    },
    toggleAppSidebarMobileToggled() {
      if (this.appTopNav && this.appSidebarHide) {
        slideToggle(document.querySelector(".app-top-nav"));
        window.scrollTo(0, 0);
      } else {
        this.appSidebarMobileToggled = !this.appSidebarMobileToggled;
      }
    },
    appSidebarMobileToggledB() {
      this.appSidebarMobileToggled = !this.appSidebarMobileToggled;
    },
  },
});
