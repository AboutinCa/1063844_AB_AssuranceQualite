<script setup>
const props = defineProps(['WeeklyList'])

</script>

<template>
    <div id="Weeklys" v-for="weekly in props.WeeklyList">
        <div id="WeeklyListContainer" @click="() => {console.log('Checked')}">
            <div>{{ weekly.weeklyTask }}</div><input type="checkbox" :checked="weekly.completion">
        </div>
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
#WeeklyListContainer{
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  border: 1px solid black;
  border-radius: 8px;
  
  padding: 4px;
  margin: 8px;
}
</style>
