<template>
  <div>
    <q-toolbar color="grey-10">
      <q-toolbar-title class="primy-font">
        Kacamata untuk wajah oval
      </q-toolbar-title>
    </q-toolbar>
    <q-carousel
      color="white"
      arrows
      quick-nav
      height="300px"
    >
      <q-carousel-slide img-src="assets/kacamata/primy_banner1.jpg" />
      <q-carousel-slide img-src="assets/kacamata/primy_banner2.jpg" />
      <q-carousel-slide img-src="assets/kacamata/primy_banner3.jpg" />
    </q-carousel>
    <div class="row justify-center">
      <q-card class="center" inline style="width: 45%">
        <q-card-media>
          <img src="~assets/kacamata/dummy1.jpg">
        </q-card-media>
      </q-card>

      <q-card class="center" inline style="width: 45%">
        <q-card-media>
          <img src="~assets/kacamata/dummy2.jpg">
        </q-card-media>
      </q-card>

      <q-card class="center" inline style="width: 45%">
        <q-card-media>
          <img src="~assets/kacamata/dummy3.jpg">
        </q-card-media>
      </q-card>

      <q-card class="center" inline style="width: 45%">
        <q-card-media>
          <img src="~assets/kacamata/dummy4.jpg">
        </q-card-media>
      </q-card>

    </div>
  </div>
</template>
<script>
export default {
}
</script>
