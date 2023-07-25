import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import App from "@/App.vue";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        },
    },
    theme: {
        defaultTheme: "customDarkTheme",
        themes: {
            customDarkTheme: {
                dark: true,
                colors: {
                    background: "#2b2d30",
                    surface: "#121212",
                    primary: "#4caf50",
                    secondary: "#f77f00",
                    error: "#f44336",
                    info: "#2196F3",
                    success: "#4caf50",
                    warning: "#fb8c00",
                }
            },
            customLightTheme: {
                dark: false,
                colors: {
                    background: "#eee",
                    surface: "#25384b",
                    secondary: "#4caf50",
                    primary: "#00ccff",
                    error: "#f44336",
                },
            }
        },
    }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(Antd)
app.mount('#app')
