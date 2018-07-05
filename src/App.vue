<template>
  <div id="q-app">
    <q-layout>
      <q-layout-header>
        <q-toolbar
          color="grey-10"
          :inverted="$q.theme === 'ios'"
        >
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
          >
            <q-icon name="menu" />
          </q-btn>

          <q-toolbar-title align="center" class="primy-font">
            PRIMY
          </q-toolbar-title>
        </q-toolbar>

      </q-layout-header>
      <q-page-container>
        <router-view />
      </q-page-container>
      <q-layout-footer>
        <q-tabs class="primy-font"
        color="grey-10"
        position="bottom"
        align="center">
          <q-route-tab
            icon="shopping_cart"
            label="Shop"
            to="/"
            exact
            slot="title"
          />
          <q-route-tab
            icon="camera"
            label="Camera"
            to="/camera"
            exact
            slot="title"
          />
          <q-route-tab
            label="Settings"
            icon="settings"
            to="/settings"
            exact
            slot="title"
          />
        </q-tabs>
      </q-layout-footer>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:700');

  .primy-font {
    font-family: 'Montserrat', sans-serif;
  }
</style>
