<template>
  <div class="default flex flex-row justify-between bg-[#EDEDED]">
    <!-- sidebar -->
    <button
      data-drawer-target="logo-sidebar"
      data-drawer-toggle="logo-sidebar"
      aria-controls="logo-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 mx-5 p-2 w-[72px] rounded-xl h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div
        class="h-full rounded-lg p-2 overflow-hidden bg-white dark:bg-gray-800"
      >
        <div class="flex flex-col gap-8">
          <RouterLink to="/" class="px-2">
            <img
              src="../assets/icons/logo.png"
              class="h-6 sm:h-7 mx-auto"
              alt="Flowbite Logo"
            />
          </RouterLink>
          <a href="#" class="px-2" @click="handleSideBar">
            <img
              src="../assets/icons/menu.svg"
              class="h-6 sm:h-7 mx-auto"
              alt="Flowbite Logo"
            />
          </a>

          <RouterLink
            to="/"
            class="px-2"
            :class="{ active: 'rounded-xl bg-red-500' }"
          >
            <img
              src="../assets/icons/store.svg"
              class="h-6 sm:h-7 mx-auto"
              alt="Flowbite Logo"
            />
          </RouterLink>
          <RouterLink
            to="/bag"
            class="px-2"
            :class="{ active: 'rounded-xl bg-red-500' }"
          >
            <img
              src="../assets/icons/bag.svg"
              class="h-6 sm:h-7 mx-auto"
              alt="Flowbite Logo"
            />
          </RouterLink>
        </div>
      </div>
    </aside>
    <!--  -->

    <!-- content -->
    <div class="p-4 sm:ml-[72px] w-[953px] mx-0">
      <div class="p-4 w-full min-h-screen rounded-lg dark:border-gray-700">
        <slot />
      </div>
    </div>
    <!-- content -->

    <!-- bag -->
    <div class="bag w-[345px] border-l-4 border-[#1A1F1680] min-h-screen">
      <Bag />
    </div>
    <!--  -->
  </div>
</template>

<script setup>
import Bag from "@/components/Bag";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800&display=swap");
.default {
  font-family: "Inter", sans-serif;
}
</style>
