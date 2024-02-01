<script setup>
import { ref, onUpdated, onMounted, onBeforeUpdate } from 'vue'
const count = ref(0)
onMounted( () => {
        console.log("onMounted call : " + document.getElementById('count').textContent)
})
onBeforeUpdate( () => {
        console.log("onBeforeUpdate call : " + document.getElementById('count').textContent)
})
onUpdated( () => {
	console.log("onUpdated call : " + document.getElementById('count').textContent)
})
</script>

<template>
	<button id="count" @click="count++">{{ count }}</button>
</template>
