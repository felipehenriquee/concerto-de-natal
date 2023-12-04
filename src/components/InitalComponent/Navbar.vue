<template>
  <nav
    class="background p-4 w-full fixed z-50"
    :style="`${
      isNavbarTransparent ? `background-image: url(${background})` : ''
    }`"
  >
    <div class="container w-full mx-auto flex justify-between items-center">
      <div>
        <a href="#home">
          <h2
            class="text-[18px] lg:text-[22px] uppercase text-center text-[#EDE434]"
          >
            Concerto de Natal da Catedral
          </h2>
        </a>
      </div>
      <div class="hidden md:flex space-x-4">
        <a
          :href="menu.href"
          class="text-white hover:text-gray-200 uppercase text-[14px] lg:text-[16px]"
          v-for="(menu, i) in menus"
          :key="i"
          >{{ menu.title }}</a
        >
      </div>
      <button
        class="md:hidden text-white text-2xl focus:outline-none"
        @click="toggleMobileMenu"
      >
        &#9776;
      </button>
    </div>
  </nav>
  <div
    v-if="isMobileMenuOpen"
    class="md:hidden fixed bg-[#00000074] top-2 right-2 w-[250px] p-4 z-50 flex flex-col justify-center items-center"
    :style="`${
      isNavbarTransparent ? `background-image: url(${background})` : ''
    }`"
  >
    <a
      :href="menu.href"
      @click="toggleMobileMenu"
      class="text-white hover:text-gray-200 p-2"
      v-for="(menu, i) in menus"
      :key="i"
      >{{ menu.title }}</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import background from "@/assets/images/background.jpg";
export default defineComponent({
  name: "Navbar",
  data() {
    return {
      isMobileMenuOpen: false,
      menus: [
        { title: "Fotos", href: "#fotos" },
        { title: "O Concerto", href: "#about" },
        { title: "Programação", href: "#musical" },
        { title: "Contato", href: "#contact" },
      ],
      isNavbarTransparent: false,
      background: background,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        this.isNavbarTransparent = true;
      } else {
        this.isNavbarTransparent = false;
      }
    },
  },
});
</script>
<style lang="scss" src="./style.scss"></style>
