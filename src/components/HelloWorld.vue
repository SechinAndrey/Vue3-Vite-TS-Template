<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <h1 class="font-pacifico">{{ msg }}</h1>
  </div>
</template>
