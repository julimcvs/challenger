import {defineStore} from "pinia";

export const useGoalStore = defineStore('goalStore', {
    state() {
        return {
            addGoal: false,
            showDetails: false
        }
    },
    actions: {
        add() {
            this.addGoal = true;
        },
        cancel() {
            this.addGoal = false
        },
        detail() {
            this.showDetails = true
        }
    },
    getters: {}
})