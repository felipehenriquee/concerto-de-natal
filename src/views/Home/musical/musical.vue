<template>
  <div
    id="musical"
    class="background w-full min-h-screen flex items-center flex-col gap-4"
  >
    <h3 class="mt-16 text-[38px] md:text-[48px] font-[600] text-center">
      Programação Musical
    </h3>

    <div class="container mx-auto md:mt-8 p-8">
      <p class="text-justify md:text-center">
        A Comissão Organizadora preparou este evento que conta com uma
        Programação Musical que ficará a cargo do Quarteto Cantabile, composto
        por 01 (um) violoncelo, 2 (dois) violinos e 01 (uma) viola. Teremos
        ainda a presença de um contra tenor para abrilhantar ainda mais este
        momento tão especial! Conheça nosso repertório:
      </p>
    </div>

    <div class="cards-musical mx-auto container flex gap-2 justify-center px-2">
      <div
        v-for="(musica, i) in musical"
        :key="i"
        class="min-w-[250px] shadow-md w-[20%] mt-8 p-2 pb-4 rounded-md bg-[#f6f0fd]"
      >
        <img
          class="rounded-t-md gap-8 h-[200px] w-full"
          :src="musica.image"
          alt=""
        />
        <div class="w-full flex items-center flex-col mt-2">
          <h4 class="text-center text-black font-bold text-[18px]">
            {{ musica.title }}
          </h4>
          <p class="text-black text-center text-[16px]">
            {{ musica.cantor }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import background from "@/assets/images/background.jpg";
import musical14 from "@/assets/images/musical/14.jpg";
import musical15 from "@/assets/images/musical/15.jpg";
import musical16 from "@/assets/images/musical/16.jpg";
import musical17 from "@/assets/images/musical/17.jpg";
import musical18 from "@/assets/images/musical/18.jpg";
import musical19 from "@/assets/images/musical/19.jpg";
import musical20 from "@/assets/images/musical/20.jpg";
import musical21 from "@/assets/images/musical/21.jpg";
import musical22 from "@/assets/images/musical/22.jpg";
import musical23 from "@/assets/images/musical/23.jpg";
import musical24 from "@/assets/images/musical/24.jpg";
import musical25 from "@/assets/images/musical/25.jpg";
import musical26 from "@/assets/images/musical/26.jpg";
import musical27 from "@/assets/images/musical/27.jpg";
import musical28 from "@/assets/images/musical/28.jpg";
import musical29 from "@/assets/images/musical/29.jpg";

export default defineComponent({
  name: "Musical",
  data() {
    return {
      show: false as boolean,
      background: background,
      musical: [
        {
          image: musical14,
          title: "A Primavera de “As quatro estações”",
          cantor: "Vivaldi",
        },
        {
          image: musical15,
          title: "O Verão de “As quatro estações”",
          cantor: "Vivaldi",
        },
        {
          image: musical16,
          title: "O outono de “As quatro estações”",
          cantor: "Vivaldi",
        },
        {
          image: musical17,
          title: "O inverno de “As quatro estações”",
          cantor: "Vivaldi",
        },
        {
          image: musical18,
          title: "Concerto para 2 violinos em Am",
          cantor: "Vivaldi",
        },
        {
          image: musical19,
          title: "Jesus Alegria dos Homens",
          cantor: "Bach",
        },
        {
          image: musical20,
          title: "Concerto Brandemburguês n° 03",
          cantor: "Bach",
        },
        {
          image: musical21,
          title: "Suíte n° 3 para quarteto de cordas",
          cantor: "Bach",
        },
        {
          image: musical22,
          title: "Tema da Nona sinfonia para quarteto de cordas",
          cantor: "Beethoven",
        },
        {
          image: musical23,
          title: "Tema do Lago dos cisnes",
          cantor: "Tchaikovsky",
        },
        {
          image: musical24,
          title: "Tema do Danúbio Azul",
          cantor: "Straus",
        },
        { image: musical25, title: "Noturno em Bb", cantor: "Chopin" },
        { image: musical26, title: "Ave Maria", cantor: "Gounod" },
        {
          image: musical27,
          title: "Ave Maria",
          cantor: "Shubert",
        },
        {
          image: musical28,
          title: "Consagração à Nossa Senhora",
          cantor: null,
        },
        { image: musical29, title: "Nossa Senhora", cantor: "Roberto Carlos" },
      ],
    };
  },
});
</script>
<style lang="scss">
.background-concerto {
  background-position: center;
  background-repeat: no-repeat;
}
.cards-musical {
  flex-wrap: wrap;
}
</style>
