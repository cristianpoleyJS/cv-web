<template>
  <section class="hobbies container">
    <!-- Título de la sección -->
    <span class="hobbies__title">{{ $t('components.hobbies.title') }}</span>

    <div class="hobbies__container">
      <span>
        <img
          alt="Sport"
          src="../../assets/images/hobbies/sport.svg"
          width="100px">
      </span>
      <span>
        <img
          alt="Universe"
          src="../../assets/images/hobbies/universe.svg"
          width="100px">
      </span>
      <span>
        <img
          alt="Films"
          src="../../assets/images/hobbies/films.svg"
          width="100px">
      </span>
      <span>
        <img
          alt="Videogames"
          src="../../assets/images/hobbies/videogame.svg"
          width="100px">
      </span>
      <span>
        <img
          alt="Travel"
          src="../../assets/images/hobbies/travel.svg"
          width="100px">
      </span>
      <span>
        <img
          alt="Parachutist"
          src="../../assets/images/hobbies/parachutist.svg"
          width="100px">
      </span>
      <span>
        <img
          alt="Programming"
          src="../../assets/images/hobbies/programming.svg"
          width="100px">
      </span>
      <span>
        <img
          alt="Art martials"
          src="../../assets/images/hobbies/karate.svg"
          width="100px">
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hobbies'
}
</script>

<style scoped lang="scss">
  .hobbies {

    padding: 6rem 1.5rem 2rem;
    color: $secondFontColor;

    &__title {

      color: $primaryFontColor;
    }

    &__container {

        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        > span {
          flex: 0 0 25%;
          text-align: center;
          margin-bottom: 3rem;

          @include mq('phablet') {
            flex: 0 0 45%;
          }
        }
    }
  }
</style>
