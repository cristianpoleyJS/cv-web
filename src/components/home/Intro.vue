<template>
    <section class="intro">
        <div class="intro__info-personal">
            <span class="intro__info-personal--name" v-html="$t('components.intro.hi')"/>
            <span class="intro__info-personal--profession">
                {{ $t('components.intro.profession') }}
            </span>
            <span class="intro__info-personal--cv">
                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/cristian-poley-webs.appspot.com/o/CristianPoleyCV.pdf?alt=media&token=106cdb84-90c1-48c2-9cec-aaf2d3af02e4">
                    {{ $t('components.intro.download_pdf') }}
                </a>
            </span>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style scoped lang="scss">

    .intro {
        background: url('../../assets/images/background.jpg');
        background-size: cover;
        display: block;
        height: 95vh;
        box-shadow: inset 0 0 0 20000px #33373db3;
        position: relative;
        z-index: -1;

        &__info-personal {
            color: $primaryColor;
            max-width: rem(1440);
            margin: 0 auto;
            position: absolute;
            top: 30%;
            width: 100%;
            margin: 0 auto;
            padding-left: 1.5rem;

            &--name {
                margin: 0;
                font-weight: 800;
                text-transform: uppercase;
                line-height: 1;
                font-size: 5rem;

                @include mq('tablet') {
                    font-size: 9vw;
                }
            }

            &--profession {
                color: $secondFontColor;
                font-weight: 700;
                text-transform: uppercase;
                line-height: 1;
                font-size: 4rem;
                display: block;

                @include mq('tablet') {
                    font-size: 7vw;
                }
            }

            &--cv {
                display: block;
                background-color: $primaryColor;
                width: rem(120);
                padding: 0.5rem;
                border-radius: 3px;
                margin-top: 1rem;
                cursor: pointer;
                transition: background 0.3s;

                &:hover {
                    background-color: $primaryBgColor;
                }

                > a {
                    color: $secondFontColor;
                    text-decoration: none;
                }
            }
        }
    }
</style>
