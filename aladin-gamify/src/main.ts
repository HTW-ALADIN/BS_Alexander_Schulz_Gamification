import {createApp} from "vue";
import {createPinia} from "pinia";
import {SkillsConfiguration} from "@skilltree/skills-client-js";

import App from "./App.vue";
import router from "./router";

// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const projectId = "aladin";

SkillsConfiguration.configure({
    serviceUrl: import.meta.env.VITE_API_URL,
    projectId: projectId,
    authenticator: import.meta.env.VITE_AUTHENTICATION_URL + "/api/users/bill@email.org/" + projectId + "/token",
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(SkillsDirective)

app.mount("#app");
