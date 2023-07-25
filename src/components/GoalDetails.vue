<template>
  <div>

  </div>
</template>

<script>
import {useGoalStore} from "@/stores/GoalStore";

export default {
  name: "GoalDetails",
  data() {
    return {
      goalStore: useGoalStore()
    }
  }
}
</script>