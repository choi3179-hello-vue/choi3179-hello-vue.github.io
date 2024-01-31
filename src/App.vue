<script setup>
import { ref } from 'vue'

const parentMsg = ref('Parent')
const items = ref([{msg: 'Foo'}, {msg: 'Bar'}])
</script>

<template>
<li v-for="(item, index) in items">
	{{ parentMsg }} - {{ index }} - {{item.msg}}
</li>
</template>
