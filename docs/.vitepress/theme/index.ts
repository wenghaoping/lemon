// import { Theme } from 'vitepress';
import { defineTheme } from "@vitesite/theme-normal/theme";

import CoClassApi from "../components/class-api.vue";

import "../../../less/index.less";
import "../../../less/themes/default.css";

const theme = defineTheme({
    enhanceApp({ app }) {
        app.component("co-class-api", CoClassApi);
    },
});

export default theme;
