<script setup>
// Components
import AddTask from './AddTask.vue'

const props = defineProps(['DailyList'])

// Functions

function AddTaskToList(task) {
  // array.push(item1, item2, ..., itemX)
  // add.dailyTasks to [{}]
  props.DailyList.push(task)
}
</script>

<template>
  <div>
    <div id="Dailys" v-for="daily in props.DailyList">
      
      <div id="DailyListContainer" @click="() => {console.log('Checked')}">
        <!-- Ligne 13 devrait etre un component -->
        <div >{{ daily.dailyTask }}</div> <input type="checkbox" :checked="daily.completion">
      </div>
      
    </div>
    <AddTask :actionFunction="AddTaskToList"/>
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
#DailyListContainer{
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  border: 1px solid black;
  border-radius: 8px;
  
  padding: 4px;
  margin: 8px;
}
</style>
