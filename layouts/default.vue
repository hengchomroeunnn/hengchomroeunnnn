<template>
  <div class="container mx-auto">
    <NuxtLayout name="header" />
    <slot />
    <NuxtLayout name="footer" />
  </div>
</template>
<script setup>
const route = useRoute();
useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: "https://hengchomroeun.com" + route.path,
    },
  ],
}));
</script>
