import { createSSRApp } from "vue";
import App from "./App.vue";

import VantTabbar from "@/components/tabbar/VantTabbar.vue";


export function createApp() {
  const app = createSSRApp(App);
  app.component('vant-tabbar', VantTabbar)
  return {
    app,
  };
}
