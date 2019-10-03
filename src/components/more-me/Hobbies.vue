<template>
    <section class="hobbies container">
        <span class="hobbies__title">{{ $t('components.hobbies.title') }}</span>

        <div class="hobbies__container">
          <span>
            <img src="../../assets/images/hobbies/sport.svg" width="100px"/>
          </span>
          <span>
            <img src="../../assets/images/hobbies/universe.svg" width="100px"/>
          </span>
          <span>
            <img src="../../assets/images/hobbies/films.svg" width="100px"/>
          </span>
          <span>
            <img src="../../assets/images/hobbies/videogame.svg" width="100px"/>
          </span>
          <span>
            <img src="../../assets/images/hobbies/travel.svg" width="100px"/>
          </span>
          <span>
            <img src="../../assets/images/hobbies/parachutist.svg" width="100px"/>
          </span>
          <span>
            <img src="../../assets/images/hobbies/programming.svg" width="100px"/>
          </span>
          <span>
            <img src="../../assets/images/hobbies/karate.svg" width="100px"/>
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

    padding: 6rem 1.5rem;
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
        }
    }
  }
</style>
