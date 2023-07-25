<template>
  <div>
    <v-card
        class="mx-auto pa-2"
        rounded="lg">
      <v-list rounded="lg">
        <v-list-subheader color="secondary">
          GOALS
        </v-list-subheader>
        <v-list-item
            v-for="goal in goals"
            :key="goal"
            :link="true"
            color="primary"
            rounded="xl">
          List item {{ goal }}
        </v-list-item>
        <v-divider class="my-2 dialog"></v-divider>
        <v-list-item
            :link="true"
            color="grey-lighten-4"
            rounded="xl"
            @click="goalStore.add()">
          <v-list-item-title
              class="d-flex justify-start align-content-center">
            <v-icon class="pr-2" color="primary" icon="mdi-plus"></v-icon>
            Add
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import {useGoalStore} from "@/stores/GoalStore";

export default {
  name: 'TheGoals',
  components: {},
  data() {
    return {
      goals: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
      dialogNewGoal: false,
      goalStore: useGoalStore()
    }
  },
  methods: {}
}
</script>

<style scoped>
.dialog {
  --el-dialog-bg-color: #121212 !important;
}
</style>