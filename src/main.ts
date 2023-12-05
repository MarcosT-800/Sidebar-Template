import { createApp } from "vue";
import { createPinia } from "pinia";
import { Vue3ProgressPlugin } from "@marcoschulte/vue3-progress";
import App from "./App.vue";
import router from "@/router";

import "~/@mdi/font/scss/materialdesignicons.scss";
import "@/scss/styles.scss";

const pinia = createPinia();

createApp(App).use(router).use(Vue3ProgressPlugin).use(pinia).mount("#app");
