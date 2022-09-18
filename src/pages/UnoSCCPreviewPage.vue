<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();
</script>

<template>
  <h2>Global counter {{ counterStore.count }}</h2>
  <div class="text-center">
    <h2>Icons</h2>
    <p>
      <code>@iconify-json/carbon</code>
      <br />
      <code>@unocss/preset-icons</code>
    </p>
    <div>
      <span class="i-carbon-favorite"></span>
      <span class="i-carbon-earth"></span>
      and more at
      <a href="https://icones.js.org/collection/carbon" target="_blank">
        icones
      </a>
    </div>
  </div>

  <h2><code>sanitize/forms</code> example</h2>

  <form class="flex flex-col gap-4 mb-10">
    <input type="text" />
    <input type="search" />
    <input type="email" />
    <input type="number" />
    <label>
      <input type="checkbox" />
      checkbox
    </label>
    <label>
      <input type="radio" name="radio" />
      Radio
    </label>
    <label>
      <input type="radio" name="radio" />
      Radio
    </label>
    <textarea cols="30" rows="10"></textarea>
    <select>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
      <option value="4">option 4</option>
      <option value="5">option 5</option>
    </select>
    <input type="color" />
    <input type="date" />
    <button>Submit</button>
  </form>
</template>
