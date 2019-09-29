<template>
    <section class="header">
        <img src="../assets/images/icons/ico-cp.svg"/>

        <router-link :to="'/home'">
            Home
        </router-link>
        <router-link :to="'/experience'">
            Home
        </router-link>
        <router-link :to="'/portfolio'">
            Home
        </router-link>
        <router-link :to="'/more-me'">
            Home
        </router-link>
    </section>
</template>

<script>
export default {
  name: 'HeaderApp'
}
</script>

<style scoped lang="scss">
    .header {
        background-color: transparent;
        color: black;
    }
</style>
