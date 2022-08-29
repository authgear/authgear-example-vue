<script setup lang="ts">
import { onMounted } from "vue";
import authgear from "@authgear/web";
import { router } from "../router";

onMounted(() => {
  async function updateToken() {
    try {
      await authgear.finishAuthentication();
    } finally {
      router.replace({ path: "/" });
    }
  }
  updateToken().catch((e) => console.error(e));
});
</script>

<template></template>
