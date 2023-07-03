<template>
  <main class="px-6 py-12">
    <div class="flex flex-col gap-4">
      <div class="breadCrumb">
        <i class="fa fa-backward mr-2"></i
        ><label class="text-xl font-normal text-[#1A1F16]">Back</label>
      </div>
      <div class="product-detail">
        <div class="container">
          <div class="flex flex-row gap-6">
            <div class="w-4/12 flex flex-row gap-4 p-2">
              <div class="images flex flex-col gap-4">
                <button class="bg-white rounded-xl w-[50px] p-2">
                  <img src="../../assets/images/iwatch.png" alt="product" />
                </button>
                <button class="bg-white rounded-xl w-[50px] p-2">
                  <img src="../../assets/images/iwatch.png" alt="product" />
                </button>
                <button class="bg-white rounded-xl w-[50px] p-2">
                  <img src="../../assets/images/iwatch.png" alt="product" />
                </button>
              </div>
              <div class="img-featured p-2 rounded-xl bg-white h-[302px]">
                <img
                  src="../../assets/images/iwatch.png"
                  alt="product-featured"
                />
              </div>
            </div>
            <div class="w-8/12 p-2">
              <div class="detail-header p-2">
                <h2 class="text-[61px] text-[#1A1F16] font-bold">
                  Apple Watch
                </h2>
                <h5 class="text-[31px] text-[#1A1F16] opacity-50 font-medium">
                  Series 5 SE
                </h5>
              </div>
              <div class="detail-special px-2 py-4 flex flex-row items-center">
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
                <div>
                  <h6
                    class="text-[#12805D] text-xl text-normal tracking-[-0.4px]"
                  >
                    4.5 / 5
                  </h6>
                </div>
              </div>
              <div>
                <h3 class="text-[31px] font-normal text-[#1A1F16]">$ 529.99</h3>
              </div>
              <div class="short-desc p-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  pellentesque tellus imperdiet mattis. Proin in quis ipsum non
                  amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc
                  volutpat, tincidunt lorem mi duis. Vitae elementum libero.
                </p>
              </div>
              <div class="p-2 flex flex-row justify-end">
                <Button name="Add to Bag" :Isicon="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="product-description p-2 flex flex-col gap-2">
        <h3 class="text-[31px] font-medium text-[#1A1F16]">Description</h3>
        <p class="text-xl font-medium text-[#60695C]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
          odio faucibus nec malesuada purus volutpat vel sed viverra. Id
          sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus
          pellentesque sagittis. Felis rhoncus facilisis massa eget purus in
          purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque
          sit mattis in egestas neque. Eu porta tempor sodales nisl integer
          turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor
          diam quisque suspendisse. Orci vel ridiculus diam viverra. Libero
          malesuada orci, quis placerat suscipit augue imperdiet. Et praesent
          augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque
          massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam
          sit viverra enim. Id id placerat eu etiam nulla laoreet. Dignissim leo
          fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam
          justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin
          ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi
          sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur
          morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra
          hendrerit risus. Odio phasellus nibh senectus nec id enim quam sed. At
          potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et
          adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at
          facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam
          cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius
          risus eros.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import Button from "@/components/Button.vue";

const { id } = useRoute().params;
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped></style>
