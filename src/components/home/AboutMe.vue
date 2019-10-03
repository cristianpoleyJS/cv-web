<template>
    <section class="about-me container">
        <span class="about-me__title">{{ $t('components.about_me.title') }}</span>
        <div class="about-me__desires">
            <div class="about-me__desires--question">
                <span>{{ $t('components.about_me.question1_title') }}</span>
                <p>{{ $t('components.about_me.question1_description') }}

                </p>
            </div>
            <div class="about-me__desires--question">
                <span>{{ $t('components.about_me.question2_title') }}</span>
                <p>{{ $t('components.about_me.question2_description') }}</p>
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
