<template>
	<nav class="px-[3rem] py-[5rem]">
		<div class="pb-[2rem] border-b-[1px] border-light-darkText dark:border-light-text">
			<h1 class="font-w700 text-light-darkText text-[2.5rem] dark:text-dark-whiteText">Social Media Dashboard</h1>
			<p class="font-w700 text-light-text dark:text-dark-text">Total Followers: 23,004</p>
		</div>
		<div class="mt-[2.3rem] flex justify-between items-center">
			<p class="text-light-text font-w700 dark:text-dark-text">Dark Mode</p>
			<button
				type="button"
				@click="isLight = !isLight"
				class="py-[1.5rem] px-[3rem] rounded-badge relative before:absolute before:w-[2.2rem] before:h-[2.2rem] before:rounded-full before:translate-y-[-50%] before:top-1/2 before:translate-x-[-50%] before:transition-all before:duration-300"
				:class="[
					isLight
						? 'before:left-[75%] before:bg-dark-whiteText bg-light-toggle'
						: 'before:left-[25%] before:dark:bg-light-darkText dark:bg-primary-limeGreen',
				]"></button>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue'

const isLight: Ref<boolean> = ref(false)

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.documentElement.classList.add('dark')
	isLight.value = false
} else {
	document.documentElement.classList.add('light')
	isLight.value = true
}

watch(isLight, newValue => {
	if (newValue) {
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.add('light')
	} else {
		document.documentElement.classList.remove('light')
		document.documentElement.classList.add('dark')
	}
})
</script>

<style scoped></style>
