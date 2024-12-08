<script setup lang="ts">
import authgear, { PromptOption, Page } from "@authgear/web";
import { inject, onMounted, ref } from "vue";
import { UserStateSymbol } from "../contexts/UserProvider.vue";

const { isLoggedIn } = inject(UserStateSymbol)!;
const isLoading = ref(false);
const greetingMessage = ref("");

onMounted(() => {
  async function updateGreetingMessage() {
    isLoading.value = true;
    try {
      if (isLoggedIn.value) {
        const userInfo = await authgear.fetchUserInfo();
        greetingMessage.value = "The current User sub: " + userInfo.sub;
      }
    } finally {
      isLoading.value = false;
    }
  }

  updateGreetingMessage().catch((e) => {
    console.error(e);
  });
});

const startLogin = () => {
  authgear
    .startAuthentication({
      redirectURI: import.meta.env.VITE_AUTHGEAR_REDIRECT_URL,
      prompt: PromptOption.Login,
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

const logout = () => {
  authgear
    .logout({
      redirectURI: "http://localhost:4000/",
    })
    .then(
      () => {
        greetingMessage.value = "";
      },
      (err) => {
        console.error(err);
      }
    );
};

const userSetting = async () => {
  await authgear.open(Page.Settings);
};
</script>

<template>
  <h1>Home Page</h1>
  <span v-if="isLoading">Loading...</span>
  <span v-if="greetingMessage">{{ greetingMessage }}</span>
  <div v-if="!isLoggedIn">
    <button @click="startLogin">Login</button>
  </div>
  <div v-if="isLoggedIn">
    <button @click="logout">Logout</button>
    <br />
    <a
      target="_blank"
      rel="noreferrer"
      @click.stop.prevent="userSetting"
      href="#"
    >
      User Setting
    </a>
  </div>
</template>
