<script lang="ts">
import {
  defineComponent,
  InjectionKey,
  provide,
  readonly,
  ref,
  Ref,
  toRefs,
} from "vue";
import authgear from "@authgear/web";

export interface UserContextValue {
  isLoggedIn: Ref<boolean>;
}

export const UserStateSymbol: InjectionKey<UserContextValue> =
  Symbol("UserState");

export default defineComponent({
  setup() {
    const isLoggedIn = ref(false);

    const state: UserContextValue = {
      isLoggedIn,
    };

    authgear.delegate = {
      onSessionStateChange: (container) => {
        const sessionState = container.sessionState;
        if (sessionState === "AUTHENTICATED") {
          isLoggedIn.value = true;
        } else {
          isLoggedIn.value = false;
        }
      },
    };

    provide<UserContextValue>(UserStateSymbol, toRefs(readonly(state)));

    return { state };
  },
});
</script>

<template>
  <slot />
</template>
