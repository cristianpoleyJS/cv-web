<template>

    <section class="sidebar">
    <!-- Menú flotante -->
    <div class="left-content">
        <!-- Parte superior -->
        <div>
            <img src="assets/img/avatar.jpg"/>
        </div>
        <!-- Accesos directos -->
        <div class="nav-wrapper">
            <ul>
                <li id="go-start" class="hover-to-right"><a>¡Hola!</a></li>
                <li id="go-about-me" class="hover-to-right"><a>Sobre mí</a></li>
                <li id="go-information" class="hover-to-right"><a>Información</a></li>
                <li id="go-portfolio" class="hover-to-right"><a>Portfolio</a></li>
                <li id="go-hobbies" class="hover-to-right"><a>Hobbies</a></li>
                <li id="go-contact" class="hover-to-right"><a>Contacta</a></li>
            </ul>
        </div>
        <!-- Parte inferior (redes sociales) -->
        <div class="social">
            <ul>
                <li><a class="linkedin" href="https://www.linkedin.com/in/cristian-poley" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a class="github" href="https://github.com/cripolgon" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a class="google" href="https://plus.google.com/110096300638991226474?hl=es" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>

    <!-- ############# -->
    <!-- Menú flotante responsive -->
    <a data-activates="slide-out" class="btn btn-floating pulse button-collapse"><i class="material-icons fa-2x">menu</i></a>
    <ul id="slide-out" class="side-nav">
        <img src="assets/img/avatar.jpg" style="width: 165px"/>
        <li id="go-start-responsive" class="hover-to-right"><a>¡Hola!</a></li>
        <li id="go-about-me-responsive" class="hover-to-right"><a>Sobre mi</a></li>
        <li id="go-information-responsive" class="hover-to-right"><a>Información</a></li>
        <li id="go-portfolio-responsive" class="hover-to-right"><a>Portfolio</a></li>
        <li id="go-hobbies-responsive" class="hover-to-right"><a>Hobbies</a></li>
        <li id="go-contact-responsive" class="hover-to-right"><a>Contacta</a></li>
        <li>
            <div class="social">
                <ul>
                    <li><a class="linkedin" href="https://www.linkedin.com/in/cristian-poley-239824122/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a class="github" href="https://github.com/cripolgon" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a class="google" href="https://plus.google.com/110096300638991226474?hl=es" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </li>
    </ul>
    <!-- ############# -->
    </section>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>

</style>
