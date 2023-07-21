<template>
  <div>
    <v-card
        class="mx-auto pa-2"
        rounded="lg">
      <v-list rounded="lg"
      >
        <v-list-subheader color="secondary">
          GOALS
        </v-list-subheader>
        <v-list-item
            v-for="goal in goals"
            :link="true"
            rounded="xl"
            color="primary"
            :key="goal">
          List item {{ goal }}
        </v-list-item>
        <v-divider class="my-2 dialog"></v-divider>
        <v-list-item
            @click="addNewGoal"
            :link="true"
            rounded="xl"
            color="grey-lighten-4">
          <v-list-item-title
              class="d-flex justify-start align-content-center">
            <v-icon color="primary" icon="mdi-plus" class="pr-2"></v-icon>
            Add
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>

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
      dialogNewGoal: false
    }
  },
  methods: {
    addNewGoal() {
      this.$emit('add-goal')
    }
  }
}
</script>
<style scoped>
  .dialog {
    --el-dialog-bg-color: #121212 !important;
  }
</style>