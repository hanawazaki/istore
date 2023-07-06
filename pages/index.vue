<template>
  <main class="container p-1 md:p-6 storefront mx-auto">
    <div class="top-bar p-2 mx-auto w-auto xl:w-[507px] mb-5">
      <div class="flex flex-col gap-2">
        <label class="text-tertiary text-xs md:text-bodySmall ml-2"
          >Search Item</label
        >
        <input
          type="text"
          placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
          class="rounded-xl bg-white text-placeholder opacity-50 text-bodySmall md:text-bodyNormal"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 mb-4 gap-2">
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="getItemClass(item)"
      >
        <Card :data="item" />
      </div>
    </div>
  </main>
</template>

<script setup>
import Card from "@/components/Card.vue";

definePageMeta({
  layout: "default",
});

const data = ref([
  {
    id: 1,
    title: "Apple Watch",
    image: "../assets/images/iwatch.png",
    description: "Series 5 SE",
    price: "529.99",
    isLarge: false,
  },
  {
    id: 2,
    title: "Sony ZX330BT",
    image: "../assets/images/headphone.png",
    description: "Light Grey",
    price: "39.99",
    isLarge: false,
  },
  {
    id: 3,
    title: "Apple Watch",
    image: "../assets/images/iwatch.png",
    description: "Series 5 SE",
    price: "529.99",
    isLarge: false,
  },
  {
    id: 4,
    title: "Apple Watch",
    image: "../assets/images/iphone12-4.png",
    description: "Series 5 SE",
    price: "529.99",
    isLarge: false,
  },
  {
    id: 5,
    title: "Apple Watch",
    image: "../assets/images/macbook.png",
    description: "Series 5 SE",
    price: "529.99",
    isLarge: true,
  },
  {
    id: 6,
    title: "Apple Watch",
    image: "../assets/images/iwatch.png",
    description: "Series 5 SE",
    price: "529.99",
    isLarge: false,
  },
  {
    id: 7,
    title: "Apple Watch",
    image: "../assets/images/iwatch.png",
    description: "Series 5 SE",
    price: "529.99",
    isLarge: false,
  },
]);

const getItemClass = (item) => {
  return item.isLarge ? "col-span-2" : "col-span-1";
};
</script>

<style scoped>
input {
  box-shadow: 0px 4px 16px 0px rgba(26, 31, 22, 0.15);
  padding: 16px 16px;
}

.storefront {
  font-family: "Cabin", sans-serif;
}

::placeholder {
  color: rgba(26, 31, 22, 0.5);
}
</style>
