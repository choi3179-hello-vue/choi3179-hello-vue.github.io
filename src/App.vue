<script setup>
import { ref } from 'vue'
const awesome = ref(true)

function toggle(v){
	awesome.value = !v
}

function isAwesome() {
	return awesome.value
}
</script>

<template>
<button @click="toggle(awesome)">toggle</button>

<h1 v-if="isAwesome()">Vue is Awesome!</h1>
<h1 v-else>Oh no!!</h1>

<h2 v-if="isAwesome()">TRUE</h2>
<h2 v-show="isAwesome()">TRUE</h2>
</template>

