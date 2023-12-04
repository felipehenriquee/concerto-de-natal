<template>
  <div id="about" class="w-full min-h-screen flex items-center flex-col gap-4">
    <div class="container">
      <h3 class="mt-16 text-[38px] md:text-[48px] font-[600] text-center">
        O Concerto
      </h3>
      <div class="mt-8 flex flex-col gap-16">
        <div
          :class="`flex items-center ${
            card.class === 'left'
              ? 'flex-col sm:flex-row'
              : 'flex-col sm:flex-row-reverse'
          }`"
          v-for="(card, i) in cards"
          :key="i"
        >
          <img
            class="min-w-[300px] w-[90%] sm:w-[30%]"
            :src="card.image"
            alt="imagem"
          />
          <div
            :style="`background-image: url(${background})`"
            :class="`background-card-concerto w-[90%] sm:w-[50%] min-w-[300px] sm:min-w-[450px]  text-white min-h-[300px] ${
              card.class === 'left'
                ? 'ml-0 sm:ml-[-100px]'
                : 'mr-0 sm:mr-[-100px] z-10'
            } flex justify-center items-center`"
          >
            <p class="text-[17px] p-4 ">{{ card.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import background from "@/assets/images/background.jpg";
import about1 from "@/assets/images/about/01.jpg";
import about2 from "@/assets/images/about/02.jpg";
import about3 from "@/assets/images/about/03.png";
import about4 from "@/assets/images/about/04.jpg";
export default defineComponent({
  name: "About",
  data() {
    return {
      show: false as boolean,
      background: background,
      cards: [
        {
          image: about1,
          class: "left",
          content:
            "O Concerto de Natal da Catedral surgiu da ideia de evidenciar as mais belas músicas natalinas destacando o trabalho de músicos oriundos de orquestras que se reúnem em novas formações e executam um repertório de excelente qualidade musical por meio de canções que permeiam o imaginário popular.",
        },
        {
          image: about2,
          class: "rigth",
          content:
            "O evento objetiva presentear a cidade e tem o intuito de estimular a confraternização, a solidariedade e a paz. Sua realização gera benefícios econômicos, sociais e culturais devido à sua magnitude.",
        },
        {
          image: about3,
          class: "left",
          content:
            "Sob o aspecto social, o Concerto é aberto ao público e oferecido de forma gratuita à população constituindo uma oportunidade cultural para crianças, jovens e adultos de diversas classes sociais. Além disso, a realização do evento possibilita renda para profissionais primários de forma indireta.",
        },
        {
          image: about4,
          class: "right",
          content:
            "O Concerto de Natal da Catedral será realizado no sábado, dia 09 de dezembro de 2023 com início às 17:00 h e terá uma hora e meia de duração para um público estimado de 5.500 (cinco mil e quinhentas) pessoas desenvolvendo-se com a participação de orquestra, um grupo de tenores e um grupo de regentes selecionado pela Comissão Organizadora.",
        },
      ],
    };
  },
  methods: {},
});
</script>
<style lang="scss">
.background-card-concerto {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
