<script setup lang="ts">
import authgear from "@authgear/web";

const startLogin = () => {
  authgear
    .startAuthentication({
      redirectURI: "http://localhost:4000/auth-redirect",
      prompt: "login",
    })
    .then(
      () => {
        // started authorization, user should be redirected to Authgear
      },
      (err) => {
        // failed to start authorization
        console.error(err);
      }
    );
};
</script>

<template>
  <h1>Home Page</h1>
  <button @click="startLogin">Login</button>
</template>
