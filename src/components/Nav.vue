<template>
	<nav class="px-[3rem] py-[5rem] container md:flex md:items-center md:justify-between">
		<div class="pb-[2rem] border-b-[1px] border-light-darkText dark:border-light-text md:border-none md:pb-0">
			<h1 class="font-w700 text-light-darkText text-[2.5rem] md:text-[3.3rem] dark:text-dark-whiteText">
				Social Media Dashboard
			</h1>
			<p class="font-w700 text-light-text dark:text-dark-text md:text-[1.7rem]">Total Followers: 23,004</p>
		</div>
		<div class="mt-[2.3rem] flex justify-between items-center md:gap-x-[1.7rem]" :class="!isLight && 'colorHover'">
			<p class="text-light-text font-w700 dark:text-dark-text transition-colors select-none:">Dark Mode</p>
			<button
				type="button" aria-label="toggle theme button"
				@click="isLight = !isLight"
				class="py-[1.5rem] px-[3rem] rounded-badge relative before:absolute before:w-[2.2rem] before:h-[2.2rem] before:rounded-full before:translate-y-[-50%] before:top-1/2 before:translate-x-[-50%] before:transition-all before:duration-300 dark:bg-gradient-to-r lg:cursor-pointer"
				:class="[
					isLight
						? 'before:left-[75%] before:bg-dark-whiteText bg-light-toggle'
						: 'before:left-[25%] before:dark:bg-light-darkText dark:from-dark-bFrom dark:to-dark-bTo',
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

<style scoped lang="scss">
.colorHover:has(button:hover) p {
	color: white;
}
</style>
