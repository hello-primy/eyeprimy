<template>
  <div>
    <q-layout>
      <q-layout-header>
        <q-toolbar
          color="primary"
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

          <q-toolbar-title>
            Quasar App
            <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
          </q-toolbar-title>
        </q-toolbar>

      </q-layout-header>
      <q-page-container>
        <router-view />

      </q-page-container>
      <!-- Tabs -->
      <q-tabs position="bottom"
      align="justify">
        <q-route-tab
          icon="mail"
          to="/shop"
          exact
          slot="title"
        />
        <q-route-tab
          icon="camera"
          to="/camera"
          exact
          slot="title"
        />
        <q-route-tab
          icon="alarm"
          to="/settings"
          exact
          slot="title"
        />
      </q-tabs>
    </q-layout>
  </div>

</template>

<script>

export default {
  name: 'LayoutDefault',
  data () {
  },
  methods: {
  }
}
</script>

<style>
</style>
