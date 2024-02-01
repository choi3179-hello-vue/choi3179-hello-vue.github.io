<script setup>
import { ref } from 'vue'

let id = 0
const newTodo = ref('')
const todos = ref([
	{id: id++, issue: 'Backlog'},
	{id: id++, issue: 'Todo'},
	{id: id++, issue: 'Going Hawaii'},
])

function addTodo() {
	console.log(newTodo)
	todos.value.push({id:id++, issue: newTodo})
}

function removeTodo(todo){
	console.log(todo)
	todos.value = todos.value.filter(x => x.id != todo.id)
	console.log(todos)
}
</script>


<template>
	<form @submit.prevent="addTodo">
		<input v-model="newTodo">
		<button>할 일 추가</button>
	</form>

	<ul>
		<li v-for="todo in todos">
			{{ todo.issue }} - <button @click="removeTodo(todo)">Done</button>
		</li>
	</ul>
</template>
