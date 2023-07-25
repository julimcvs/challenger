<template>
  <v-card
      class="pa-5"
      min-height="auto"
      rounded="lg">
    <v-card-text>
      <div class="d-flex justify-center">
        <span class="text-h5 font-weight-bold">Challenger</span>
      </div>
      <div class="mt-5 intro">
        <div class="d-flex justify-start">
        <span>
          Transform your dreams into reality with our goal-tracking app. Whether you're aspiring to climb Mount Everest, launch a successful business, or simply embrace a healthier lifestyle, Challenger is your perfect companion on this empowering journey.
          <br>
          <br>
          Setting and achieving your goals has never been more fun and rewarding. Create a new goal with just a few taps, and watch as you embark on a path of progress and self-discovery. Our intuitive interface allows you to define milestones, track your achievements, and celebrate every step forward.
          <br>
          <br>
          But that's not all – Challenger is more than just a goal-tracking app. It's a community of like-minded individuals striving for greatness. Share your milestones, exchange tips, and cheer each other on as you conquer new heights together.
        </span>
        </div>
        <div class="my-5">
          <v-row>
            <v-col class="v-col-12 v-col-md-4 text-center">
              <div class="text-h6">
                <v-icon color="primary" icon="mdi-bullseye-arrow"/>
                <br>
                Personalized Goals
              </div>
              <div class="rounded pa-2 mt-2"
                   :class="themeStore.darkTheme ? 'item-box-dark' : 'item-box-light'">
                <span>Tailor your goals to your unique aspirations and watch them take shape.</span>
              </div>
            </v-col>
            <v-col class="v-col-12 v-col-md-4 text-center">
              <div class="text-h6">
                <v-icon color="primary" icon="mdi-chart-line"/>
                <br>
                Progress Tracker
              </div>
              <div class="rounded pa-2 mt-2"
                   :class="themeStore.darkTheme ? 'item-box-dark' : 'item-box-light'">
                <span>Stay motivated by visualizing your progress through interactive charts and statistics.</span>
              </div>
            </v-col>
            <v-col class="v-col-12 v-col-md-4 text-center">
              <div class="text-h6">
                <v-icon color="primary" icon="mdi-party-popper"/>
                <br>
                Celebrate Milestones
              </div>
              <div class="rounded pa-2 mt-2"
                   :class="themeStore.darkTheme ? 'item-box-dark' : 'item-box-light'">
                <span>Pat yourself on the back as you reach milestones and share your triumphs with friends.</span>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="primary"
          variant="outlined"
          @click="goalStore.add()">
        <v-icon class="mr-2" icon="mdi-rocket-launch"></v-icon>
        Get Started
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {useGoalStore} from "@/stores/GoalStore";
import {useThemeStore} from "@/stores/ThemeStore";

export default {
  name: "TheHome",
  data() {
    return {
      goalsDetails: '',
      goalStore: useGoalStore(),
      themeStore: useThemeStore(),
    }
  }
}
</script>

<style scoped>
.intro {
  font-size: 15px;
}

.item-box-dark {
  background-color: #4caf50;
}

.item-box-light {
  background-color: #00ccff;
  color: black;
}
</style>