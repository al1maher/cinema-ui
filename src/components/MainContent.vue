<template>
  <div>
    <!--Header-->
    <AppHeader />

    <div class="md:grid grid-cols-12 gap-5 justify-center items-center">
      <AppCard class="md:col-span-5" />

      <AppChart />
    </div>
  </div>

    <TableHeader />
    <TableCore />
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppCard from './AppCard.vue'
import AppChart from './AppChart.vue'
import TableCore from './TableCore.vue'
import TableHeader from './TableHeader.vue'
export default {
  name: 'UpperSection',
  components: {
    AppHeader,
    AppCard,
    AppChart,
    TableHeader,
    TableCore
  }
}
</script>

<style>
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.custom-checkbox span {
  margin-right: 8px;
}

.custom-checkbox input {
  display: none;
}

.custom-checkbox .checkbox-icon {
  width: 35px;
  height: 18px;
  position: relative;
}

.custom-checkbox .checkbox-icon rect {
  width: 34px;
  height: 18px;
  fill: #e0e0e0;
}

.custom-checkbox .checkbox-icon .check-circle {
  fill: #ffffff;
  transform: translate(1.75px, 1.9874px);
  transition: transform 0.3s ease-in-out;
}

.custom-checkbox input:checked + .checkbox-icon .check-circle {
  transform: translate(17.75px, 1.9874px);
}

.custom-checkbox input:checked + .checkbox-icon rect {
  fill: #8a74f9;
}
</style>
