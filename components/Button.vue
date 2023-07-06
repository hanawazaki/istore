<template>
  <a
    :href="link"
    :class="`rounded-[14px] px-2 md:px-6 py-2 flex justify-center items-center text-center ${bgColor} ${
      border ? 'border border-dark' : ''
    }`"
  >
    <img :src="`/assets/icons/${icon}`" v-if="Isicon" class="pr-0 md:pr-2" />
    <label
      :class="`text-sm md:text-xl font-medium cursor-pointer text-${textColor}`"
      >{{ name }}</label
    >
  </a>
</template>

<script setup>
defineProps({
  name: {
    type: String,
  },
  Isicon: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: String,
    default: "bag-white.svg",
  },
  bgColor: {
    type: String,
  },
  border: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
    default: "dark",
  },
  link: {
    type: String,
  },
});
</script>

<style scoped></style>
