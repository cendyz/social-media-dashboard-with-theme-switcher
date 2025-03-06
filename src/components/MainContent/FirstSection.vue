<template>
	<section class="grid gap-y-[3.3rem] text-[1.4rem] md:flex md:justify-center md:gap-[3rem] md:flex-wrap xl:justify-between">
		<div
			v-for="(item, index) in data"
			:key="index"
			class="pt-[.5rem] text-center rounded-xl overflow-hidden"
			:class="item.border">
			<div class="bg-light-cardBg h-full py-[2.5rem] dark:bg-dark-cardBg md:w-[28rem] lg:hover:bg-light-hover lg:cursor-pointer dark:lg:hover:bg-dark-hover">
				<div class="flex items-center justify-center gap-x-[1rem] mb-[2.5rem]">
					<img :src="item.img" alt="facebook logo" class="block w-[2rem]" />
					<p class="font-w700 text-light-text dark:text-dark-text pt-[.5rem]">{{ item.name }}</p>
				</div>
				<p class="text-light-darkText font-w700 text-[7rem] leading-[1] dark:text-dark-whiteText">{{ item.date }}</p>
				<p class="uppercase text-light-text dark:text-dark-text font-w400 tracking-[4px]">
					{{ index == 3 ? 'subscribers' : 'followers' }}
				</p>
				<div class="flex items-center justify-center mt-[2rem] gap-x-[.6rem]">
					<img :src="index == 3 ? down : up" alt="up" class="w-[1rem]" />
					<p class="font-w700" :class="index == 3 ? 'text-primary-brightRed' : ' text-primary-limeGreen'">
						{{ item.num }} Today
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import facebook from '@/images/icon-facebook.svg'
import twitter from '@/images/icon-twitter.svg'
import instagram from '@/images/icon-instagram.svg'
import youtube from '@/images/icon-youtube.svg'
import up from '@/images/icon-up.svg'
import down from '@/images/icon-down.svg'

const data = reactive({
	0: {
		img: facebook,
		name: '@nathanf',
		date: 1987,
		num: 12,
		border: 'bg-social-facebook',
	},
	1: {
		img: twitter,
		name: '@nathanf',
		date: 1044,
		num: 99,
		border: 'bg-social-twitter',
	},
	2: {
		img: instagram,
		name: '@realnathanf',
		date: '11k',
		num: 1099,
		border: 'bg-gradient-to-r from-gradient-instagramFrom to-gradient-instagramTo',
	},
	3: {
		img: youtube,
		name: '@realnathanf',
		date: 8239,
		num: 144,
		border: 'bg-social-youtube',
	},
})
</script>

<style scoped></style>
