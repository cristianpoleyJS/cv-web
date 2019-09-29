<template>

    <section class="contact right-content">
        <div class="container">
            <h5 class="title-contact">Contacta conmigo</h5>
            <!-- Mapa -->
            <div class="facility-map-data">
                <div class="facility-map">
                    <div class="google-maps" itemprop="map">
                        <div class="overlay">
                            <p>¡No dudes en contactar conmigo!</p>
                            <p>Puedes mandarme un correo a la siguiente dirección</p>
                            <p><a href="mailto:cripolgon@gmail.com" target="_top">cripolgon@gmail.com</a></p>
                        </div>
                        <iframe width="100%" height="600" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAaI7KZ4pQg0REHaV2J6lXbg&key=AIzaSyDrEb-h3MDMYcyA9tPoG_0zAuCJ5dPeVpI" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss">

    .contact .overlay a {
        color: rgb(3, 155, 229) !important;
        text-decoration: none;
    }
</style>
<style scoped lang="scss">

    .contact {
        padding-top: 40px;
        padding-bottom: 40px;
        background: rgba(204, 204, 204, 0.13);
    }
    .overlay {
        position: absolute;
        margin: 130px 0px 0px 10px;
        background-color: #33373d;
        padding: 10px;
        color: #fff;

        > a {
            color: #fff !important;
        }
    }
    .title-contact {
        margin-bottom: 45px;
    }

</style>
