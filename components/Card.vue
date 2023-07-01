<template>
  <div class="card p-4 flex flex-col gap-2">
    <NuxtLink :to="`/item/${data.id}`">
      <div class="image bg-white rounded-[22px] p-4">
        <img :src="data.image" alt="watch" class="mx-auto" />
      </div>
    </NuxtLink>

    <div class="desc bg-transparent p-2 flex flex-col gap-2">
      <NuxtLink :to="`/item/${data.id}`">
        <h3 class="text-[#1A1F16] font-medium text-xl">{{ data.title }}</h3>
      </NuxtLink>
      <h4 class="tracking-[-0.32px] text-base font-normal text-[#60695C]">
        {{ data.description }}
      </h4>
      <div class="p-2 flex justify-between items-center">
        <h3 class="text-xl text-[#1A1F16] font-medium">$ {{ data.price }}</h3>
        <button class="p-2 rounded-[9px] bg-[#1A1F16]">
          <img src="../assets/icons/bag-add.svg" alt="bag-add" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = defineProps(["data"]);
</script>

<style lang="scss" scoped></style>
