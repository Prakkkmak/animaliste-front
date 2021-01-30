<template>
  <aside class="menu">
    <p class="menu-label">
      {{ $t('menu.general') }}
    </p>
    <ul class="menu-list">
      <AnimalCreationMenu />
      <li>
        <router-link :to="{ name: 'Animals' }">
          <a>{{ $t('menu.animals') }}</a>
        </router-link>
        <ul>
          <li>
            <router-link :to="{ name: 'UnderConstruction' }">
              <a>{{ $t('menu.cats') }}</a>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'UnderConstruction' }">
              <a>{{ $t('menu.dogs') }}</a>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'UnderConstruction' }">
              <a>{{ $t('menu.other') }}</a>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <p class="menu-label">
      {{ $t('menu.administration') }}
    </p>
    <ul class="menu-list">
      <li>
        <router-link :to="{ name: 'AccountCreation' }">
          <a>{{ $t('menu.createAccount') }}</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AccountLogin' }">
          <a>{{ $t('menu.connect') }}</a>
        </router-link>
      </li>
    </ul>
  </aside>
  <footer class="footer">
    Version {{ showVersion() }}
    <a href="https://github.com/Prakkkmak/animaliste-front">Github</a>
  </footer>
</template>

<script>
import AnimalCreationMenu from './AnimalCreationMenu';

export default {
  name: 'Menu.vue',
  components: { AnimalCreationMenu },
  methods: {
    showVersion() {
      return process.env.VUE_APP_VERSION;
    },
  },
};
</script>

<style scoped></style>
