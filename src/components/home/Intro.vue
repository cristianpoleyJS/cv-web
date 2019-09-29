<template>
    <div class="intro">
        <div class="intro__info-personal">
            <h2 class="intro__info-personal--name" v-html="$t('components.intro.hi')"/>
            <h4 class="intro__info-personal--profession">
                {{ $t('components.intro.profession') }}
            </h4>
            <h5>
                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/CristianPoleyCV.pdf?alt=media&token=106cdb84-90c1-48c2-9cec-aaf2d3af02e4">
                    {{ $t('components.intro.download_pdf') }}
                </a>
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

        background-image: url('../../assets/images/background.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
        display: block;
        box-shadow: inset 0 0 0 20000px rgba(36, 70, 105, 0.74);

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
