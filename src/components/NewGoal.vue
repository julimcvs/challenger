<template>
  <v-card
      class="pa-5"
      min-height="auto"
      rounded="lg">
    <v-card-title>
      <h1 class="text-h5">
        New Goal
      </h1>
    </v-card-title>
    <v-card-text>
      <v-row justify="center">
        <v-col
            cols="12"
            md="6">
          <v-text-field
              label="Name"
              required
              variant="outlined"></v-text-field>
        </v-col>
        <v-col
            cols="12"
            md="6">
          <v-text-field
              hint="Number of days"
              label="Number of days"
              persistent-hint
              single-line
              type="number"
              variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="v-col-12 v-col-md-6">
          <v-row justify="center">
            <v-col
                cols="12">
              <div class="d-flex align-center">
                <v-select
                    v-model="selectedInterval"
                    :items="hasRange ? ranges : intervals"
                    color="primary"
                    hint="Interval (ranged or specific)"
                    item-title="name"
                    item-value="value"
                    persistent-hint
                    variant="outlined"
                    @update:model-value="selectInterval">
                </v-select>
                <v-switch
                    v-model="hasRange"
                    class="ml-5"
                    color="primary"
                    label="Range"
                    @click="toggleRange">
                </v-switch>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="v-col-12 v-col-md-6">
          <div
              v-if="hasRange">
            <a-range-picker
                v-model:value="selectedDate"
                :picker="selectedInterval"
                size="large"/>
          </div>
          <div v-else>
            <a-date-picker
                v-model="selectedDate"
                :picker="selectedInterval"
                size="large"
            />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="primary"
          variant="flat">
        Save
      </v-btn>
      <v-btn
          color="primary"
          variant="outlined"
          @click="goalStore.cancel">
        Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {useGoalStore} from "@/stores/GoalStore";

export default {
  name: "NewGoal",

  data() {
    return {
      selectedDate: '',
      range: {start: new Date(), end: new Date()},
      hasRange: true,
      selectedInterval: {name: 'Days', value: ''},
      ranges: [
        {
          name: 'Days',
          value: ''
        },
        {
          name: 'Week',
          value: 'week'
        },
        {
          name: 'Months',
          value: 'month'
        },
        {
          name: 'Year',
          value: 'year'
        }
      ],
      intervals: [
        {
          name: 'Week',
          value: 'week'
        },
        {
          name: 'Month',
          value: 'month'
        },
        {
          name: 'Year',
          value: 'year'
        }
      ],
      goalStore: useGoalStore()
    }
  },
  methods: {
    toggleRange() {
      this.selectedDate = ''
      this.hasRange = !this.hasRange
      this.selectedInterval = this.hasRange ? '' : 'week'
    },
    selectInterval() {
      this.selectedDate = ''
    },
  }
}
</script>

<style scoped>
.ant-picker-large {
  padding: 15px 11px 15px;
  width: 100%;
}

.ant-picker {
  color: rgb(255, 255, 255);
  border: 1px solid #696969;
}
</style>