<script setup>
import { ref } from 'vue'
import busstop from "@/assets/busstop.json"

const busstops = ref(busstop['data'])
console.log(busstops)
</script>
	
<template>
	<h1> 서울시 최다 이용 버스정류장 </h1>
	<div v-for="(item,index) in busstops">
		<div v-if="item.정류장명.includes('신림')">
			<br>
			<h4>#{{ item.순위 }} : {{ item.정류장명 }}</h4>
			<li>승차 : {{ item.승차 }} / 하차 : {{ item.하차 }}</li>
			<li>총 이용인원 : {{ item['총 이용인원'] }}</li>
			<br><hr>
		</div>

	</div>
</template>
