<template>
  <div class="bag px-[122px] py-[56px] bg-[#EDEDED] min-h-screen">
    <div class="flex flex-row justify-between gap-20">
      <!-- details checkout -->
      <div class="flex flex-col gap-6 flex-auto w-9/12">
        <!-- address card -->
        <div class="address-card rounded-xl p-4 flex flex-col gap-2 bg-white">
          <h4 class="title text-[31px] text-[#1A1F16] font-normal">
            Shipping Address
          </h4>
          <div class="flex flex-row justify-between">
            <div class="current-address p-2 flex flex-col gap-2">
              <h3 class="text-xl font-normal text-[#1A1F16]">John Maker</h3>
              <h3 class="text-xl font-normal text-[#1A1F16]">
                123 Plae Grond Stret
              </h3>
              <h3 class="text-xl font-normal text-[#1A1F16]">
                Vermont, California
              </h3>
              <h3 class="text-xl font-normal text-[#1A1F16]">
                United States of America
              </h3>
            </div>
            <div class="actions">
              <button
                class="px-6 py-2 rounded-xl bg-white text-base font-normal border border-[#1A1F16]"
              >
                Change
              </button>
            </div>
          </div>
        </div>
        <!-- paymanet card -->
        <div class="payment-card rounded-xl p-4 flex flex-col gap-2 bg-white">
          <h4 class="title text-[31px] text-[#1A1F16] font-normal">
            Payment Method
          </h4>
          <div class="flex flex-row justify-between">
            <div class="current-address p-2 flex flex-col gap-2">
              <div class="flex flex-row gap-2">
                <img src="../../assets/icons/mastercard.svg" alt="" />
                <h3 class="text-xl font-normal text-[#1A1F16]">
                  Mastercard ending in 1252
                </h3>
              </div>
              <div class="flex flex-row gap-2">
                <img src="../../assets/icons/gift.svg" alt="" />
                <h3 class="text-xl font-normal text-[#1A1F16]">
                  $ 53.21 gift card balance
                </h3>
              </div>
              <div class="flex flex-row gap-2">
                <img src="../../assets/icons/Checkbox-Input.svg" alt="" />
                <h3 class="text-xl font-normal text-[#1A1F16]">
                  Billing address same as Shipping Address
                </h3>
              </div>
            </div>
            <div class="actions">
              <button
                class="px-6 py-2 rounded-xl bg-white text-base font-normal border border-[#1A1F16]"
              >
                Change
              </button>
            </div>
          </div>
        </div>
        <!-- review bag -->
        <div class="payment-card rounded-xl p-4 flex flex-col gap-2 bg-white">
          <h4 class="title text-[31px] text-[#1A1F16] font-normal">
            Review you Bag
          </h4>
          <div class="mt-5 px-6 py-4 flex flex-col gap-4">
            <!-- product 1 -->
            <div class="product-item flex flex-row">
              <div class="product-image">
                <img src="../../assets/images/laptop.png" alt="laptop" />
              </div>
              <div class="product-desc p-2 flex flex-col gap-2">
                <div class="header">
                  <h4 class="text-[31px] text-[#1A1F16] font-normal px-2">
                    Dell XPS 13
                  </h4>
                  <h6 class="px-2 text-xl text-[#60695C] font-normal">White</h6>
                </div>
                <div class="p-2">
                  <h4 class="text-xl text-[#1A1F16] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam
                  </h4>
                </div>
                <div
                  class="detail-special px-2 py-4 flex flex-row items-center"
                >
                  <div class="flex flex-row gap-2 pr-4">
                    <img
                      src="../../assets/icons/Star.svg"
                      alt="star"
                      class="w-6"
                    />
                    <img
                      src="../../assets/icons/Star.svg"
                      alt="star"
                      class="w-6"
                    />
                    <img
                      src="../../assets/icons/Star.svg"
                      alt="star"
                      class="w-6"
                    />
                    <img
                      src="../../assets/icons/Star.svg"
                      alt="star"
                      class="w-6"
                    />
                    <img
                      src="../../assets/icons/Star-half.svg"
                      alt="star"
                      class="w-6"
                    />
                  </div>
                  <div class="">
                    <h6
                      class="text-[#12805D] text-xl text-normal tracking-[-0.4px]"
                    >
                      4.5 / 5
                    </h6>
                  </div>
                </div>
                <div class="price-rating flex flex-row justify-between p-2">
                  <div class="price p-2">
                    <h6 class="text-xl text-[#1A1F16] font-normal">
                      $ 1799.99 x 1
                    </h6>
                  </div>

                  <div class="flex flex-row p-2 gap-4 items-center">
                    <button
                      @click="handleDecrease"
                      class="bg-transparent text-4xl font-semibold text-[#E5252C]"
                    >
                      -
                    </button>
                    <h6
                      type="number"
                      class="text-xl font-normal text-[#1A1F16]"
                    >
                      {{ count }}
                    </h6>

                    <button
                      @click="handleIncrease"
                      class="bg-transparent text-4xl font-semibold text-[#02D693]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <!-- product 2 -->
            <div class="product-item flex flex-row">
              <div class="product-image">
                <img src="../../assets/images/laptop.png" alt="laptop" />
              </div>
              <div class="product-desc p-2 flex flex-col gap-2">
                <div class="header">
                  <h4 class="text-[31px] text-[#1A1F16] font-normal px-2">
                    Dell XPS 13
                  </h4>
                  <h6 class="px-2 text-xl text-[#60695C] font-normal">White</h6>
                </div>
                <div class="p-2">
                  <h4 class="text-xl text-[#1A1F16] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam
                  </h4>
                </div>
                <div
                  class="detail-special px-2 py-4 flex flex-row items-center"
                >
                  <div class="flex flex-row gap-2 pr-4">
                    <img
                      src="../../assets/icons/Star.svg"
                      alt="star"
                      class="w-6"
                    />
                    <img
                      src="../../assets/icons/Star.svg"
                      alt="star"
                      class="w-6"
                    />
                    <img
                      src="../../assets/icons/Star.svg"
                      alt="star"
                      class="w-6"
                    />
                    <img
                      src="../../assets/icons/Star.svg"
                      alt="star"
                      class="w-6"
                    />
                    <img
                      src="../../assets/icons/Star-half.svg"
                      alt="star"
                      class="w-6"
                    />
                  </div>
                  <div class="">
                    <h6
                      class="text-[#12805D] text-xl text-normal tracking-[-0.4px]"
                    >
                      4.5 / 5
                    </h6>
                  </div>
                </div>
                <div class="price-rating flex flex-row justify-between p-2">
                  <div class="price p-2">
                    <h6 class="text-xl text-[#1A1F16] font-normal">
                      $ 1799.99 x 1
                    </h6>
                  </div>

                  <div class="flex flex-row p-2 gap-4 items-center">
                    <button
                      @click="handleDecrease"
                      class="bg-transparent text-4xl font-semibold text-[#E5252C]"
                    >
                      -
                    </button>
                    <h6
                      type="number"
                      class="text-xl font-normal text-[#1A1F16]"
                    >
                      {{ count }}
                    </h6>

                    <button
                      @click="handleIncrease"
                      class="bg-transparent text-4xl font-semibold text-[#02D693]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <!-- order summary-->
      <div
        class="checkout rounded-xl p-4 flex flex-col gap-2 bg-white flex-auto w-3/12 h-60"
      >
        <h5 class="text-xl">Order Summary</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "bagLayout",
});

const count = ref(0);

const handleIncrease = () => {
  count.value++;
};
const handleDecrease = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style scoped>
.title {
  letter-spacing: 7.813px;
  text-transform: uppercase;
}
</style>
