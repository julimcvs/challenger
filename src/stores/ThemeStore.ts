import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
    state() {
        return {
            darkTheme: true,
        }
    },
    actions: {
        toggleDarkTheme() {
            this.darkTheme = !this.darkTheme;
        }
    }
})