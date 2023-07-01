<template>
  <div class="bag">
    <div class="flex flex-col gap-[10px] justify-center text-center">
      <h3 class="text-[30.06px] text-[#1A1F16] font-medium text-center">Bag</h3>
      <div class="cart-product p-2 grid grid-cols-3 gap-4">
        <div class="bg-white rounded-xl">
          <img src="../assets/images/iphone12-2.png" alt="product" />
        </div>
        <div class="bg-white rounded-xl">
          <img src="../assets/images/iphone12-2.png" alt="product" />
        </div>
        <div class="bg-white rounded-xl">
          <img src="../assets/images/iphone12-2.png" alt="product" />
        </div>
        <div class="bg-white rounded-xl">
          <img src="../assets/images/iphone12-2.png" alt="product" />
        </div>
        <div class="bg-white rounded-xl">
          <img src="../assets/images/iphone12-2.png" alt="product" />
        </div>
      </div>
      <button
        class="bg-[#1A1F16] rounded-[14px] px-6 py-2 flex justify-center text-center"
      >
        <img src="/assets/icons/bag-white.svg" />
        <label class="text-xl font-medium text-white">View Bag</label>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bag {
  padding: 72px 8px;
}
</style>
