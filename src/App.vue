<script setup lang="ts">
import UserProvider from "./contexts/UserProvider.vue";
</script>

<template>
  <UserProvider>
    <router-view />
  </UserProvider>
</template>
