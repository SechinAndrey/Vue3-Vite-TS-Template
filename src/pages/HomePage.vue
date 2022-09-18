<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import HelloWorld from "@/components/HelloWorld.vue";
const counterStore = useCounterStore();
</script>

<template>
  <HelloWorld msg="Hello world!!!" />
  <div class="card">
    <button
      type="button"
      class="btn ma block"
      @click="counterStore.increment()"
    >
      count is {{ counterStore.count }}
    </button>
  </div>
</template>
