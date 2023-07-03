<template>
  <button
    class="bg-[#1A1F16] rounded-[14px] px-6 py-2 flex justify-center text-center"
  >
    <img :src="`/assets/icons/${icon}`" v-if="Isicon" class="pr-2" />
    <label class="text-xl font-medium cursor-pointer text-white">{{
      name
    }}</label>
  </button>
</template>

<script setup>
defineProps({
  name: {
    type: String,
  },
  Isicon: {
    type: Boolean,
  },
  icon: {
    type: String,
    default: "bag-white.svg",
  },
});
</script>

<style scoped></style>
