<template>
	<Nav />
	<Main />
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue'
import Main from './components/MainContent/Main.vue'
</script>

<style lang="scss">
* {
	transition: color 0.2s, background-color 0.2s;
}
</style>
