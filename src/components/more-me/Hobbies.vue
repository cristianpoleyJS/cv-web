<template>
    <section class="hobbies right-content">
        <div class="container">
            <h5 class="title-hobbies">Hobbies</h5>
            <div class="row">
                <div class="col m3 s6">
                    <a class="tooltipped" data-position="top" data-delay="50" data-tooltip="Deporte">
                        <img src="../../assets/images/hobbies/sport.svg" width="100px"/>
                    </a>
                </div>
                <div class="col m3 s6">
                    <a class="tooltipped" data-position="top" data-delay="50" data-tooltip="Universo">
                        <img src="../../assets/images/hobbies/universe.svg" width="100px"/>
                    </a>
                </div>
                <div class="col m3 s6">
                    <a class="tooltipped" data-position="top" data-delay="50" data-tooltip="Películas y series">
                        <img src="../../assets/images/hobbies/films.svg" width="100px"/>
                    </a>
                </div>
                <div class="col m3 s6">
                    <a class="tooltipped" data-position="top" data-delay="50" data-tooltip="Videojuegos">
                        <img src="../../assets/images/hobbies/videogame.svg" width="100px"/>
                    </a>
                </div>
                <div class="col m3 s6">
                    <a class="tooltipped" data-position="top" data-delay="50" data-tooltip="Viajar">
                        <img src="../../assets/images/hobbies/travel.svg" width="100px"/>
                    </a>
                </div>
                <div class="col m3 s6">
                    <a class="tooltipped" data-position="top" data-delay="50" data-tooltip="Paracaidismo">
                        <img src="../../assets/images/hobbies/parachutist.svg" width="100px"/>
                    </a>
                </div>
                <div class="col m3 s6">
                    <a class="tooltipped" data-position="top" data-delay="50" data-tooltip="Programación">
                        <img src="../../assets/images/hobbies/programming.svg" width="100px"/>
                    </a>
                </div>
                <div class="col m3 s6">
                    <a class="tooltipped" data-position="top" data-delay="50" data-tooltip="Artes marciales">
                        <img src="../../assets/images/hobbies/karate.svg" width="100px"/>
                    </a>
                </div>
            </div>
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
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .hobbies > .container > .row > .col {
        padding: 15px ;
        text-align: center;
    }
    .title-hobbies {
        margin-bottom: 35px;
    }
</style>
