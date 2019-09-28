<template>
    <div class="intro">
        <div class="intro__background"/>
        <div class="intro__info-personal">
            <h2 class="intro__info-personal--name">
                ¡Hola! Me llamo <strong>Cristian Poley</strong>
            </h2>
            <h4 class="intro__info-personal--profession">
                Ingeniero Informático - Soñador y amante Front-end
            </h4>
            <h5>
                <a target="_blank" href="http://www.cristianpoley.com/CristianPoleyCV.pdf">Descargar mi CV</a>
            </h5>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style scoped lang="scss">

    .intro {

        &__background {
            background-image: url('../assets/img/background.jpg');
            background-size: cover;
            box-shadow: inset 0 0 0 20000px rgba(36, 70, 105, 0.74)
        }

        &__info-personal {
            color: #fff;
            position: absolute;
            top: 15%;
            left: 30%;

            &--name {
                font-weight: 600;
            }

            &--profession {
                color: #caa669;
            }
        }
    }
    /**
    .parallax-container {
    height: 100vh !important;
    background-size: cover;
    box-shadow: inset 0 0 0 20000px rgba(36, 70, 105, 0.74)
}

.info-personal {
    color: #fff;
    position: absolute;
    top: 15%;
    left: 30%;
}

.name > strong {
    font-weight: 600;
}

.profession {
    color: #caa669;
}
*/
</style>
