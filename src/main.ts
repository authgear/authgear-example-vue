import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import authgear from "@authgear/web";

const app = createApp(App);

async function init() {
  try {
    // configure Authgear container instance
    await authgear.configure({
      endpoint: import.meta.env.VITE_AUTHGEAR_ENDPOINT,
      clientID: import.meta.env.VITE_AUTHGEAR_CLIENT_ID,
      sessionType: "refresh_token",
    });
  } finally {
    app.use(router);
    app.mount("#app");
  }
}

init().catch((e) => {
  // Error handling
  console.error(e);
});
