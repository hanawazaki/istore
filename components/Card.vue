<template>
  <div class="card p-2 md:p-4 flex flex-col gap-2">
    <NuxtLink :to="`/item/${data.id}`">
      <div class="image bg-white rounded-[22px] p-4">
        <img :src="data.image" alt="watch" class="mx-auto" />
      </div>
    </NuxtLink>

    <div
      class="desc bg-transparent p-0 md:p-2 flex flex-col gap-2 justify-between"
    >
      <NuxtLink :to="`/item/${data.id}`">
        <h3 class="text-dark text-sm md:textBodySM xl:textBodyMN">
          {{ data.title }}
        </h3>
      </NuxtLink>
      <h4 class="text-tertiary text-xs md:textBodySM">
        {{ data.description }}
      </h4>
      <div
        class="p-0 md:p-2 flex justify-between text-left md:items-center flex-col md:flex-row"
      >
        <h3 class="text-dark text-sm md:textBodySM xl:textBodyMN">
          $ {{ data.price }}
        </h3>
        <button class="p-2 rounded-[9px] bg-dark hidden md:block">
          <img src="../assets/icons/bag-add.svg" alt="bag-add" />
        </button>
      </div>
      <Button
        :isicon="true"
        icon="bag-add.svg"
        name="Add to bag"
        class="p-2 rounded-[9px] bg-dark w-full flex items-center gap-2 cursor-pointer block md:hidden md:w-auto"
      >
      </Button>
    </div>
  </div>
</template>

<script setup>
const { data } = defineProps(["data"]);
</script>

<style lang="scss" scoped></style>
