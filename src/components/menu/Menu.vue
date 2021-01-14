<template>
  <aside class="menu">
    <p class="menu-label">
      {{ $t('menu.general') }}
    </p>
    <ul class="menu-list">
      <AnimalCreationMenu />
      <li>
        <a>{{ $t('menu.animals') }}</a>
        <ul>
          <li>
            <a>{{ $t('menu.cats') }}</a>
          </li>
          <li>
            <a>{{ $t('menu.dogs') }}</a>
          </li>
          <li>
            <a>{{ $t('menu.other') }}</a>
          </li>
        </ul>
      </li>
    </ul>
    <p class="menu-label">
      {{ $t('menu.administration') }}
    </p>
    <ul class="menu-list">
      <li>
        <a>{{ $t('menu.createAccount') }}</a>
      </li>
      <li>
        <a>{{ $t('menu.connect') }}</a>
      </li>
      <li>
        <a>{{ $t('menu.other') }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import AnimalCreationMenu from './AnimalCreationMenu';

export default {
  name: 'Menu.vue',
  components: { AnimalCreationMenu },
};
</script>

<style scoped></style>
