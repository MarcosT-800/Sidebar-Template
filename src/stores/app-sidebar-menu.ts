// @ts-nocheck
import { defineStore } from "pinia";

export const SidebarMenu = defineStore("SidebarMenu", {
  state: () => ({
    menu: [
      {
        text: "Navigation",
        is_header: true,
      },
      {
        url: "/",
        icon: "mdi mdi-home",
        text: "Home",
      },
      {
        url: "/ae",
        icon: "mdi mdi-home",
        text: "Home",
      },
      {
        url: "/ab",
        icon: "mdi mdi-home",
        text: "Home",
      },
      {
        url: "/aa",
        icon: "mdi mdi-home",
        text: "Home",
      },
      {
        url: "/layout",
        icon: "mdi mdi-circle",
        text: "Layout",
        children: [
          { url: "/layout/starter-page", text: "Starter Page" },
          { url: "/layout/fixed-footer", text: "Fixed Footer" },
          { url: "/layout/full-height", text: "Full Height" },
          { url: "/layout/full-width", text: "Full Width" },
          { url: "/layout/boxed-layout", text: "Boxed Layout" },
          { url: "/layout/minified-sidebar", text: "Minified Sidebar" },
          { url: "/layout/top-nav", text: "Top Nav" },
          { url: "/layout/mixed-nav", text: "Mixed Nav" },
          {
            url: "/layout/mixed-nav-boxed-layout",
            text: "Mixed Nav Boxed Layout",
          },
        ],
      },
    ],
  }),
  actions: {},
});
