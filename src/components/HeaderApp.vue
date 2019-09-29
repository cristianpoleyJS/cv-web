<template>
    <header class="header">

        <img class="header__icon" src="../assets/images/icons/ico-cp.svg"/>

        <ul class="header__navigation">
            <li>
                <router-link :to="'/home'" class="hover-to-right">
                    Home
                </router-link>
            </li>
            <li>
                <router-link :to="'/experience'" class="hover-to-right">
                    Experience
                </router-link>
            </li>
            <li>
                <router-link :to="'/portfolio'" class="hover-to-right">
                    Portfolio
                </router-link>
            </li>
            <!-- <li>
                <router-link :to="'/more-me'" class="hover-to-right">
                    More me
                </router-link>
            </li> -->
        </ul>
    </header>
</template>

<script>
export default {
  name: 'HeaderApp'
}
</script>

<style scoped lang="scss">

    .header {
        position: absolute;
        z-index: 999;
        background-color: transparent;
        top: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1rem 0;

        &__icon {
            width: 3.5rem;
            height: 3.5rem;
            margin-left: 1rem;
        }

        &__navigation {
            display: inline-flex;
            list-style: none;
            margin-right: 1rem;
            background-color: $primaryFontColor;
            padding: 1rem;

            > li > a {
                color: #fff;
                text-decoration: none;
                margin-right: 1rem;
            }
        }
    }
</style>
