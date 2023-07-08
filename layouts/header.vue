<template>
  <div class="flex flex-wrap justify-between border-b-4 pt-2 pb-2 p-4">
    <div
      class="flex flex-wrap justify-center items-center w-[80px] max-sm:w-[40px] max-sm:m-4">
      <nuxt-link to="/"> <img src="/images/logo.png" alt="Heng Chomroeun" /></nuxt-link>
    </div>
    <div
      class="space-x-[80px] font-bca text-gray-500 text-xl pt-6 max-sm:space-x-[8px] max-sm:text-lg max-[400px]:text-[16px]">
      <nuxt-link
        :to="localPath('/')"
        class="hover:rounded-2xl hover:bg-[#7ED957] hover:text-white pt-2 pb-2 pl-6 pr-6"
<<<<<<< HEAD
        >{{ $t("home") }}</nuxt-link
=======
        >{{$t("home")}}</nuxt-link
>>>>>>> b7782f20ad8a605b7d5910a88714407103b3585c
      >
      <nuxt-link
        :to="localPath('/about')"
        class="hover:rounded-2xl hover:bg-[#7ED957] hover:text-white pt-2 pb-2 pl-6 pr-6"
<<<<<<< HEAD
        >{{ $t("about") }}</nuxt-link
=======
        >{{$t("about")}}</nuxt-link
>>>>>>> b7782f20ad8a605b7d5910a88714407103b3585c
      >

      <nuxt-link
<<<<<<< HEAD
        :to="localPath('/project')"
        class="hover:rounded-2xl hover:bg-[#7ED957] hover:text-white pt-2 pb-2 pl-6 pr-6"
        >{{ $t("project") }}</nuxt-link
=======
        to="/project"
        class="max-sm:border-2 max-sm:p-2 border-4 rounded-3xl border-[#7ED957] hover:border-2 hover:rounded-2xl hover:bg-[#7ED957] hover:text-white pt-2 pb-2 pl-6 pr-6"
        >{{$t("project")}}</nuxt-link
>>>>>>> b7782f20ad8a605b7d5910a88714407103b3585c
      >
    </div>
  </div>
</template>
<<<<<<< HEAD
<script setup lang="ts">
const localPath = useLocalePath();
</script>
=======
<script></script>
>>>>>>> b7782f20ad8a605b7d5910a88714407103b3585c
