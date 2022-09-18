import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "uno.css";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/forms.css";
import "@unocss/reset/sanitize/typography.css";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
