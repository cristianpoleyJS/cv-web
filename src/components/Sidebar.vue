<template>

    <section class="sidebar">
        <!-- <img src="../../assets/images/avatar.jpg"/> -->
        <!-- Accesos directos -->
        <div class="sidebar__nav-wrapper">
            <ul>
                <li id="go-start" class="hover-to-right"><a>{{ $t('components.sidebar.start') }}</a></li>
                <li id="go-about-me" class="hover-to-right"><a>{{ $t('components.sidebar.about_me') }}</a></li>
                <li id="go-information" class="hover-to-right"><a>{{ $t('components.sidebar.info') }}</a></li>
                <li id="go-portfolio" class="hover-to-right"><a>{{ $t('components.sidebar.projects') }}</a></li>
                <li id="go-hobbies" class="hover-to-right"><a>{{ $t('components.sidebar.hobbies') }}</a></li>
                <li id="go-contact" class="hover-to-right"><a>{{ $t('components.sidebar.contact') }}</a></li>
            </ul>
        </div>
        <!-- Parte inferior (redes sociales) -->
        <div class="sidebar__social">
            <ul>
                <li><a class="linkedin" href="https://www.linkedin.com/in/cristian-poley" target="_blank"></a></li>
                <li><a class="github" href="https://github.com/cripolgon" target="_blank"></a></li>
                <li><a class="google" href="https://plus.google.com/110096300638991226474?hl=es" target="_blank"></a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>
</style>
