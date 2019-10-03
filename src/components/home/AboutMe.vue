<template>
    <section class="about-me container">
        <span class="about-me__title">Un poco sobre mí</span>
        <div class="about-me__desires">
            <div class="about-me__desires--question">
                <span>¿Por qué me dedico a esto?</span>
                <p>
                Siempre me ha gustado la tecnología, y siempre tuve curiosidad de saber cómo
                funcionan las cosas (un ordenador, un programa, internet, etc.). Además,
                siempre me atrajo la idea de crear algo que la gente pudiera utilizar y
                le pudiese ser de ayuda. Por ello, decidí ser Ingeniero Informático y
                dedicarme a la programación.
                </p>
            </div>
            <div class="about-me__desires--question">
                <span>¿Que hago y que me gustaría hacer?</span>
                <p>
                Ahora mismo me centro en aprender nuevas skills y desarrollar aplicaciones propias,
                aunque en corto plazo me gustaría tener un puesto de mayor responsabilidad.
                Pienso que al final tu perfil profesional debe evolucionar en las responsabilidades.
                A parte de programar, me gustaría gestionar y planificar el trabajo de un equipo para cumplir
                los objetivos de un proyecto.
                </p>
            </div>
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
        padding: 1rem 2rem 5rem;
        color: #fff;

        &__desires {
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            &--question {
                flex: 0 0 45%;

                > span {
                    border-bottom: 1px solid #fff;
                    padding-bottom: 0.5rem;
                    font-style: italic;
                    margin-bottom: 1rem;
                    display: block;
                }

                > p {
                    text-align: left;
                }

                @include mq('tablet') {
                    flex: 1 0 100%;

                    margin-bottom: 1rem;
                }
            }

        }
    }
</style>
