<script setup>
import { ref } from 'vue'

// Components
import TitleBar from './components/TitleBar.vue'
import AddTask from './components/AddTask.vue'
import Daily from './components/TaskList.vue'
import Weekly from './components/Weekly.vue'

// Data 
import dailyTask from './data/dailyTask.json'
import weeklyTask from './data/weeklyTask.json'

// Varriables
const dailyTasks = ref(dailyTask)

// Functions

</script>

<template>
  <TitleBar/>
  <div class="ToDoList">
    <h3>Daily Task</h3>
    <!-- <TaskList :DailyList = dailyTasks>   </TaskList> -->
    
    <Daily :DailyList = "dailyTasks"></Daily>

    <h3>Weekly Task</h3>
    <Weekly :WeeklyList = weeklyTask></Weekly>
    <AddTask :value="1" :actionFunction="() => { console.log('btn clicked')}"/>

  </div>
</template>

<style scoped>
*{
    margin: none;
    padding: none;
    box-sizing: border-box; 
    text-decoration: none;
    font-family: 'Zodiak', serif;
}
.ToDoInput{
  width: 100%;
  height: 24px;

  display: flex;
  justify-content: space-between;

  border: 1px solid black;
  border-radius: 8px;

  padding: 4px;
  margin: 8px;
}

</style>
