<script setup lang="ts">
import { ref, onMounted } from "vue";
import authgear from "@authgear/web";
import { router } from "../router";

const usedToken = ref(false);

onMounted(() => {
  async function updateToken() {
    try {
      await authgear.finishAuthentication();
    } finally {
      usedToken.value = true;
      router.replace({ path: "/" });
    }
  }

  if (!usedToken.value) {
    updateToken().catch((e) => console.error(e));
  }
});
</script>

<template></template>
