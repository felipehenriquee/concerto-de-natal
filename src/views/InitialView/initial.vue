<template>
  <div class="flex justify-center items-center h-screen w-full">
    <Navbar @click="() => (show = true)" />
  </div>
</template>

<script lang="ts">
import { Auth } from "../../utils/auth.util";
import { defineComponent } from "vue";
export default defineComponent({
  name: "initialView",
  computed: {
    auth(): Auth {
      return new Auth();
    },
  },
  data() {
    return {
      show: false as boolean,
    };
  },
});
</script>
