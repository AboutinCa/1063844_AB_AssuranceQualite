<script setup>
import { ref } from 'vue'
const props = defineProps(['actionFunction'])
const newTask = ref("")

function OnClick() {
    let obj = { dailyTask: newTask.value, "completion": false }
    props.actionFunction(obj)
}

</script>

<template>
    <div style="border: 2px yellow solid;">
        <div id="Preview"> 
            <div id="TextInput">
                {{ newTask }}
            </div>
            
            <div id="CheckBox">
                <input type="checkbox">
            </div> 
        </div>
            
        <div id="ButtonBox">
            <input id="InputBar" v-model="newTask" type="text" placeholder="Ajouter une tache">
            <button id="AddButton" @click="OnClick">{{ props.add }} Enter </button>
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
    font-size: medium;
}
#ButtonBox{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;

    border: 1px solid black;
    border-radius: 8px;

    padding: 4px;
    margin: 8px;

    font-size: small;
}

#InputBar{
    width: 100%;
    border: none;
}

#TextInput{
    width: 100%;

    display: flex;
    justify-content: flex-start;
}

#CheckBox{  
    display: flex;
    justify-content: flex-end;
}

#AddTask{
    width: 100%;
    height: auto;
    min-height: 32px;
    
    display: flex;

    border: 1px solid black;
    border-radius: 8px;

    padding: 4px;
    margin: 8px;

    font-size: small;
}

#AddButton{
    width: auto;
    height: 100%;
    
    display: flex;
    text-align: center;
    align-content: center;

    border: 2px solid black;
    background-color: rgb(0, 162, 255);
}

#AddButton:hover{
    transition: 0.5ms;
    transform: scale(1.05);
    color: white;
    border-color: white;
}
#AddButton:active{
    transition: 0.5ms;
    transform: scale(0.95);
    
}

</style>
