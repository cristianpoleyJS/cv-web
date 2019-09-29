<template>
    <section class="about-me">
        <h5 class="title">Sobre mí</h5>
        <div>
            <p>Siempre me ha gustado la tecnología, y siempre tuve curiosidad de saber cómo funcionan las cosas (un ordenador, un programa, internet, etc.). Además, siempre me atrajo la idea de crear algo que la gente pudiera utilizar y le pudiese ser de ayuda. Por ello, decidí ser <span class="font-weight">Ingeniero Informático</span>.</p>
            <p>Respecto a mis planes de futuro y de carrera, podría dividirlos en corto y medio plazo:</p>
            <ul>
                <li><i class="fa fa-caret-right" aria-hidden="true"></i> A corto plazo, mi objetivo es aprender. Tengo conocimientos avanzados en frameworks Javascript como son Angular 4, Meteor.js, Vue.js, etc., pero aún me queda mucho por aprender y creo que la ambición por mejorar y aprender cosas nuevas es clave para cualquier trabajador. En esta profesión hay que actualizarse continuamente y nunca se deja de aprender, y en eso me quiero centrar, mejorar mis conocimientos tecnológicos.</li>
            </ul>
        </div>
        <div class="col m6 s12">
            <ul>
                <li><i class="fa fa-caret-right" aria-hidden="true"></i> A medio plazo, me gustaría tener un puesto de mayor responsabilidad. Pienso que al final tu perfil profesional debe evolucionar en las responsabilidades. A parte de programar, me gustaría gestionar y planificar el trabajo de un equipo para cumplir los objetivos de un proyecto.</li>
            </ul><p>La mejora de tu perfil profesional siempre es obligatorio, pero también lo es la mejora personal, el superarse e intentar mejorar como persona cada día. Siempre intento aportar mi forma de ser y actitud en un equipo de trabajo y llevarme algo de cada uno de los miembros. Esto te va a hacer mejorar tanto profesional como personalmente.</p>
        </div>
        <div class="col m12 s12">
            <h6 class="sentence">
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                Amplia tu mente para ampliar tus horizontes
                <i class="fa fa-quote-right" aria-hidden="true"></i>
            </h6>
        </div>
    </section>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped lang="scss">

    .about-me {
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: justify;
    }
    .sentence {
        text-align: center;
        color: #2098d1;
        font-size: 15px;
        font-weight: 600;
    }
    .sentence > i {
        color: #33373d !important;
    }
</style>
