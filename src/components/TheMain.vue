<template>
  <a-config-provider
      :theme="{
      algorithm: algorithm,
      token: {
        colorPrimary: primaryColor,
      },
    }"
  >
  </a-config-provider>
  <v-app id="inspire">
    <v-app-bar :flat="true">
      <v-container class="fill-height d-flex align-content-center">
        <v-avatar
            class="me-10 ms-4"
            color="grey-darken-1"
            size="32">
        </v-avatar>
        <v-btn
            v-for="link in links"
            :key="link"
            variant="text">
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <div>
          <v-btn
              :icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
              @click="toggleTheme">
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col class="v-col-12 v-col-md-3">
            <v-row>
              <v-col cols="12">
                <TheGoals></TheGoals>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="v-col-12 v-col-md">
            <div v-if="goalStore.addGoal">
              <NewGoal></NewGoal>
            </div>
            <div v-else-if="goalStore.showDetails">
              <GoalDetails></GoalDetails>
            </div>
            <div v-else>
              <TheHome></TheHome>
            </div>
          </v-col>
        </v-row>
        <v-row>

        </v-row>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import {useTheme} from "vuetify";
import TheGoals from "@/components/TheGoals.vue";
import GoalDetails from "@/components/GoalDetails.vue";
import NewGoal from "@/components/NewGoal.vue";
import {theme} from "ant-design-vue";
import {useGoalStore} from '@/stores/GoalStore'
import {useThemeStore} from '@/stores/ThemeStore'
import TheHome from "@/components/TheHome.vue";

export default {
  name: 'TheMain',
  components: {TheHome, NewGoal, GoalDetails, TheGoals},
  computed: {
    theme() {
      return theme
    }
  },
  data() {
    return {
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
      vuetifyTheme: useTheme(),
      primaryColor: '#4caf50',
      algorithm: theme.darkAlgorithm,
      goalStore: useGoalStore(),
      themeStore: useThemeStore(),
    }
  },
  methods: {
    toggleTheme() {
      this.vuetifyTheme.global.name = this.vuetifyTheme.global.current.dark ? 'customLightTheme' : 'customDarkTheme'
      this.themeStore.toggleDarkTheme();
      this.algorithm = this.themeStore.darkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm;
      this.primaryColor = this.themeStore.darkTheme ? '#4caf50' : '#00ccff';
    }
  }
}
</script>