<template>
	<section>
		<h2 class="text-[2.5rem] font-w700 pb-[2.2rem]">Overview - Today</h2>
		<div class="grid gap-y-[2rem] md:flex md:flex-wrap md:justify-center md:gap-[3rem] xl:justify-between">
			<div
				v-for="(item, index) in data"
				:key="index"
				class="p-[2.5rem] bg-light-cardBg rounded-xl grid gap-y-[2.8rem] dark:bg-dark-cardBg md:w-[28rem] lg:hover:bg-light-hover dark:lg:hover:bg-dark-hover lg:cursor-pointer">
				<div class="flex items-center justify-between">
					<p class="font-w700 text-light-text  dark:text-dark-text">{{ item.title }}</p>
					<img :src="item.img" alt="facebook" class="w-[2.2rem]" />
				</div>
				<div class="flex items-center justify-between">
					<p class="font-w700 text-[4rem] text-light-darkText leading-[1] dark:text-dark-whiteText">{{ item.num }}</p>
					<div class="flex items-center gap-x-[.5rem]">
						<img :src="item.arrow" alt="up" class="w-[1rem]" />
						<p class="font-w700" :class="item.arrow === up ? 'text-primary-limeGreen' : 'text-primary-brightRed'">
							{{ item.procent }}%
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import facebook from '@/images/icon-facebook.svg'
import instagram from '@/images/icon-instagram.svg'
import twitter from '@/images/icon-twitter.svg'
import youtube from '@/images/icon-youtube.svg'
import up from '@/images/icon-up.svg'
import down from '@/images/icon-down.svg'

const data = reactive({
	0: {
		title: 'Page Views',
		img: facebook,
		arrow: up,
		num: 87,
		procent: 3,
	},
	1: {
		title: 'Likes',
		img: facebook,
		arrow: down,
		num: 52,
		procent: 2,
	},
	2: {
		title: 'Likes',
		img: instagram,
		arrow: up,
		num: 5462,
		procent: 2257,
	},
	3: {
		title: 'Profile Views',
		img: instagram,
		arrow: up,
		num: '52k',
		procent: 1375,
	},
	4: {
		title: 'Retweets',
		img: twitter,
		arrow: up,
		num: 117,
		procent: 303,
	},
	5: {
		title: 'Likes',
		img: twitter,
		arrow: up,
		num: 507,
		procent: 553,
	},
	6: {
		title: 'Likes',
		img: youtube,
		arrow: down,
		num: 107,
		procent: 19,
	},
	7: {
		title: 'Total views',
		img: youtube,
		arrow: down,
		num: 1407,
		procent: 12,
	},
})

console.log(data[0].arrow === up)
</script>

<style scoped></style>
